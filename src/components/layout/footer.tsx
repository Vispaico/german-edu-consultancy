import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="text-center md:text-left">
            <Image
              alt="Bizz Education Vietnam"
              src="/images/Logo-Bizz-Education-Vietnam-footer.png"
              width={262}
              height={94}
              className="mb-4 h-18 w-auto mx-auto md:mx-0"
              priority
            />
            <p className="text-sm text-center md:text-left">
              Your trusted partner for studying in Australia.
              Professional guidance since 2014.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="mb-4 font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-sm text-center md:text-left">
              <li><Link href="/services/university-selection">University Selection</Link></li>
              <li><Link href="/services/application-support">Application Support</Link></li>
              <li><Link href="/services/visa-processing">Visa Processing</Link></li>
              <li><Link href="/services/test-preparation">Test Preparation</Link></li>
              <li><Link href="/services/career-counseling">Career Counseling</Link></li>
              <li><Link href="/services/pre-departure-support">Pre-Departure Support</Link></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="mb-4 font-semibold text-white">Resources</h4>
            <ul className="space-y-2 text-sm text-center md:text-left">
              <li><Link href="/universities">Universities</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="mb-4 font-semibold text-white">Contact</h4>
            <ul className="space-y-2 text-sm text-center md:text-left">
              <li>📍 Hanoi, Vietnam</li>
              <li>📞 +84 123 456 789</li>
              <li>✉️ info@bizzedu.vn</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2025 BIZZ EDUCATION VIETNAM. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
