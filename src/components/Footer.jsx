import { Link } from 'react-router-dom'
import { school } from '../data/siteContent'
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight 
} from 'lucide-react'
// Fixed: Using react-icons for brand logos to prevent the SyntaxError
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  const footerLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Academics', href: '/academics' },
    { label: 'Admissions', href: '/admissions' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ]

  const socialLinks = [
    { icon: <FaFacebookF size={16} />, href: '#', label: 'Facebook' },
    { icon: <FaInstagram size={18} />, href: '#', label: 'Instagram' },
    { icon: <FaYoutube size={18} />, href: '#', label: 'Youtube' },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white pt-20 pb-10">
      {/* Decorative Wave Divider */}
      <div className="pointer-events-none absolute inset-x-0 -top-1 h-16">
        <svg className="h-full w-full" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path
            d="M0,64 C360,16 720,96 1080,48 C1260,24 1440,72 1440,72 L1440,0 L0,0 Z"
            fill="#f8fafc" // Matches slate-50 to blend with section above
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          
          {/* Brand & Contact Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-blue-100 bg-blue-50/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-700 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                {school.name}
              </div>
              <p className="max-w-md text-base leading-relaxed text-slate-600 font-medium">
                A premier educational institution in Madanapalle committed to excellence. 
                Nurturing young minds from LKG to Class 10 with a focus on holistic growth.
              </p>
              
              {/* Social Icons */}
              <div className="flex gap-3">
                {socialLinks.map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:-translate-y-1 hover:bg-blue-600 hover:text-white hover:shadow-blue-200 hover:shadow-lg"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="group rounded-2xl border border-slate-100 bg-slate-50/50 p-5 transition-all hover:bg-white hover:shadow-md">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-blue-100 shadow-lg group-hover:scale-110 transition-transform">
                  <MapPin size={18} />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">Visit Us</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600 font-medium">{school.contact.address}</p>
              </div>

              <div className="group rounded-2xl border border-slate-100 bg-slate-50/50 p-5 transition-all hover:bg-white hover:shadow-md">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-emerald-100 shadow-lg group-hover:scale-110 transition-transform">
                  <Phone size={18} />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">Contact</h4>
                <div className="mt-2 space-y-1 text-sm text-slate-600 font-medium">
                  <p>{school.contact.phone}</p>
                  <p>{school.contact.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Links & Affiliation Section */}
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-slate-900 pb-2 border-b-2 border-yellow-400 inline-block">Navigation</h4>
              <ul className="mt-8 space-y-4">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      className="group flex items-center text-sm font-semibold text-slate-500 transition hover:text-blue-600" 
                      to={link.href}
                    >
                      <ArrowRight size={14} className="mr-2 transition-transform group-hover:translate-x-1" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-slate-900 pb-2 border-b-2 border-yellow-400 inline-block">Affiliation</h4>
                <p className="mt-8 text-sm font-medium leading-7 text-slate-500">
                  Recognized by the <span className="text-slate-900 font-bold">Andhra Pradesh State Board</span>. 
                  Delivering high standards of education and discipline.
                </p>
              </div>
              
              <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-6 text-white shadow-xl shadow-blue-100">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-200">Admissions 2026-27</p>
                <p className="mt-2 text-sm font-bold leading-snug">Enroll your child in Madanapalle's finest school.</p>
                <Link to="/admissions" className="mt-4 flex items-center text-xs font-bold uppercase tracking-widest text-yellow-400 hover:text-white transition-colors">
                  Apply Now <ArrowRight size={14} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-slate-100 pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
              © {new Date().getFullYear()} {school.name} · Madanapalle
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-tighter">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                Top Rated School
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-tighter">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-400"></span>
                LKG TO 10TH
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}