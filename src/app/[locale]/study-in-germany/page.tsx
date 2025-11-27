import { ArticleLayout } from '@/components/shared/ArticleLayout'
import { constructMetadata } from '@/lib/metadata'
import { Button } from '@/components/ui/button'
import { Link } from '@/navigation'
import { GraduationCap, BookOpen, School, Award, Languages, Euro, Globe2, Compass, Map as MapIcon } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = constructMetadata({
    title: 'Study in Germany: The Complete Guide for International Students',
    description: 'Your roadmap to studying in Germany. Explore universities, tuition-free education, admission requirements, and student visa procedures.',
    keywords: ['study in germany', 'universities in germany', 'tuition free universities germany', 'student visa germany', 'masters in germany'],
})

export default function StudyInGermanyPage() {
    const toc = [
        { id: 'why-study', title: 'Why Study in Germany?' },
        { id: 'university-types', title: 'Types of Universities' },
        { id: 'requirements', title: 'Admission Requirements' },
        { id: 'costs', title: 'Costs & Funding' },
        { id: 'health-insurance', title: 'Health Insurance' },
        { id: 'find-program', title: 'Find Your Program' },
        { id: 'application', title: 'How to Apply' },
    ]

    const relatedLinks = [
        { href: '/universities', title: 'Browse Universities', description: 'Explore top-ranked German universities.' },
        { href: '/vocational-training', title: 'Vocational Training', description: 'Dual education system (Ausbildung).' },
        { href: '/living-in-germany', title: 'Living in Germany', description: 'Accommodation and student life.' },
    ]

    return (
        <ArticleLayout
            toc={toc}
            relatedLinks={relatedLinks}
            sidebar={
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                    <h3 className="font-bold text-blue-900 mb-2">Free Consultation</h3>
                    <p className="text-sm text-blue-800 mb-4">
                        Not sure which university is right for you? Our experts can help you build a personalized study plan.
                    </p>
                    <Button className="w-full" asChild>
                        <Link href="/contact">Talk to an Advisor</Link>
                    </Button>
                </div>
            }
        >
            <header className="mb-12">
                <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Education Guide</span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6">
                    Study in Germany: World-Class Education, Zero Tuition
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                    Germany is one of the most popular study destinations in the world. With its top-ranked universities, tuition-free education at public institutions, and vibrant student life, it's the perfect place to launch your academic and professional career.
                </p>
            </header>

            <section id="why-study" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Study in Germany?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <Euro className="w-8 h-8 text-blue-600 mb-4" />
                        <h3 className="font-bold text-lg mb-2">No Tuition Fees</h3>
                        <p className="text-gray-600">Most public universities in Germany charge no tuition fees for international students, only a small semester contribution.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <Award className="w-8 h-8 text-blue-600 mb-4" />
                        <h3 className="font-bold text-lg mb-2">World-Class Education</h3>
                        <p className="text-gray-600">German degrees are recognized globally and respected by employers worldwide.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <Languages className="w-8 h-8 text-blue-600 mb-4" />
                        <h3 className="font-bold text-lg mb-2">English-Taught Programs</h3>
                        <p className="text-gray-600">Thousands of Master's and an increasing number of Bachelor's programs are taught entirely in English.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <Briefcase className="w-8 h-8 text-blue-600 mb-4" />
                        <h3 className="font-bold text-lg mb-2">Career Opportunities</h3>
                        <p className="text-gray-600">Graduates can stay for up to 18 months to find a job, with excellent prospects in engineering, IT, and business.</p>
                    </div>
                </div>
            </section>

            <section id="university-types" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Universities</h2>
                <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-600">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                            <School className="w-5 h-5" /> Universities (Universitäten)
                        </h3>
                        <p className="text-gray-700">
                            Focus on theoretical knowledge and research. Ideal if you want to pursue a PhD or a career in academia/research.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-green-600">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                            <BookOpen className="w-5 h-5" /> Universities of Applied Sciences (Fachhochschulen)
                        </h3>
                        <p className="text-gray-700">
                            Focus on practical application and industry connection. Programs often include mandatory internships and practical projects.
                        </p>
                    </div>
                </div>
            </section>

            <section id="requirements" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Admission Requirements</h2>
                <p className="mb-6">
                    Requirements vary by university and program, but generally include:
                </p>
                <ul className="list-disc pl-5 space-y-3 text-gray-700 mb-8">
                    <li><strong>University Entrance Qualification (HZB):</strong> Your school leaving certificate must be equivalent to the German Abitur. If not, you may need to attend a Studienkolleg (preparatory course).</li>
                    <li><strong>Language Proficiency:</strong> Proof of German (TestDaF, DSH) or English (IELTS, TOEFL) proficiency, depending on the program language.</li>
                    <li><strong>Aptitude Tests:</strong> Some programs require TestAS or GMAT/GRE.</li>
                </ul>

                <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                    <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5" /> Pro Tip: The Studienkolleg
                    </h3>
                    <p className="text-blue-800 text-sm mb-4">
                        If your high school diploma isn't recognized, a <strong>Studienkolleg</strong> is your bridge to German university. It's a one-year preparatory course ending with the <em>Feststellungsprüfung</em> (assessment test).
                    </p>
                </div>
            </section>

            <section id="costs" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Costs & Funding</h2>
                <p className="mb-6 text-gray-700">
                    While tuition is mostly free, you need to budget for living expenses. The German government requires proof of financial resources for your visa.
                </p>

                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-8">
                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                        <h3 className="font-bold text-gray-900">The Blocked Account (Sperrkonto)</h3>
                    </div>
                    <div className="p-6">
                        <p className="mb-4 text-gray-700">
                            International students must deposit a specific amount into a "Blocked Account" to prove they can support themselves. This money is released to you monthly once you arrive.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <span className="block text-sm text-gray-500 mb-1">Required Amount (2025)</span>
                                <span className="text-2xl font-bold text-blue-600">€11,904 / year</span>
                                <span className="text-sm text-gray-400 ml-2">(€992 / month)</span>
                            </div>
                            <div>
                                <span className="block text-sm text-gray-500 mb-1">Popular Providers</span>
                                <div className="flex gap-2">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Expatrio</span>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Fintiba</span>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">Coracle</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 text-sm text-yellow-800">
                            <strong>Note:</strong> You cannot withdraw the full amount at once. It's a monthly allowance to ensure your financial stability.
                        </div>
                    </div>
                </div>
            </section>

            <section id="health-insurance" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Health Insurance</h2>
                <p className="mb-6 text-gray-700">
                    Health insurance is mandatory in Germany. You cannot enroll in university without it.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-200">
                        <h3 className="font-bold text-lg text-gray-900 mb-3">Public Insurance (GKV)</h3>
                        <ul className="space-y-2 text-sm text-gray-600 mb-4">
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 font-bold">✓</span> Best for students under 30
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 font-bold">✓</span> Approx. €130/month
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 font-bold">✓</span> Covers pre-existing conditions
                            </li>
                        </ul>
                        <p className="text-xs text-gray-500">Providers: TK, AOK, Barmer</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200">
                        <h3 className="font-bold text-lg text-gray-900 mb-3">Private Insurance (PKV)</h3>
                        <ul className="space-y-2 text-sm text-gray-600 mb-4">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 font-bold">ℹ</span> For students over 30 or prep courses
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 font-bold">ℹ</span> Often cheaper for young students
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 font-bold">ℹ</span> Pay upfront, get reimbursed
                            </li>
                        </ul>
                        <p className="text-xs text-gray-500">Providers: Mawista, Feather, Dr. Walter</p>
                    </div>
                </div>
            </section>

            <section id="find-program" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Your Program</h2>
                <p className="mb-6">
                    Ready to start your search? Use these official databases to find the perfect course for you.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                    <a
                        href="https://www2.daad.de/deutschland/studienangebote/international-programmes/en/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all"
                    >
                        <h3 className="font-bold text-lg text-blue-700 mb-2 flex items-center gap-2">
                            DAAD International Programmes <Globe2 className="w-4 h-4" />
                        </h3>
                        <p className="text-gray-600 text-sm">
                            The official database for English-taught programs. Filter by subject, degree, and city.
                        </p>
                    </a>

                    <a
                        href="https://www.hochschulkompass.de/en/study-in-germany.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all"
                    >
                        <h3 className="font-bold text-lg text-blue-700 mb-2 flex items-center gap-2">
                            Higher Education Compass <Compass className="w-4 h-4" />
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Comprehensive database of all study programs in Germany (German & English).
                        </p>
                    </a>

                    <a
                        href="https://www.myguide.de/en/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all"
                    >
                        <h3 className="font-bold text-lg text-blue-700 mb-2 flex items-center gap-2">
                            My GUIDE <MapIcon className="w-4 h-4" />
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Find suitable degree programs based on your interests and qualifications.
                        </p>
                    </a>

                    <a
                        href="https://www.study-in-germany.de/en/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all"
                    >
                        <h3 className="font-bold text-lg text-blue-700 mb-2 flex items-center gap-2">
                            Study in Germany <BookOpen className="w-4 h-4" />
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Official information portal with tips on life, admission, and more.
                        </p>
                    </a>
                </div>
            </section>

            <section id="application">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Apply via Uni-Assist</h2>
                <p className="mb-6 text-gray-700">
                    Most international applications go through <strong>Uni-Assist</strong>, a centralized service that evaluates your certificates.
                </p>

                <div className="relative border-l-2 border-blue-200 ml-3 space-y-8 pb-8">
                    <div className="relative pl-8">
                        <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></span>
                        <h3 className="font-bold text-lg text-gray-900 mb-1">1. Register & Search</h3>
                        <p className="text-gray-600 text-sm">Create an account on My Assist and find your desired programs.</p>
                    </div>
                    <div className="relative pl-8">
                        <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></span>
                        <h3 className="font-bold text-lg text-gray-900 mb-1">2. Upload Documents</h3>
                        <p className="text-gray-600 text-sm">Upload certified copies of your school certificates, language proofs, and passport.</p>
                    </div>
                    <div className="relative pl-8">
                        <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></span>
                        <h3 className="font-bold text-lg text-gray-900 mb-1">3. Pay Fees</h3>
                        <p className="text-gray-600 text-sm">
                            First application: <span className="font-bold text-blue-600">€75</span>.
                            Each additional: <span className="font-bold text-blue-600">€30</span>.
                        </p>
                    </div>
                    <div className="relative pl-8">
                        <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></span>
                        <h3 className="font-bold text-lg text-gray-900 mb-1">4. Submit & Wait</h3>
                        <p className="text-gray-600 text-sm">Processing takes 4-6 weeks. If successful, they forward it to the university.</p>
                    </div>
                </div>

                <div className="mt-8 bg-gray-50 rounded-xl p-6">
                    <h3 className="font-bold text-gray-900 mb-4">Application Deadlines</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                            <span className="block text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">Winter Semester</span>
                            <span className="text-xl font-bold text-gray-900">July 15th</span>
                            <span className="block text-xs text-gray-500 mt-1">Starts in Oct</span>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                            <span className="block text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">Summer Semester</span>
                            <span className="text-xl font-bold text-gray-900">January 15th</span>
                            <span className="block text-xs text-gray-500 mt-1">Starts in Apr</span>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-gray-600 mb-4">Overwhelmed by paperwork? We handle the entire Uni-Assist process for you.</p>
                    <Button size="lg" className="w-full sm:w-auto" asChild>
                        <Link href="/services/application-support">Get Application Support</Link>
                    </Button>
                </div>
            </section>
        </ArticleLayout>
    )
}

function Briefcase(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
    )
}
