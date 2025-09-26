// app/components/Footer.tsx
import Link from "next/link";
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-2 rounded-xl shadow-md">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900 dark:text-gray-100">
                AfroLearn
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Empowering African minds through accessible, high-quality education. 
              Learn from local experts and global professionals.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <button
                  key={i}
                  className="h-9 w-9 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 hover:text-white hover:bg-gradient-to-r from-orange-500 to-pink-500 transition-all shadow-sm"
                >
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/courses", label: "Browse Courses" },
                { href: "/programs", label: "Intensive Programs" },
                { href: "/become-instructor", label: "Become an Instructor" },
                { href: "/certificates", label: "Certificates" },
                { href: "/scholarships", label: "Scholarships" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Popular Categories</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/courses?category=technology", label: "Technology & Programming" },
                { href: "/courses?category=business", label: "Business & Entrepreneurship" },
                { href: "/courses?category=agriculture", label: "Agriculture & Farming" },
                { href: "/courses?category=health", label: "Health & Medicine" },
                { href: "/courses?category=arts", label: "Arts & Culture" },
              ].map((cat) => (
                <li key={cat.href}>
                  <Link
                    href={cat.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Stay Connected</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Get the latest updates on courses and programs.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm font-medium shadow-md hover:opacity-90 transition-all w-full sm:w-auto">
                Subscribe
              </button>
            </div>

            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mt-5">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Accra, Lagos, Nairobi</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+234 800 AFRO LEARN</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@afrolearn.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400 space-y-4 md:space-y-0">
          <p>© 2024 AfroLearn. All rights reserved. Made with ❤️ for Africa.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-orange-500 transition-colors">Terms of Service</Link>
            <Link href="/support" className="hover:text-orange-500 transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
