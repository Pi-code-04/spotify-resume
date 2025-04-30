import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAudio } from "@/hooks/useAudio";

const NowPlayingBar = () => {
  const { 
    isPlaying, 
    togglePlay, 
    currentTime, 
    duration, 
    progress,
    setProgress
  } = useAudio();
  
  const [volume, setVolume] = useState(66);
  
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleProgressChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    setProgress(pos * 100);
  };

  return (
    <motion.div 
      className="now-playing-bar"
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      <div className="flex flex-col sm:flex-row items-center">
        {/* Currently Playing */}
        <div className="flex items-center mb-4 sm:mb-0 sm:w-1/3">
          <img 
            src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXVkaW8lMjB3YXZlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=100&h=100&q=80" 
            alt="Currently playing" 
            className="w-14 h-14 object-cover rounded mr-3"
          />
          <div>
            <div className="font-semibold">My Developer Journey</div>
            <div className="text-sm text-[#b3b3b3]">Piyush Sinha</div>
          </div>
          <button className="ml-4 text-[#b3b3b3] hover:text-white">
            <i className="far fa-heart"></i>
          </button>
        </div>
        
        {/* Player Controls */}
        <div className="flex flex-col items-center sm:w-1/3">
          <div className="flex items-center mb-2">
            <button className="text-[#b3b3b3] hover:text-white mx-2">
              <i className="fas fa-random"></i>
            </button>
            <button className="text-[#b3b3b3] hover:text-white mx-2">
              <i className="fas fa-step-backward"></i>
            </button>
            <motion.button 
              className="bg-white text-[#191414] rounded-full w-8 h-8 flex items-center justify-center mx-3 hover:scale-105 transition"
              onClick={togglePlay}
              whileTap={{ scale: 0.95 }}
            >
              <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
            </motion.button>
            <button className="text-[#b3b3b3] hover:text-white mx-2">
              <i className="fas fa-step-forward"></i>
            </button>
            <button className="text-[#b3b3b3] hover:text-white mx-2">
              <i className="fas fa-redo-alt"></i>
            </button>
          </div>
          
          <div className="flex items-center w-full">
            <span className="text-xs text-[#b3b3b3] mr-2">
              {formatTime(currentTime)}
            </span>
            <div 
              className="relative flex-grow h-1 bg-gray-700 rounded-full cursor-pointer group"
              onClick={handleProgressChange}
            >
              <div 
                className="absolute h-full bg-[#1DB954] rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
              <div 
                className="absolute h-3 w-3 bg-white rounded-full -mt-1 opacity-0 group-hover:opacity-100 transition"
                style={{ left: `calc(${progress}% - 6px)` }}
              ></div>
            </div>
            <span className="text-xs text-[#b3b3b3] ml-2">
              {formatTime(duration)}
            </span>
          </div>
        </div>
        
        {/* Volume Controls */}
        <div className="hidden sm:flex items-center justify-end sm:w-1/3 mt-4 sm:mt-0">
          <button className="text-[#b3b3b3] hover:text-white mr-2">
            <i className="fas fa-list"></i>
          </button>
          <button className="text-[#b3b3b3] hover:text-white mr-2">
            <i className="fas fa-desktop"></i>
          </button>
          <button className="text-[#b3b3b3] hover:text-white mr-3">
            <i className="fas fa-volume-up"></i>
          </button>
          <div 
            className="relative w-24 h-1 bg-gray-700 rounded-full cursor-pointer group"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const pos = (e.clientX - rect.left) / rect.width;
              setVolume(Math.round(pos * 100));
            }}
          >
            <div 
              className="absolute h-full bg-[#b3b3b3] rounded-full group-hover:bg-[#1DB954]"
              style={{ width: `${volume}%` }}
            ></div>
            <div 
              className="absolute h-3 w-3 bg-white rounded-full -mt-1 opacity-0 group-hover:opacity-100 transition"
              style={{ left: `calc(${volume}% - 6px)` }}
            ></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NowPlayingBar;
