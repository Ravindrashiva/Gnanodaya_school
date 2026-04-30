import { motion } from 'framer-motion';
import { 
  FileText, 
  Bus, 
  BookOpen, 
  CalendarDays, 
  ClipboardCheck, 
  Camera 
} from 'lucide-react';

const links = [
  {
    title: "School Curriculum",
    desc: "Detailed academic plan for LKG - 10th",
    icon: <BookOpen className="w-6 h-6" />,
    color: "border-t-blue-600",
    hover: "hover:bg-blue-600",
  },
  {
    title: "Transport Routes",
    desc: "Bus timings and pickup locations",
    icon: <Bus className="w-6 h-6" />,
    color: "border-t-yellow-400",
    hover: "hover:bg-yellow-400",
  },
  {
    title: "Exam Schedule",
    desc: "Upcoming unit tests and term dates",
    icon: <CalendarDays className="w-6 h-6" />,
    color: "border-t-red-500",
    hover: "hover:bg-red-500",
  },
  {
    title: "Admission Form",
    desc: "Download and submit applications",
    icon: <ClipboardCheck className="w-6 h-6" />,
    color: "border-t-emerald-500",
    hover: "hover:bg-emerald-500",
  },
  {
    title: "School Gallery",
    desc: "Glimpses of our events & campus",
    icon: <Camera className="w-6 h-6" />,
    color: "border-t-indigo-600",
    hover: "hover:bg-indigo-600",
  },
  {
    title: "Results Portal",
    desc: "Check student performance records",
    icon: <FileText className="w-6 h-6" />,
    color: "border-t-orange-500",
    hover: "hover:bg-orange-500",
  }
];

export default function QuickLinksGrid() {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
            Resources & <span className="text-blue-700">Quick Access</span>
          </h2>
          <p className="mt-4 text-slate-600 font-medium">Everything you need to stay updated with Gynodaya School</p>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`group bg-white p-8 rounded-xl shadow-sm border-t-4 ${link.color} flex items-start gap-5 cursor-pointer transition-all hover:shadow-xl`}
            >
              <div className={`p-3 rounded-lg bg-slate-100 text-slate-700 group-hover:text-white group-all ${link.hover} transition-colors duration-300`}>
                {link.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-700 transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-slate-500 mt-1 leading-snug">
                  {link.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}