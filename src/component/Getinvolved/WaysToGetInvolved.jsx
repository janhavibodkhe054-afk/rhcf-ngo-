import React from "react";
import { motion } from "framer-motion";
import { Users, HeartHandshake, Target, Megaphone } from "lucide-react";

const options = [
  {
    icon: <Users size={28} />,
    title: "Volunteer",
    desc: "Join us in field work, teaching, tech support, or social media. Flexible options: weekends, full-time, or remote.",
    
    bg: "bg-[#7cb342]/5",
  },
  {
    icon: <HeartHandshake size={28} />,
    title: "Donate",
    desc: "Support our mission with one-time or monthly donations. ₹500 feeds 5 families, ₹1000 supports a child's education.",
    
    bg: "bg-green-50",
  },
  {
    icon: <Target size={28} />,
    title: "Fundraise",
    desc: "Start your own campaign through birthdays, marathons, or college drives and make a real difference.",
    
    bg: "bg-lime-50",
  },
  {
    icon: <Megaphone size={28} />,
    title: "Spread Awareness",
    desc: "Share our mission on social media, join campaigns, and help us reach more people.",
    
    bg: "bg-emerald-50",
  },
];

const WaysToGetInvolved = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-5 md:px-10">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-900 text-3xl md:text-5xl font-bold"
        >
          Ways to <span className="text-[#7cb342]">Get Involved</span>
        </motion.h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          There are many ways you can contribute and make a meaningful impact.
        </p>

        {/* Cards */}
        <div className="grid gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {options.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className={`group relative border border-gray-200 rounded-2xl p-6 text-left transition duration-300 hover:-translate-y-1 hover:shadow-lg ${item.bg}`}
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7cb342] to-transparent rounded-t-2xl opacity-80"></div>

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white text-[#7cb342] shadow-sm mb-4 group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-gray-900 text-lg font-semibold mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                {item.desc}
              </p>

              

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 shadow-[0_10px_30px_rgba(124,179,66,0.15)] pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaysToGetInvolved;