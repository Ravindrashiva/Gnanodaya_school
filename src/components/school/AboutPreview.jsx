import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  "AP State Board Curriculum",
  "Experienced & Caring Teachers",
  "Smart Digital Classrooms",
  "Focus on Overall Development",
];

export default function AboutPreview() {
  return (
    <section className="py-24 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-1 w-10 rounded-full bg-secondary" />
              <p className="text-xs tracking-[0.25em] uppercase font-bold text-secondary">About Our School</p>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary leading-tight">
              Nurturing the Future Leaders of Madanapalle
            </h2>
            <p className="text-gray-600 mt-5 leading-relaxed text-sm md:text-base">
              Gynodaya School has been a trusted name in education in Madanapalle for over two decades.
              We offer quality schooling from LKG to Class 10 under the AP State Board, combining strong
              academics with values, sports, and creative activities.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-7">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 text-secondary" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <Link to="/about">
              <button className="mt-8 px-7 py-3 rounded-md text-sm font-bold bg-primary text-white hover:opacity-90 transition-opacity">
                Explore Our Journey →
              </button>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <img
              src="https://media.base44.com/images/public/69f1fea6311993534279dd36/72f8eb90a_generated_80b6b828.png"
              alt="Students at Assembly"
              className="rounded-2xl shadow-xl w-full object-cover h-80 md:h-96"
            />
            <div className="absolute -bottom-5 -left-5 bg-primary rounded-xl p-5 shadow-xl hidden md:block border-2 border-secondary">
              <p className="font-heading text-3xl font-bold text-secondary">20+</p>
              <p className="text-xs text-white/80 font-medium">Years of Trust</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}