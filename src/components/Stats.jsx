import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { GraduationCap, Users, Trophy, Award } from 'lucide-react';

const stats = [
  {
    label: 'Years of Excellence',
    value: 25,
    suffix: '+',
    icon: <Award className="w-6 h-6" />,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    label: 'Students Taught',
    value: 5000,
    suffix: '+',
    icon: <Users className="w-6 h-6" />,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    label: 'Board Pass Rate',
    value: 100,
    suffix: '%',
    icon: <GraduationCap className="w-6 h-6" />,
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    label: 'Awards Won',
    value: 50,
    suffix: '+',
    icon: <Trophy className="w-6 h-6" />,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
  },
];

function Counter({ value, direction = 'up' }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === 'down' ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat('en-US').format(
          latest.toFixed(0)
        );
      }
    });
  }, [springValue]);

  return <span ref={ref} />;
}

export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group text-center p-8 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center p-4 rounded-2xl mb-6 ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>
              
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
                  <Counter value={stat.value} />
                  {stat.suffix}
                </h3>
                <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}