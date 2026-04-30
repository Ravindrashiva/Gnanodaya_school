import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, GraduationCap, ChevronRight } from 'lucide-react'
import { school } from '../data/siteContent'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Academics', href: '/academics' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Learning Hub', href: '/learning-hub' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-white/20 bg-white/80 shadow-glass backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo Section */}
          <Link to="/" className="group flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-dark text-brand-gold shadow-lg transition-all duration-500 group-hover:rotate-[10deg] group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white">
              <GraduationCap size={28} strokeWidth={2.5} />
            </div>
            <div className="hidden sm:block">
              <p className="text-lg font-black uppercase tracking-tighter text-brand-dark leading-none">
                {school.name}
              </p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue">
                {school.location} · {school.board}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href
                return (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className={`relative px-4 py-2 text-sm font-bold uppercase tracking-widest transition-colors duration-300 rounded-xl
                        ${isActive ? 'text-brand-blue' : 'text-muted hover:text-brand-dark hover:bg-slate-100/50'}`}
                    >
                      {item.label}
                      {isActive && (
                        <motion.div
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-blue rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Admission CTA */}
          <div className="hidden lg:block">
            <Link
              to="/admissions"
              className="group relative flex items-center gap-2 overflow-hidden bg-brand-dark px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-[0.15em] text-white shadow-xl transition-all hover:bg-brand-blue hover:shadow-brand-blue/30 active:scale-95"
            >
              <span className="relative z-10">Enroll Now</span>
              <ChevronRight size={16} className="relative z-10 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transition-transform duration-500 group-hover:translate-x-full" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-brand-dark transition-all hover:bg-brand-dark hover:text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 top-20 bg-brand-dark/20 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="absolute inset-x-4 top-[5.5rem] overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-2xl lg:hidden"
            >
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-5 py-4 rounded-2xl text-sm font-bold uppercase tracking-wider transition-all
                      ${location.pathname === item.href 
                        ? 'bg-brand-blue/10 text-brand-blue' 
                        : 'text-slate-600 hover:bg-slate-50'}`}
                  >
                    {item.label}
                    <ChevronRight size={14} className={location.pathname === item.href ? 'opacity-100' : 'opacity-0'} />
                  </Link>
                ))}
                <Link
                  to="/admissions"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 block w-full bg-brand-dark py-5 text-center text-xs font-black uppercase tracking-[0.2em] text-white rounded-2xl shadow-lg"
                >
                  Admission Form
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Royal Progress/Accent Bar */}
      <div className="h-0.5 w-full bg-gradient-to-r from-brand-gold/50 via-brand-blue to-brand-dark/50 opacity-40" />
    </header>
  )
}