import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy — AE Legal Flow",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase hover:opacity-70 transition-opacity">← Back</Link>

        <h1 className="text-4xl font-bold mt-10 mb-2" style={{ fontFamily: "var(--font-playfair)" }}>Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: May 2026</p>

        <div className="space-y-10 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-white text-lg font-semibold mb-3">1. Who we are</h2>
            <p>AE Legal Flow is a legal consulting service operated by Anatoly Eriksson, based in Sweden. We provide online legal consultations in the areas of migration law, Swedish law, and European law. Contact: <a href="mailto:anatolyeriksson@gmail.com" className="text-[#C9A84C]">anatolyeriksson@gmail.com</a></p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">2. What data we collect</h2>
            <p>When you use our services, we may collect:</p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-gray-400">
              <li>Name and email address (when you book a consultation or contact us)</li>
              <li>Description of your legal situation (provided voluntarily)</li>
              <li>Technical data: IP address, browser type, pages visited (via analytics)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">3. How we use your data</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li>To confirm and conduct your consultation</li>
              <li>To respond to your questions and requests</li>
              <li>To improve the quality of our services</li>
              <li>We do not sell, rent, or share your personal data with third parties</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">4. Legal basis (GDPR)</h2>
            <p>We process your data based on:</p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-gray-400">
              <li><strong className="text-white">Contract</strong> — to provide the service you requested</li>
              <li><strong className="text-white">Legitimate interest</strong> — to improve our service</li>
              <li><strong className="text-white">Consent</strong> — for cookies and analytics (you may withdraw at any time)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">5. Confidentiality</h2>
            <p>All information you share during a legal consultation is treated as strictly confidential in accordance with professional secrecy principles under Swedish and European law. Your situation will never be disclosed to any third party without your explicit consent.</p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">6. Data retention</h2>
            <p>We retain your personal data only as long as necessary to provide the service or as required by law. Consultation records are kept for a maximum of 5 years.</p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">7. Your rights</h2>
            <p>Under GDPR, you have the right to:</p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-gray-400">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data ("right to be forgotten")</li>
              <li>Withdraw consent at any time</li>
              <li>Lodge a complaint with the Swedish Data Protection Authority (IMY)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">8. Contact</h2>
            <p>For any questions regarding your personal data: <a href="mailto:anatolyeriksson@gmail.com" className="text-[#C9A84C]">anatolyeriksson@gmail.com</a></p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex gap-8 text-xs text-gray-600 tracking-widest uppercase">
          <Link href="/terms" className="hover:text-[#C9A84C] transition-colors">Terms of Service</Link>
          <Link href="/cookies" className="hover:text-[#C9A84C] transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </main>
  )
}
