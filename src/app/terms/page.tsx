import Link from "next/link"

const COMPANY_NAME = "StartinDE"
const WEBSITE_URL = "startin-DE.com"
const CONTACT_EMAIL = "info@startin-DE.com"
const ADDRESS = "Haiphong, Vietnam"
const EFFECTIVE_DATE = "8 November 2025"

const TERMS_SECTIONS = [
  {
    title: "1. Agreement to terms",
    body: (
      <>
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of the services, content, and website provided by {COMPANY_NAME} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By visiting {WEBSITE_URL}, booking a consultation, or engaging our advisors, you agree to comply with these Terms. If you do not agree, please refrain from using our services.
        </p>
      </>
    ),
  },
  {
    title: "2. Services we provide",
    body: (
      <>
        <p>We offer education consultancy and related support for studying in Germany, including:</p>
        <ul>
          <li>Consultations, course advice, and university shortlisting tailored to your goals</li>
          <li>Application preparation, submission, and liaising with educational partners</li>
          <li>Visa guidance, document translation, and pre-departure assistance</li>
          <li>Referral to third-party providers such as language centres or accommodation partners</li>
        </ul>
        <p>
          Services are delivered in accordance with German education policies, Vietnamese regulations, and partner institution requirements.
        </p>
      </>
    ),
  },
  {
    title: "3. Eligibility",
    body: (
      <>
        <p>
          You must be at least 16 years old or have parental/guardian consent to use our services. When acting on behalf of another person, you confirm that you are authorised to share their information and make decisions relating to their application.
        </p>
      </>
    ),
  },
  {
    title: "4. User responsibilities",
    body: (
      <>
        <p>To ensure accurate guidance, you agree to:</p>
        <ul>
          <li>Provide truthful and complete information about your academic history, finances, and visa background</li>
          <li>Submit documents within agreed timelines to avoid delays with universities or authorities</li>
          <li>Comply with the policies of partner institutions and government agencies</li>
          <li>Maintain the confidentiality of login details for any portals we set up on your behalf</li>
        </ul>
        <p>
          We reserve the right to suspend services if false or misleading information is provided.
        </p>
      </>
    ),
  },
  {
    title: "5. Consultancy fees and payments",
    body: (
      <>
        <p>
          We offer both free and paid services. Fees, when applicable, will be confirmed in writing before work begins. Payments are due according to the schedule stated on invoices. Late payments may delay applications or incur additional charges.
        </p>
        <p>
          Universities may charge separate application fees, tuition deposits, or ancillary costs. These are payable directly to the institution unless otherwise arranged.
        </p>
      </>
    ),
  },
  {
    title: "6. Third-party services",
    body: (
      <>
        <p>
          We may introduce you to third-party providers (e.g., accommodation, banking, insurance). These services operate under their own terms and privacy policies. {COMPANY_NAME} is not responsible for losses arising from third-party agreements, though we welcome feedback to maintain quality partnerships.
        </p>
      </>
    ),
  },
  {
    title: "7. Intellectual property",
    body: (
      <>
        <p>
          All content on {WEBSITE_URL}, including branding, text, graphics, and media, is owned or licensed by {COMPANY_NAME}. You may view or download materials for personal reference only. Republishing or commercial use without written consent is prohibited.
        </p>
      </>
    ),
  },
  {
    title: "8. Limitation of liability",
    body: (
      <>
        <p>
          We provide professional guidance but cannot guarantee admission, scholarships, or visa approval, which are determined by third-party institutions and government agencies. To the fullest extent permitted by law, {COMPANY_NAME} is not liable for indirect or consequential losses arising from the use of our services.
        </p>
      </>
    ),
  },
  {
    title: "9. Indemnification",
    body: (
      <>
        <p>
          You agree to indemnify and hold {COMPANY_NAME}, its directors, and employees harmless from any claims or damages resulting from your breach of these Terms or misuse of our services.
        </p>
      </>
    ),
  },
  {
    title: "10. Termination",
    body: (
      <>
        <p>
          Either party may end the service relationship with reasonable written notice. We may terminate immediately if you provide fraudulent information, fail to meet payment obligations, or violate applicable laws. Upon termination, outstanding fees remain payable.
        </p>
      </>
    ),
  },
  {
    title: "11. Changes to these Terms",
    body: (
      <>
        <p>
          We may update these Terms to reflect changes in services or regulations. Revised Terms will be posted on {WEBSITE_URL} with the effective date indicated. Continued use of our services after changes take effect constitutes acceptance of the updated Terms.
        </p>
      </>
    ),
  },
  {
    title: "12. Governing law",
    body: (
      <>
        <p>
          These Terms are governed by the laws of Germany. Any disputes will be handled through good-faith negotiation, followed by the competent courts in Germany if necessary.
        </p>
      </>
    ),
  },
  {
    title: "13. Contact information",
    body: (
      <>
        <p>Questions regarding these Terms can be directed to:</p>
        <address className="not-italic">
          {COMPANY_NAME}
          <br />
          {ADDRESS}
          <br />
          Email: <Link href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</Link>
          <br />
          Website: <Link href={`https://${WEBSITE_URL}`}>{WEBSITE_URL}</Link>
        </address>
      </>
    ),
  },
]

export default function TermsPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-gray-200 bg-slate-100 py-16">
        <div className="container mx-auto px-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">Terms of Service</p>
          <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">Service terms for {COMPANY_NAME} study abroad support</h1>
          <p className="mt-4 max-w-2xl text-base text-gray-600">
            These Terms outline the responsibilities of both {COMPANY_NAME} and our clients when using education consultancy services for German study pathways.
          </p>
          <p className="mt-6 text-sm text-gray-500">Effective date: {EFFECTIVE_DATE}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {TERMS_SECTIONS.map((section) => (
              <article key={section.title} className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">{section.title}</h2>
                <div className="space-y-3 text-base text-gray-600 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2">{section.body}</div>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-slate-200 bg-slate-100 px-6 py-8">
            <h3 className="text-xl font-semibold text-slate-900">Questions about these Terms?</h3>
            <p className="mt-2 text-slate-700">
              Our advisory team can clarify any clause before you proceed. Email us at
              {" "}
              <Link href={`mailto:${CONTACT_EMAIL}`} className="underline">
                {CONTACT_EMAIL}
              </Link>
              {" "}
              and we will respond within two business days.
            </p>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
              >
                Connect with an advisor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
