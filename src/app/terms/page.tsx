import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service — AE Legal Flow",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase hover:opacity-70 transition-opacity">← Back</Link>

        <h1 className="text-4xl font-bold mt-10 mb-2" style={{ fontFamily: "var(--font-playfair)" }}>Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: May 2026</p>

        <div className="space-y-10 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-white text-lg font-semibold mb-3">1. Service description</h2>
            <p>AE Legal Flow provides online legal consultations in migration law, Swedish law, and European law. Our services are provided by Anatoly Eriksson, a licensed legal professional based in Sweden with LL.M. degrees from Latvia and Sweden.</p>
            <p className="mt-3 text-gray-400 text-sm">Important: Anatoly Eriksson operates as a jurist (juridisk rådgivare), not as an advokat. This means he can prepare legal documents and appeals, but does not represent clients in court in person.</p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">2. Booking and payment</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Consultations are booked online and confirmed by email within 24 hours</li>
              <li>Payment is required in advance to confirm the booking</li>
              <li>All prices are stated inclusive of VAT (inkl. moms) unless otherwise noted</li>
              <li>Consultations are conducted via Zoom or Google Meet</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">3. Cancellation policy</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Cancellations made more than 24 hours before the consultation: full refund</li>
              <li>Cancellations made less than 24 hours before: no refund</li>
              <li>If we need to cancel or reschedule: full refund or new appointment at your choice</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">4. Scope of advice</h2>
            <p>Our consultations provide legal information and guidance based on the facts you present. The advice given is specific to your described situation and does not constitute a formal legal opinion unless explicitly stated in writing. Each legal situation is unique — outcomes cannot be guaranteed.</p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">5. Confidentiality</h2>
            <p>All information shared during consultations is treated as strictly confidential. We comply with GDPR and professional secrecy principles applicable under Swedish and European law.</p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">6. Limitation of liability</h2>
            <p>AE Legal Flow provides information and guidance in good faith. We are not liable for decisions made by the client based on our advice, or for outcomes of legal proceedings in which we are not directly involved as the representing party.</p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">7. Applicable law</h2>
            <p>These terms are governed by Swedish law. Any disputes shall be resolved under Swedish jurisdiction.</p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">8. Contact</h2>
            <p>Questions about these terms: <a href="mailto:anatolyeriksson@gmail.com" className="text-[#C9A84C]">anatolyeriksson@gmail.com</a></p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex gap-8 text-xs text-gray-600 tracking-widest uppercase">
          <Link href="/privacy" className="hover:text-[#C9A84C] transition-colors">Privacy Policy</Link>
          <Link href="/cookies" className="hover:text-[#C9A84C] transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </main>
  )
}
