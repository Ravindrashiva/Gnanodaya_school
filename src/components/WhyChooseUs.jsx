import { motion } from 'framer-motion';
import { BookOpen, Users, ShieldCheck, Trophy, ArrowRight } from 'lucide-react';

const reasons = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Smart Classrooms',
    description: 'Interactive digital learning with modern technology and engaging content.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Experienced Teachers',
    description: 'Dedicated educators with years of experience in nurturing young minds.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Safe Campus',
    description: 'Secure environment with CCTV surveillance and trained security personnel.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: 'Sports & Activities',
    description: 'Comprehensive physical education and extracurricular activities for holistic development.',
    color: 'bg-orange-50 text-orange-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2 block">
            Our Excellence
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Gynodaya School?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what makes us the best school in Madanapalle for your child's bright future.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              {/* Icon Container */}
              <div className={`inline-flex items-center justify-center p-3 rounded-xl mb-6 transition-transform group-hover:scale-110 duration-300 ${reason.color}`}>
                {reason.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {reason.description}
              </p>
              
              <div className="flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* SEO / Trust Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-8 border-t border-gray-200 text-center"
        >
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-500">
            <span className="px-4 py-1 bg-white rounded-full shadow-sm">Best school in Madanapalle</span>
            <span className="px-4 py-1 bg-white rounded-full shadow-sm">State board school</span>
            <span className="px-4 py-1 bg-white rounded-full shadow-sm">LKG to 10th Class</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;