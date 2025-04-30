import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useAudio } from "@/hooks/useAudio";

const AudioVisualization = () => {
  const [isVisualizing, setIsVisualizing] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { startAudio, analyser, dataArray } = useAudio();
  const animationRef = useRef<number>();

  const toggleVisualization = () => {
    if (isVisualizing) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = undefined;
      }
      setIsVisualizing(false);
    } else {
      startAudio();
      setIsVisualizing(true);
    }
  };

  useEffect(() => {
    if (!isVisualizing || !canvasRef.current || !analyser || !dataArray) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const renderFrame = () => {
      animationRef.current = requestAnimationFrame(renderFrame);
      analyser.getByteFrequencyData(dataArray);
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const barWidth = (canvas.width / dataArray.length) * 2.5;
      let x = 0;
      
      for (let i = 0; i < dataArray.length; i++) {
        const barHeight = dataArray[i] / 2;
        
        const r = barHeight + 25;
        const g = 250;
        const b = 50;
        
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        
        x += barWidth + 1;
      }
    };
    
    renderFrame();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisualizing, analyser, dataArray]);

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.width = canvasRef.current.offsetWidth;
      canvasRef.current.height = canvasRef.current.offsetHeight;
    }
  }, []);

  return (
    <div className="relative h-60 bg-[#121212] rounded-lg overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.button 
          id="visualizeBtn" 
          className="spotify-button"
          onClick={toggleVisualization}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isVisualizing ? "STOP VISUALIZATION" : "VISUALIZE MY AUDIO SKILLS"}
        </motion.button>
      </div>
    </div>
  );
};

export default AudioVisualization;
