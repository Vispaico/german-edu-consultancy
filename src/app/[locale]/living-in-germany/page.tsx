import { ArticleLayout } from '@/components/shared/ArticleLayout'
import { constructMetadata } from '@/lib/metadata'
import { Button } from '@/components/ui/button'
import { Link } from '@/navigation'
import { Coins, Home, HeartPulse, Beer, Languages, Euro } from 'lucide-react'

import { Metadata } from 'next'

export const metadata: Metadata = constructMetadata({
    title: 'Living in Germany: A Practical Guide for Expats',
    description: 'Your essential guide to life in Germany. Cost of living, finding an apartment, health insurance explained, and understanding German culture.',
    keywords: ['living in germany', 'cost of living germany', 'german health insurance', 'finding apartment germany', 'german culture'],
})

export default function LivingInGermanyPage() {
    const toc = [
        { id: 'cost-of-living', title: 'Cost of Living' },
        { id: 'housing', title: 'Finding an Apartment' },
        { id: 'bureaucracy', title: 'Bureaucracy Survival Guide' },
        { id: 'health-insurance', title: 'Health Insurance System' },
        { id: 'transport', title: 'Public Transport' },
        { id: 'waste', title: 'Waste & Recycling' },
        { id: 'culture', title: 'Culture & Lifestyle' },
        { id: 'language', title: 'The German Language' },
    ]

    const relatedLinks = [
        { href: '/work-in-germany', title: 'Work in Germany', description: 'Find your dream job in the German market.' },
        { href: '/universities', title: 'Study in Germany', description: 'World-class education with low tuition fees.' },
    ]

    return (
        <ArticleLayout
            toc={toc}
            relatedLinks={relatedLinks}
            sidebar={
                <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-100">
                    <h3 className="font-bold text-yellow-900 mb-2">New to Germany?</h3>
                    <p className="text-sm text-yellow-800 mb-4">
                        Settling in can be overwhelming. Check out our relocation services for a smooth start.
                    </p>
                    <Button variant="outline" className="w-full border-yellow-600 text-yellow-700 hover:bg-yellow-100" asChild>
                        <Link href="/services/relocation">View Relocation Services</Link>
                    </Button>
                </div>
            }
        >
            <header className="mb-12">
                <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Expat Guide</span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6">
                    Living in Germany: What to Expect
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                    Germany offers a high quality of life, excellent public infrastructure, and a rich cultural heritage. But navigating the bureaucracy and finding a flat can be a challenge. We&apos;ve compiled everything you need to know to make Germany your new home.
                </p>
            </header>

            <section id="cost-of-living" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Cost of Living</h2>
                <p className="mb-6">
                    Compared to other Western European countries, the cost of living in Germany is quite reasonable. However, it varies significantly between cities (like Munich or Hamburg) and rural areas.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                        <div className="bg-blue-100 p-3 rounded-full">
                            <Euro className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Monthly Expenses (Single)</p>
                            <p className="font-bold text-lg">€900 - €1,400</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                        <div className="bg-green-100 p-3 rounded-full">
                            <Home className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Rent (1-Bedroom City Center)</p>
                            <p className="font-bold text-lg">€700 - €1,200</p>
                        </div>
                    </div>
                </div>

                <p className="text-sm text-gray-500 italic">
                    *Note: Students often pay less due to subsidized housing and student discounts.
                </p>
            </section>

            <section id="housing" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Finding an Apartment</h2>
                <p className="mb-4">
                    The housing market in major cities is tough. Be prepared for competition.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-bold text-lg mb-4">Common Terms You Should Know</h3>
                    <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                        <div>
                            <span className="font-semibold text-blue-700">Kaltmiete (Cold Rent)</span>
                            <p className="text-sm text-gray-600">The base rent without heating, water, or electricity.</p>
                        </div>
                        <div>
                            <span className="font-semibold text-blue-700">Warmmiete (Warm Rent)</span>
                            <p className="text-sm text-gray-600">Rent including heating and water (usually excluding electricity/internet).</p>
                        </div>
                        <div>
                            <span className="font-semibold text-blue-700">Kaution (Deposit)</span>
                            <p className="text-sm text-gray-600">Usually 3 months of cold rent. You get this back when you move out.</p>
                        </div>
                        <div>
                            <span className="font-semibold text-blue-700">WG (Wohngemeinschaft)</span>
                            <p className="text-sm text-gray-600">Shared flat. Very popular among students and young professionals.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="bureaucracy" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Bureaucracy Survival Guide</h2>
                <p className="mb-6 text-gray-700">
                    Germany loves paperwork. Here are the three most important terms you need to know to avoid fines and stress.
                </p>
                <div className="space-y-6">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                        <h3 className="font-bold text-lg text-blue-900 mb-2">1. Anmeldung (City Registration)</h3>
                        <p className="text-gray-600 mb-2">
                            Within 14 days of moving in, you <strong>must</strong> register your address at the local &quot;Bürgeramt&quot;.
                        </p>
                        <ul className="text-sm text-gray-500 list-disc pl-5">
                            <li>Required for: Tax ID, Bank Account, Internet Contract.</li>
                            <li>Bring: Passport, Rental Contract, &quot;Wohnungsgeberbestätigung&quot; (Landlord confirmation).</li>
                        </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                        <h3 className="font-bold text-lg text-blue-900 mb-2">2. Rundfunkbeitrag (TV Tax / GEZ)</h3>
                        <p className="text-gray-600 mb-2">
                            Every household must pay approx. <strong>€18.36 per month</strong> for public broadcasting, even if you don&apos;t own a TV.
                        </p>
                        <ul className="text-sm text-gray-500 list-disc pl-5">
                            <li>You will receive a letter automatically after Anmeldung.</li>
                            <li>Don&apos;t ignore it! Fines can be hefty.</li>
                        </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                        <h3 className="font-bold text-lg text-blue-900 mb-2">3. SCHUFA (Credit Score)</h3>
                        <p className="text-gray-600 mb-2">
                            Your creditworthiness record. Landlords almost always ask for a &quot;SCHUFA-Auskunft&quot; before renting to you.
                        </p>
                        <ul className="text-sm text-gray-500 list-disc pl-5">
                            <li>It tracks your contracts (Phone, Bank) and if you pay bills on time.</li>
                            <li>You can get one free report per year.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="health-insurance" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Health Insurance System</h2>
                <div className="flex items-start gap-4">
                    <HeartPulse className="w-12 h-12 text-red-500 shrink-0" />
                    <div>
                        <p className="mb-4">
                            Health insurance is <strong>mandatory</strong> for everyone living in Germany. You cannot get a residence permit without it.
                        </p>
                        <p className="mb-4">
                            There are two types:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li><strong>Public (Statutory) Health Insurance (GKV):</strong> Most people are here. The cost is a percentage of your income (approx. 14.6%), split between you and your employer.</li>
                            <li><strong>Private Health Insurance (PKV):</strong> For high earners, civil servants, and self-employed. Premiums depend on age and health risk.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="transport" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Public Transport</h2>
                <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                    <h3 className="font-bold text-xl text-green-900 mb-2">The &quot;Deutschlandticket&quot;</h3>
                    <p className="text-green-800 mb-4">
                        For just <strong>€49 per month</strong>, you can use all local and regional public transport (buses, trams, U-Bahn, S-Bahn, regional trains) across the entire country!
                    </p>
                    <p className="text-sm text-green-700 italic">
                        *Does not include high-speed IC/ICE trains.
                    </p>
                </div>
            </section>

            <section id="waste" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Waste & Recycling</h2>
                <p className="mb-6 text-gray-700">
                    Germans take recycling very seriously. Here is how to sort your trash:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg text-center">
                        <span className="block font-bold text-blue-800 mb-1">Blue Bin</span>
                        <span className="text-xs text-blue-600">Paper & Cardboard</span>
                    </div>
                    <div className="p-4 bg-yellow-50 rounded-lg text-center">
                        <span className="block font-bold text-yellow-800 mb-1">Yellow Bin</span>
                        <span className="text-xs text-yellow-600">Plastic & Packaging</span>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg text-center">
                        <span className="block font-bold text-green-800 mb-1">Glass</span>
                        <span className="text-xs text-green-600">Bottles (Sorted by color)</span>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg text-center">
                        <span className="block font-bold text-gray-800 mb-1">Black Bin</span>
                        <span className="text-xs text-gray-600">Residual Waste</span>
                    </div>
                </div>
                <div className="mt-6 bg-white border border-gray-200 p-4 rounded-lg flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full shrink-0">
                        <Coins className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900">Pfand System (Deposit)</h4>
                        <p className="text-sm text-gray-600">
                            Don&apos;t throw away plastic bottles or cans! Most have a €0.25 deposit. Return them to machines in supermarkets to get your money back.
                        </p>
                    </div>
                </div>
            </section>

            <section id="culture" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Culture & Lifestyle</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-bold text-lg flex items-center gap-2 mb-3">
                            <Coins className="w-5 h-5 text-yellow-600" /> Cash is King
                        </h3>
                        <p className="text-gray-600 mb-4">
                            While card payments are increasing, many small bakeries, kiosks, and restaurants still only accept cash (&quot;Nur Bares ist Wahres&quot;). Always carry some Euros!
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg flex items-center gap-2 mb-3">
                            <Beer className="w-5 h-5 text-yellow-600" /> Sundays are Quiet
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Shops (including supermarkets) are closed on Sundays. It&apos;s a day for rest, family, and nature. Plan your grocery shopping accordingly.
                        </p>
                    </div>
                </div>
            </section>

            <section id="language">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The German Language</h2>
                <div className="flex items-start gap-4 bg-blue-50 p-6 rounded-xl">
                    <Languages className="w-10 h-10 text-blue-600 shrink-0" />
                    <div>
                        <h3 className="font-bold text-lg mb-2">Do I need to speak German?</h3>
                        <p className="text-gray-700 mb-4">
                            In big cities like Berlin or Munich, you can survive with English. However, for dealing with bureaucracy (&quot;Ausländerbehörde&quot;), finding a job outside of tech, and making local friends, <strong>German is essential</strong>.
                        </p>
                        <Button variant="secondary" asChild>
                            <Link href="/services/language-courses">Find Language Courses</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </ArticleLayout>
    )
}
