import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 4;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-[#191414] flex flex-col items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress >= 100 ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute w-full h-full bg-[url('https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center opacity-20 blur-sm"></div>
      </motion.div>
      
      <div className="relative z-10">
        <motion.div 
          className="w-24 h-24 mb-8 relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
            className="w-full h-full text-[#1DB954] drop-shadow-[0_0_15px_rgba(29,185,84,0.7)]"
          >
            <path
              fill="currentColor"
              d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 30.6 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"
            />
          </svg>
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#1DB954] border-r-[#1DB954] opacity-30"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          ></motion.div>
        </motion.div>
        
        <motion.div
          className="text-[#1DB954] text-4xl font-extrabold mb-6 tracking-wider"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="drop-shadow-[0_0_8px_rgba(29,185,84,0.8)]">SPOTIFY RESUME</span>
        </motion.div>
        
        <div className="w-64 relative">
          <Progress 
            value={progress} 
            className="h-2 bg-opacity-50"
          />
          <motion.div
            className="text-white text-xs mt-2 text-center"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            Loading your musical career...
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
