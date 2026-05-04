import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cookie Policy — AE Legal Flow",
}

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase hover:opacity-70 transition-opacity">← Back</Link>

        <h1 className="text-4xl font-bold mt-10 mb-2" style={{ fontFamily: "var(--font-playfair)" }}>Cookie Policy</h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: May 2026</p>

        <div className="space-y-10 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-white text-lg font-semibold mb-3">1. What are cookies</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and improve your experience.</p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">2. Cookies we use</h2>
            <div className="space-y-4 mt-2">
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4">
                <p className="text-white font-medium text-sm mb-1">Essential cookies</p>
                <p className="text-gray-400 text-sm">Required for the website to function. Cannot be disabled. These include session management and security cookies.</p>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4">
                <p className="text-white font-medium text-sm mb-1">Analytics cookies</p>
                <p className="text-gray-400 text-sm">Help us understand how visitors use the site (pages visited, time spent). We use anonymised data only. You can opt out at any time.</p>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4">
                <p className="text-white font-medium text-sm mb-1">Functional cookies</p>
                <p className="text-gray-400 text-sm">Remember your language preference so you don't have to select it each visit.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">3. Third-party cookies</h2>
            <p>We may use services from third parties that set their own cookies:</p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-gray-400">
              <li>Vercel Analytics — website performance and visitor statistics</li>
              <li>Stripe — payment processing (only active during checkout)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">4. How to manage cookies</h2>
            <p>You can control cookies through your browser settings. Note that disabling certain cookies may affect the functionality of the website. Most browsers allow you to:</p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-gray-400">
              <li>View what cookies are stored</li>
              <li>Delete specific or all cookies</li>
              <li>Block cookies from specific websites</li>
              <li>Block all third-party cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">5. Your consent</h2>
            <p>By continuing to use this website, you consent to our use of essential and functional cookies. For analytics cookies, we ask for your explicit consent. You may withdraw consent at any time by clearing your cookies in browser settings.</p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">6. Contact</h2>
            <p>Questions about our cookie policy: <a href="mailto:anatolyeriksson@gmail.com" className="text-[#C9A84C]">anatolyeriksson@gmail.com</a></p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex gap-8 text-xs text-gray-600 tracking-widest uppercase">
          <Link href="/privacy" className="hover:text-[#C9A84C] transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-[#C9A84C] transition-colors">Terms of Service</Link>
        </div>
      </div>
    </main>
  )
}
