import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AnimatedBackground from "./AnimatedBackground";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "DRISHTI";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
        setShowCursor(false);
      }
    }, 100); // Faster typing animation

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title with Typing Effect */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
          className="mb-6"
        >
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-4 tracking-tight"
            style={{
              textShadow: "0 0 30px rgba(20, 184, 166, 0.8), 0 0 60px rgba(20, 184, 166, 0.5), 0 0 90px rgba(20, 184, 166, 0.3)",
            }}
            animate={!showCursor ? {
              textShadow: [
                "0 0 30px rgba(20, 184, 166, 0.8), 0 0 60px rgba(20, 184, 166, 0.5), 0 0 90px rgba(20, 184, 166, 0.3)",
                "0 0 40px rgba(20, 184, 166, 1), 0 0 80px rgba(20, 184, 166, 0.7), 0 0 120px rgba(20, 184, 166, 0.5)",
                "0 0 30px rgba(20, 184, 166, 0.8), 0 0 60px rgba(20, 184, 166, 0.5), 0 0 90px rgba(20, 184, 166, 0.3)",
              ]
            } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {displayedText}
            {showCursor && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block w-1 h-20 md:h-28 bg-teal-400 ml-2"
                style={{
                  boxShadow: "0 0 20px rgba(20, 184, 166, 1), 0 0 40px rgba(20, 184, 166, 0.7)"
                }}
              />
            )}
          </motion.h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 1, type: "spring", stiffness: 80 }}
          className="mb-8"
        >
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-teal-300 font-light tracking-wide"
            style={{
              textShadow: "0 0 20px rgba(94, 234, 212, 0.6), 0 0 40px rgba(94, 234, 212, 0.3)",
            }}
            animate={{
              textShadow: [
                "0 0 20px rgba(94, 234, 212, 0.6), 0 0 40px rgba(94, 234, 212, 0.3)",
                "0 0 25px rgba(94, 234, 212, 0.8), 0 0 50px rgba(94, 234, 212, 0.5)",
                "0 0 20px rgba(94, 234, 212, 0.6), 0 0 40px rgba(94, 234, 212, 0.3)",
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Deep Research in Intelligent Sensors, Heuristic Technology & IoT
          </motion.p>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 1.5, type: "spring", stiffness: 80 }}
          className="mb-12"
        >
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            One of the highly active research labs at IIT Roorkee, pioneering innovations in intelligent sensor systems, IoT solutions for landslide monitoring, edge computing, and AI-driven detection methods
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 2, type: "spring", stiffness: 80 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24 md:mb-32"
        >
          <motion.button
            onClick={() => scrollToSection("#research")}
            className="group relative px-8 py-4 bg-teal-500 text-white font-semibold rounded-lg overflow-hidden shadow-lg transition-all duration-300"
            style={{
              boxShadow: "0 0 20px rgba(20, 184, 166, 0.5), 0 10px 30px rgba(0, 0, 0, 0.3)"
            }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 40px rgba(20, 184, 166, 0.8), 0 15px 40px rgba(0, 0, 0, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(20, 184, 166, 0.5), 0 10px 30px rgba(0, 0, 0, 0.3)",
                "0 0 30px rgba(20, 184, 166, 0.7), 0 10px 35px rgba(0, 0, 0, 0.3)",
                "0 0 20px rgba(20, 184, 166, 0.5), 0 10px 30px rgba(0, 0, 0, 0.3)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Research
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </motion.svg>
            </span>
            <motion.div
              className="absolute inset-0 bg-teal-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection("#contact")}
            className="group relative px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg overflow-hidden hover:text-blue-900 transition-all duration-300"
            style={{
              boxShadow: "0 0 15px rgba(255, 255, 255, 0.3), 0 10px 30px rgba(0, 0, 0, 0.3)"
            }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 35px rgba(255, 255, 255, 0.6), 0 15px 40px rgba(0, 0, 0, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 15px rgba(255, 255, 255, 0.3), 0 10px 30px rgba(0, 0, 0, 0.3)",
                "0 0 25px rgba(255, 255, 255, 0.5), 0 10px 35px rgba(0, 0, 0, 0.3)",
                "0 0 15px rgba(255, 255, 255, 0.3), 0 10px 30px rgba(0, 0, 0, 0.3)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Join Us
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>
            </span>
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5, type: "spring", stiffness: 100 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => scrollToSection("#research")}
            style={{
              filter: "drop-shadow(0 0 10px rgba(20, 184, 166, 0.6))"
            }}
          >
            <motion.span
              className="text-white text-sm mb-2 font-light"
              animate={{
                textShadow: [
                  "0 0 10px rgba(255, 255, 255, 0.5)",
                  "0 0 20px rgba(255, 255, 255, 0.8)",
                  "0 0 10px rgba(255, 255, 255, 0.5)",
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Scroll to explore
            </motion.span>
            <motion.svg
              className="w-8 h-8 text-teal-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                filter: "drop-shadow(0 0 8px rgba(20, 184, 166, 0.8))"
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </motion.svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Corner Elements */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 border-t-4 border-l-4 border-teal-500/50"
        initial={{ opacity: 0, scale: 0.5, x: -50, y: -50 }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0
        }}
        transition={{ duration: 1.2, delay: 0.3, type: "spring", stiffness: 100 }}
        style={{
          filter: "drop-shadow(0 0 15px rgba(20, 184, 166, 0.7))"
        }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 border-b-4 border-r-4 border-teal-500/50"
        initial={{ opacity: 0, scale: 0.5, x: 50, y: 50 }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0
        }}
        transition={{ duration: 1.2, delay: 0.3, type: "spring", stiffness: 100 }}
        style={{
          filter: "drop-shadow(0 0 15px rgba(20, 184, 166, 0.7))"
        }}
      >
        <motion.div
          className="absolute bottom-0 right-0 w-full h-full"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
