import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const faqs = [
  {
    question: 'How long does the application process take?',
    answer: 'The entire process from application to visa approval typically takes 3-6 months, depending on the university and visa processing times.'
  },
  {
    question: 'What are the English language requirements?',
    answer: 'Most universities require IELTS 6.5-7.0 (or equivalent TOEFL/PTE scores). Requirements vary by program and institution.'
  },
  {
    question: 'How much does it cost to study in Australia?',
    answer: 'Tuition fees range from AUD $20,000 to $50,000 per year. Living expenses are approximately AUD $21,000 per year.'
  },
  {
    question: 'Can I work while studying?',
    answer: 'Yes, international students can work up to 48 hours per fortnight during semester and unlimited hours during breaks.'
  },
  {
    question: 'Do you help with accommodation?',
    answer: 'Yes, we provide assistance with finding suitable accommodation including on-campus housing, homestays, and shared apartments.'
  },
  {
    question: 'What is your success rate for visa applications?',
    answer: 'We maintain a 95% visa success rate through careful preparation and guidance throughout the application process.'
  }
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about studying in Australia
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
