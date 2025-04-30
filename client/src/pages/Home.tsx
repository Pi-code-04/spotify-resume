import { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import ContentArea from "@/components/ContentArea";
import NowPlayingBar from "@/components/NowPlayingBar";
import AudioControls from "@/components/AudioControls";
import { SectionType } from "@/types";
import { useAudio } from "@/hooks/useAudio";

const Home = () => {
  const [activeSection, setActiveSection] = useState<SectionType>("home");
  const { playIntro } = useAudio();

  return (
    <motion.div 
      className="spotify-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <AudioControls />
      
      <div className="spotify-main">
        <Sidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
        />
        <ContentArea 
          activeSection={activeSection} 
          playIntro={playIntro}
        />
      </div>
      
      <NowPlayingBar />
    </motion.div>
  );
};

export default Home;
