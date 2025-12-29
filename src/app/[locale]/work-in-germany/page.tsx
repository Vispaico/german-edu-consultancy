import { ArticleLayout } from '@/components/shared/ArticleLayout'
import { constructMetadata } from '@/lib/metadata'
import { Button } from '@/components/ui/button'
import { Link } from '@/navigation'
import { Briefcase, CheckCircle2, FileSearch, Globe2, GraduationCap, Building2 } from 'lucide-react'

import { Metadata } from 'next'

export const metadata: Metadata = constructMetadata({
    title: 'Work in Germany: The Ultimate Guide for 2025',
    description: 'Everything you need to know about working in Germany as a foreigner. Visa types, Blue Card, job search tips, and recognition of qualifications.',
    keywords: ['work in germany', 'german blue card', 'job seeker visa', 'working in germany for foreigners', 'german work permit requirements'],
})

export default function WorkInGermanyPage() {
    const toc = [
        { id: 'why-germany', title: 'Why Work in Germany?' },
        { id: 'shortage', title: 'Shortage Occupations' },
        { id: 'visa-types', title: 'Visa Types & Requirements' },
        { id: 'opportunity-card', title: 'The Opportunity Card' },
        { id: 'blue-card', title: 'The EU Blue Card' },
        { id: 'job-search', title: 'How to Find a Job' },
        { id: 'salary', title: 'Salary & Taxes' },
        { id: 'recognition', title: 'Recognition of Qualifications' },
    ]

    const relatedLinks = [
        { href: '/living-in-germany', title: 'Living in Germany', description: 'Cost of living, housing, and culture.' },
        { href: '/vocational-training', title: 'Vocational Training (Ausbildung)', description: 'Learn and earn with dual vocational training.' },
        { href: '/diploma-conversion', title: 'Diploma Recognition', description: 'Get your foreign degree recognized in Germany.' },
    ]

    return (
        <ArticleLayout
            toc={toc}
            relatedLinks={relatedLinks}
            sidebar={
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                    <h3 className="font-bold text-blue-900 mb-2">Need Personal Advice?</h3>
                    <p className="text-sm text-blue-800 mb-4">
                        Navigating the German labor market can be tricky. Our experts are here to help you every step of the way.
                    </p>
                    <Button className="w-full" asChild>
                        <Link href="/contact">Book a Consultation</Link>
                    </Button>
                </div>
            }
        >
            <header className="mb-12">
                <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Career Guide</span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6">
                    Work in Germany: Your Gateway to a Global Career
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                    Germany is not just the economic powerhouse of Europe; it&apos;s a land of opportunity for skilled professionals from around the world. With a shortage of skilled workers in many sectors, the doors are wider open than ever before. Here&apos;s how you can walk through them.
                </p>
            </header>

            <section id="why-germany" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Work in Germany?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <Briefcase className="w-8 h-8 text-blue-600 mb-4" />
                        <h3 className="font-bold text-lg mb-2">Strong Economy</h3>
                        <p className="text-gray-600">Home to world-renowned companies like BMW, Siemens, and SAP, offering stable and well-paid jobs.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <Globe2 className="w-8 h-8 text-blue-600 mb-4" />
                        <h3 className="font-bold text-lg mb-2">Work-Life Balance</h3>
                        <p className="text-gray-600">Enjoy 30 days of vacation on average, strict working hour laws, and a culture that respects your personal time.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <Building2 className="w-8 h-8 text-blue-600 mb-4" />
                        <h3 className="font-bold text-lg mb-2">Social Security</h3>
                        <p className="text-gray-600">Comprehensive health insurance, unemployment benefits, and a secure pension system protect you.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <GraduationCap className="w-8 h-8 text-blue-600 mb-4" />
                        <h3 className="font-bold text-lg mb-2">Career Growth</h3>
                        <p className="text-gray-600">Flat hierarchies in modern startups or structured paths in corporates – the choice is yours.</p>
                    </div>
                </div>
            </section>

            <section id="shortage" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">In-Demand Professions</h2>
                <p className="mb-6 text-gray-700">
                    Germany is actively looking for skilled workers in these &quot;Mangelberufe&quot; (shortage occupations). If you have skills in these areas, your chances of getting a visa are much higher.
                </p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                        'Software Developers', 'IT Consultants', 'Data Scientists',
                        'Nurses & Caregivers', 'Doctors', 'Engineers (Civil, Mech, Elec)',
                        'Scientists', 'Craftspeople', 'Green Tech Experts'
                    ].map((job) => (
                        <div key={job} className="bg-green-50 border border-green-100 p-3 rounded-lg flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                            <span className="font-medium text-green-900">{job}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section id="visa-types" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Visa Types & Requirements</h2>
                <p className="mb-6">
                    Depending on your qualifications and whether you already have a job offer, there are different ways to enter the German labor market.
                </p>

                <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-600">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">1. The Skilled Worker Visa</h3>
                        <p className="text-gray-700 mb-4">
                            For professionals with a recognized vocational training or university degree. You must have a concrete job offer in Germany.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-sm text-gray-600">
                                <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                                <span>Recognized qualification</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-gray-600">
                                <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                                <span>Job offer matching your qualification</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-600">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">2. The Job Seeker Visa</h3>
                        <p className="text-gray-700 mb-4">
                            Allows you to come to Germany for up to 6 months to look for a job. You cannot work during this time, but you can attend interviews.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-sm text-gray-600">
                                <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                                <span>Proof of academic or vocational qualification</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-gray-600">
                                <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                                <span>Secure livelihood (blocked account) for the duration of stay</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="opportunity-card" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Opportunity Card (Chancenkarte)</h2>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <p className="mb-4 text-gray-700">
                        New in 2024/2025: The <strong>Chancenkarte</strong> allows you to come to Germany for up to one year to look for work, even without a job offer.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mt-6">
                        <div>
                            <h3 className="font-bold text-lg text-gray-900 mb-3">Basic Requirements</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 font-bold">•</span> Vocational training (2+ years) or degree
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 font-bold">•</span> German A1 OR English B2
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 font-bold">•</span> Financial proof (~€1,091/month)
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg text-gray-900 mb-3">Points System (Need 6 Points)</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex justify-between border-b border-gray-100 pb-1">
                                    <span>Partial Recognition</span> <span className="font-bold text-green-600">4 pts</span>
                                </li>
                                <li className="flex justify-between border-b border-gray-100 pb-1">
                                    <span>Shortage Occupation</span> <span className="font-bold text-green-600">1 pt</span>
                                </li>
                                <li className="flex justify-between border-b border-gray-100 pb-1">
                                    <span>Professional Experience</span> <span className="font-bold text-green-600">2-3 pts</span>
                                </li>
                                <li className="flex justify-between border-b border-gray-100 pb-1">
                                    <span>Language Skills</span> <span className="font-bold text-green-600">1-3 pts</span>
                                </li>
                                <li className="flex justify-between border-b border-gray-100 pb-1">
                                    <span>Age (&lt;35 / 35-40)</span> <span className="font-bold text-green-600">2 / 1 pts</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="blue-card" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The EU Blue Card</h2>
                <div className="bg-blue-900 text-white p-8 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>

                    <h3 className="text-2xl font-bold mb-4 relative z-10">The Gold Standard for Expats</h3>
                    <p className="text-blue-100 mb-6 relative z-10">
                        The EU Blue Card is a residence title for academics from non-EU countries. It offers a faster track to permanent residency and easier family reunification.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6 relative z-10">
                        <div>
                            <h4 className="font-semibold text-white mb-2">Requirements</h4>
                            <ul className="space-y-2 text-sm text-blue-200">
                                <li>• German or recognized university degree</li>
                                <li>• Job offer with a minimum gross salary (approx. €45,300 in 2024, lower for shortage occupations)</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-2">Benefits</h4>
                            <ul className="space-y-2 text-sm text-blue-200">
                                <li>• Permanent residency after 21-33 months</li>
                                <li>• Spouses can work immediately without German skills</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="job-search" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Find a Job</h2>
                <p className="mb-6">
                    The German job market is competitive but accessible. Here are the top platforms to start your search:
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                    {[
                        { name: 'LinkedIn', desc: 'Essential for networking and corporate jobs.' },
                        { name: 'XING', desc: 'The German equivalent of LinkedIn. Highly recommended.' },
                        { name: 'StepStone', desc: 'One of the largest job boards in Germany.' },
                        { name: 'Indeed', desc: 'Great for a wide variety of job listings.' },
                        { name: 'Federal Employment Agency', desc: 'Official government job portal.' },
                    ].map((site) => (
                        <div key={site.name} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                            <h4 className="font-bold text-gray-900">{site.name}</h4>
                            <p className="text-sm text-gray-600">{site.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <p className="text-sm text-yellow-800">
                        <strong>Pro Tip:</strong> German CVs (Lebenslauf) are different. They should be tabular, include a photo, and be precise about dates and tasks. Avoid fluff!
                    </p>
                </div>
            </section>

            <section id="salary" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Salary & Taxes</h2>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="font-bold text-lg text-gray-900 mb-4">Gross vs. Net Salary</h3>
                    <p className="text-gray-700 mb-4">
                        In Germany, we talk about &quot;Brutto&quot; (Gross) and &quot;Netto&quot; (Net). Your take-home pay will be lower due to social security contributions.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <span className="block text-sm text-gray-500 uppercase tracking-wide font-semibold">Deductions (~35-40%)</span>
                            <ul className="mt-2 space-y-1 text-sm text-gray-600">
                                <li>• Income Tax (Progressive)</li>
                                <li>• Health Insurance (~7.3%)</li>
                                <li>• Pension Insurance (9.3%)</li>
                                <li>• Unemployment Ins. (1.3%)</li>
                                <li>• Care Insurance (~1.7%)</li>
                            </ul>
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-sm text-gray-600 italic">
                                &ldquo;Don&apos;t be shocked by the deductions! They pay for your free healthcare, pension, and safety net.&rdquo;
                            </p>
                            <Button variant="link" className="mt-2 h-auto p-0 text-blue-600" asChild>
                                <a href="https://www.brutto-netto-rechner.info/" target="_blank" rel="noopener noreferrer">Try a Gross-Net Calculator &rarr;</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="recognition">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Recognition of Qualifications</h2>
                <p className="mb-4">
                    &quot;Anerkennung&quot; (Recognition) is a formal procedure to check if your foreign professional qualification is equivalent to a German one. For many regulated professions (like doctors, nurses, teachers), this is mandatory.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <Button variant="outline" className="flex-1" asChild>
                        <a href="https://www.anerkennung-in-deutschland.de/html/en/index.php" target="_blank" rel="noopener noreferrer">
                            <FileSearch className="mr-2 w-4 h-4" />
                            Check Recognition Finder
                        </a>
                    </Button>
                    <Button className="flex-1" asChild>
                        <Link href="/diploma-conversion">
                            <CheckCircle2 className="mr-2 w-4 h-4" />
                            Our Recognition Service
                        </Link>
                    </Button>
                </div>
            </section>
        </ArticleLayout >
    )
}
