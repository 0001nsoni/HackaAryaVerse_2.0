import React, { useState, useEffect } from "react";
import Hero from "./pages/Hero";
import Nav from "./pages/Nav";
import Mission from "./pages/Mission";

// ✅ Import your image properly
import loaderImg from "./assets/jaipur/820faf02-100f-42c2-b800-48615b756fb1.png";

function App() {
  const [loading, setLoading] = useState(true);

  // Hide loader after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col gap-4 items-center justify-center h-screen bg-gradient-to-b from-[#cb7c66] to-[#8a4a36]">
        {/* ✅ Use imported image */}
        <img className="w-32 animate-bounce" src={loaderImg} alt="HackAryaVerse Loader" />
        <h1 className="text-white text-2xl font-bold animate-pulse">
          Loading HackAryaVerse...
        </h1>
      </div>
    );
  }

  return (
    <div>
      <Nav />
      <Hero />
      <Mission />
      <div className="w-full h-screen"></div>
    </div>
  );
}

export default App;
