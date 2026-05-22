import fs from "fs";
import path from "path";

const KNOWLEDGE_DIR = path.join(process.cwd(), "src/lib/knowledge");
const CHUNK_SIZE = 600; // chars per chunk
const TOP_K = 4;        // how many chunks to inject

interface Chunk {
  file: string;
  text: string;
  score: number;
}

// Load and split all knowledge files into chunks
function loadChunks(): Chunk[] {
  const chunks: Chunk[] = [];
  if (!fs.existsSync(KNOWLEDGE_DIR)) return chunks;

  const files = fs.readdirSync(KNOWLEDGE_DIR).filter((f) => f.endsWith(".md"));
  for (const file of files) {
    const content = fs.readFileSync(path.join(KNOWLEDGE_DIR, file), "utf-8");
    // Split on double newlines (paragraphs), then enforce max size
    const paragraphs = content.split(/\n{2,}/);
    let buffer = "";
    for (const para of paragraphs) {
      if ((buffer + para).length > CHUNK_SIZE && buffer.length > 0) {
        chunks.push({ file, text: buffer.trim(), score: 0 });
        buffer = para;
      } else {
        buffer += (buffer ? "\n\n" : "") + para;
      }
    }
    if (buffer.trim()) chunks.push({ file, text: buffer.trim(), score: 0 });
  }
  return chunks;
}

// Simple keyword scoring: count how many query words appear in the chunk
function score(chunk: string, query: string): number {
  const qWords = query
    .toLowerCase()
    .replace(/[^a-zåäöа-яёéàü0-9\s]/gi, " ")
    .split(/\s+/)
    .filter((w) => w.length > 3);

  let hits = 0;
  const lower = chunk.toLowerCase();
  for (const word of qWords) {
    if (lower.includes(word)) hits++;
  }
  return hits;
}

// Return top-K most relevant chunks for the query
export function retrieve(query: string): string {
  const chunks = loadChunks();
  if (!chunks.length) return "";

  const scored = chunks.map((c) => ({ ...c, score: score(c.text, query) }));
  const top = scored
    .filter((c) => c.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, TOP_K);

  if (!top.length) return "";

  return (
    "RELEVANT LEGAL CONTEXT (from knowledge base):\n\n" +
    top.map((c) => `[${c.file}]\n${c.text}`).join("\n\n---\n\n")
  );
}
