import React from "react";
import { motion } from "framer-motion";
import { FaCrown, FaLightbulb } from "react-icons/fa";
import jaipurSilhouette from "../assets/jaipur/m2.png";

const Mission = () => {
  return (
    <div className="relative w-full min-h-screen bg-[linear-gradient(to_bottom,#ba6032_0%,#dd9e73_40%,#f6e2d2_100%)] flex items-center justify-center px-6 py-12">
      {/* Decorative Jaipur Silhouette */}
      <div
        className="absolute inset-0 opacity-70 bg-repeat bg-bottom"
        style={{
          backgroundImage: `url(${jaipurSilhouette})`,
          backgroundSize: '168px 22px',
        }}
      ></div>

      <div className="relative z-10 max-w-6xl w-full">
        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold font-orbitron text-amber-200 drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)] text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Mission Briefing
        </motion.h1>

        {/* Content Boxes */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* The Essence */}
          <motion.div
            className="bg-gradient-to-br from-rose-900/90 to-amber-800/80 rounded-2xl shadow-2xl p-8 border border-amber-200/40"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h2 className="flex items-center justify-center md:justify-start text-2xl md:text-3xl font-bold text-amber-200">
              <FaCrown className="mr-2 text-yellow-300" /> The Essence
            </h2>
            <p className="mt-4 text-lg md:text-xl text-amber-50 font-inter leading-relaxed">
              Hack Arya Verse is not just a hackathon—it’s a{" "}
              <span className="font-semibold text-yellow-300">celebration of ideas</span>,  
              inspired by the royal spirit of Jaipur. Where culture meets code,  
              innovators gather to shape tomorrow with{" "}
              <span className="font-semibold text-amber-200">creativity and technology</span>.
            </p>
          </motion.div>

          {/* The Objective */}
          <motion.div
            className="bg-gradient-to-br from-indigo-900/90 to-purple-800/80 rounded-2xl shadow-2xl p-8 border border-indigo-200/40"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <h2 className="flex items-center justify-center md:justify-start text-2xl md:text-3xl font-bold text-indigo-200">
              <FaLightbulb className="mr-2 text-yellow-300" /> The Objective
            </h2>
            <p className="mt-4 text-lg md:text-xl text-indigo-50 font-inter leading-relaxed">
              Join hands with brilliant minds, mentors, and innovators to craft{" "}
              <span className="font-semibold text-yellow-300">solutions</span> that honor  
              Jaipur’s legacy of innovation while driving the{" "}
              <span className="font-semibold text-indigo-100">future of technology</span>.  
              Together, let’s code a future as vibrant as the Pink City itself.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
