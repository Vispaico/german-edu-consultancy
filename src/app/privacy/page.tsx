import Link from "next/link"

const COMPANY_NAME = "StartinDE"
const WEBSITE_URL = "startin-DE.com"
const CONTACT_EMAIL = "info@startin-DE.com"
const CONTACT_PHONE = "+84 123 456 789"
const ADDRESS = "Haiphong, Vietnam"
const EFFECTIVE_DATE = "8 November 2025"

const PRIVACY_SECTIONS = [
  {
    title: "1. Personal data we collect",
    body: (
      <>
        <p>
          We collect information that you share when you book consultations, request programme advice, or use any services provided by {COMPANY_NAME}. This may include:
        </p>
        <ul>
          <li>Identification and contact details (full name, email, phone number, home address, passport details)</li>
          <li>Academic records (transcripts, English proficiency scores, CV, recommendation letters)</li>
          <li>Financial and visa documentation submitted for university or immigration purposes</li>
          <li>Notes from consultations, email correspondence, and chat history</li>
          <li>Device and usage data (IP address, browser type, pages visited) collected through cookies and analytics tools</li>
        </ul><br/>
      </>
    ),
  },
  {
    title: "2. How we use your information",
    body: (
      <>
        <p>Your personal data enables us to deliver tailored study-abroad support. Specifically, we use it to:</p>
        <ul>
          <li>Provide counselling, shortlist universities, and recommend scholarships</li>
          <li>Prepare and submit university, visa, and accommodation applications on your behalf</li>
          <li>Arrange language training, interview coaching, and pre-departure briefings</li>
          <li>Comply with immigration, tax, and reporting requirements in Vietnam and Germany</li>
          <li>Send service updates, reminders, and important notices relating to your journey</li>
          <li>Improve our services through aggregated analytics and customer feedback</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Legal basis for processing",
    body: (
      <>
        <p>We process your personal data under one or more of the following legal grounds:</p>
        <ul>
          <li>Your consent, when you submit enquiry forms or opt in to newsletters</li>
          <li>Contractual necessity, so we can deliver the services you request</li>
          <li>Compliance with legal obligations, such as immigration regulations</li>
          <li>Legitimate interests, including service optimisation, quality assurance, and fraud prevention</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Sharing your personal data",
    body: (
      <>
        <p>
          {COMPANY_NAME} only shares your data with trusted partners who help us fulfil your requests. These partners include:
        </p>
        <ul>
          <li>German universities, colleges, and language centres processing your applications</li>
          <li>Certified translators, testing centres, and accommodation providers</li>
          <li>Immigration professionals or government departments when legally required</li>
          <li>Technology vendors (such as CRM, cloud hosting, and communication tools) operating under strict confidentiality agreements</li>
        </ul>
        <p>We do not sell your personal data. Cross-border transfers comply with relevant data protection laws.</p>
      </>
    ),
  },
  {
    title: "5. Data retention and security",
    body: (
      <>
        <p>
          We store personal data only for as long as necessary to deliver services, meet legal obligations, or resolve disputes. Security controls include encrypted storage, role-based access, and regular audits.
        </p>
        <p>
          When data is no longer required, we delete or anonymise it. If you request deletion, we act within 30 days unless regulations require longer retention.
        </p>
      </>
    ),
  },
  {
    title: "6. Your privacy rights",
    body: (
      <>
        <p>You are entitled to:</p>
        <ul>
          <li>Request a copy of the personal data we hold about you</li>
          <li>Ask us to correct inaccurate or incomplete information</li>
          <li>Withdraw consent from optional communications at any time</li>
          <li>Request deletion or restriction of your data, subject to legal obligations</li>
          <li>Object to certain processing activities</li>
        </ul>
        <p>
          Submit requests via <Link href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</Link>. We respond to verified requests within 30 days.
        </p>
      </>
    ),
  },
  {
    title: "7. Cookies and analytics",
    body: (
      <>
        <p>
          Our website uses cookies and third-party analytics to understand user behaviour, improve content, and maintain security. You can disable cookies in your browser, although some features may be limited.
        </p>
      </>
    ),
  },
  {
    title: "8. Policy updates",
    body: (
      <>
        <p>
          We may revise this Privacy Policy to reflect regulatory changes or enhancements to our services. Updates will be posted on {WEBSITE_URL} with the revised effective date indicated below.
        </p>
      </>
    ),
  },
  {
    title: "9. Contact information",
    body: (
      <>
        <p>If you have questions or concerns about this policy or your personal data, reach us at:</p>
        <address className="not-italic">
          {COMPANY_NAME}
          <br />
          {ADDRESS}
          <br />
          Phone: {CONTACT_PHONE}
          <br />
          Email: <Link href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</Link>
          <br />
          Website: <Link href={`https://${WEBSITE_URL}`}>{WEBSITE_URL}</Link>
        </address>
      </>
    ),
  },
]

export default function PrivacyPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-gray-200 bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Privacy Policy</p>
          <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">Protecting your personal data with clarity and care</h1>
          <p className="mt-4 max-w-2xl text-base text-gray-600">
            {COMPANY_NAME} is committed to safeguarding the information you share with us while pursuing your German study ambitions. This policy explains the data we collect, how it is used, and the rights you have to control it.
          </p>
          <p className="mt-6 text-sm text-gray-500">Effective date: {EFFECTIVE_DATE}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {PRIVACY_SECTIONS.map((section) => (
              <article key={section.title} className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">{section.title}</h2>
                <div className="space-y-3 text-base text-gray-600 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2">{section.body}</div>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-blue-100 bg-blue-50/60 px-6 py-8">
            <h3 className="text-xl font-semibold text-blue-900">Need clarification?</h3>
            <p className="mt-2 text-blue-800">
              Our data protection team is available Monday to Friday, 09:00–18:00 (ICT). Email us at
              {" "}
              <Link href={`mailto:${CONTACT_EMAIL}`} className="underline">
                {CONTACT_EMAIL}
              </Link>
              {" "}
              for personalised assistance.
            </p>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
              >
                Book a privacy consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
