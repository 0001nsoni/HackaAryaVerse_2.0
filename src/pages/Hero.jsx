import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const cloudLeft = useRef(null);
  const cloudRight = useRef(null);
  const hawaMahal = useRef(null);
  const heroSection = useRef(null);

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Hero section height
    gsap.set(heroSection.current, { height: "100vh" });

    // Parallax for clouds & Hawa Mahal
    const cloudY = window.innerWidth < 768 ? 250 : 500;
    const hawaY = window.innerWidth < 768 ? 50 : 100;

    gsap.to(cloudLeft.current, {
      y: cloudY,
      ease: "none",
      scrollTrigger: {
        trigger: heroSection.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(cloudRight.current, {
      y: cloudY,
      ease: "none",
      scrollTrigger: {
        trigger: heroSection.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(hawaMahal.current, {
      y: hawaY,
      ease: "none",
      scrollTrigger: {
        trigger: heroSection.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Countdown timer
    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date("2025-10-10T00:00:00").getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(countdownInterval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
   <div
  ref={heroSection}
  className="relative w-full h-screen overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage: `url('https://images.stockcake.com/public/7/3/a/73a45466-35f5-4456-b961-1d36c3769efc_large/peaceful-pixel-sky-stockcake.jpg')`,
  }}
>
      {/* Clouds */}
      <img
        ref={cloudLeft}
        className="absolute top-0 left-0 w-1/2 md:w-2/5 pointer-events-none"
        src="https://static.vecteezy.com/system/resources/thumbnails/046/032/357/small/special-3d-rendering-smooth-clouds-flowing-shapes-isolated-transparent-backgrounds-png.png"
        alt="cloud"
      />
      <img
        ref={cloudRight}
        className="absolute top-0 right-0 w-1/2 md:w-2/5 pointer-events-none scale-x-[-1]"
        src="https://static.vecteezy.com/system/resources/thumbnails/046/032/357/small/special-3d-rendering-smooth-clouds-flowing-shapes-isolated-transparent-backgrounds-png.png"
        alt="cloud"
      />

      {/* Centered Title and Countdown */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20 w-full px-4">
     <motion.h1
  className="relative z-20 text-4xl md:text-6xl font-bold text-white mb-4 
             drop-shadow-[0_0_12px_rgba(0,0,0,0.85)] leading-tight"
>
  HackAryaVerse <span className="text-indigo-300 drop-shadow-[0_0_8px_rgba(0,0,0,0.7)]">2.0</span>
</motion.h1>

<motion.p
  className="relative z-20 text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto 
             drop-shadow-[0_0_10px_rgba(0,0,0,0.9)]"
>
  The Palace of Winds in the Pink City of Jaipur
</motion.p>

{/* Countdown Cards */}
<motion.div
  className="mt-6 flex flex-wrap justify-center gap-4"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay:0.25, duration: 1 }}
>
  {["days", "hours", "minutes", "seconds"].map((unit) => (
    <motion.div
      key={unit}
      className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-800 
                 border border-white/20 rounded-xl shadow-lg 
                 min-w-[70px] flex flex-col items-center md:p-4 p-2"
    >
      <span className="text-xl md:text-3xl font-bold text-white font-mono drop-shadow-[0_0_6px_rgba(0,0,0,0.8)]">
        {timeLeft[unit]}
      </span>
      <span className="text-xs uppercase text-gray-300">{unit}</span>
    </motion.div>
  ))}
</motion.div>

      </div>

      {/* Hawa Mahal Image */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full flex justify-center z-0">
        <img
          ref={hawaMahal}
          src="src/assets/jaipur/h2.png"
          alt="Hawa Mahal"
          className="w-full brightness-95 object-contain pointer-events-none"
        />
      </div>

      {/* Scroll Indicator */}
     <motion.div
  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col 
             items-center text-white z-30 drop-shadow-[0_0_10px_rgba(0,0,0,0.9)]"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 2, duration: 1 }}
>
  <span className="text-m font-bold mb-2 animate-pulse">Scroll Down</span>
  <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
    <svg
      className="w-6 h-6 animate-bounce"
      fill="none"
      stroke="white"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </motion.div>
</motion.div>

    </div>
  );
};

export default Hero;
