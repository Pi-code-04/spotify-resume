import { motion } from "framer-motion";
import { SUMMARY, PROFILE, SKILLS } from "@/lib/constants";

interface HomeSectionProps {
  playIntro: () => void;
}

const HomeSection = ({ playIntro }: HomeSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Map skill levels for visualization
  const skillLevels = {
    "JavaScript": 4.5,
    "HTML5": 4,
    "CSS3": 4,
    "ReactJS": 4.5,
    "Node.js": 4,
    "Express.js": 3.5,
    "Git & GitHub": 4,
    "MongoDB": 4,
    "RESTful APIs": 3.5,
    "Testing & QA": 4
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="home-section relative"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-32 bg-gradient-radial from-[#1DB954] to-transparent opacity-5 blur-xl"></div>
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-gradient-radial from-[#68217a] to-transparent opacity-5 blur-xl rounded-full"></div>
      
      <motion.div 
        className="flex flex-col md:flex-row items-center md:items-end mb-12 pb-8 border-b border-opacity-10 border-white relative overflow-hidden"
        variants={itemVariants}
      >
        {/* Profile section with enhanced styling */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1DB954] to-[#68217a] opacity-30 rounded-full blur-md transform scale-110"></div>
          <img 
            src={PROFILE.image} 
            alt={PROFILE.name} 
            className="w-48 h-48 rounded-full object-cover md:mr-6 mb-6 md:mb-0 shadow-2xl relative z-10 border-2 border-[#1DB954]"
          />
        </div>
        <div className="text-center md:text-left relative z-10">
          <div className="uppercase text-xs font-bold mb-2 text-[#1DB954]">Professional Summary</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-[#1DB954]">{PROFILE.name}</h1>
          <div className="flex flex-wrap justify-center md:justify-start items-center text-[#b3b3b3] text-sm mb-6">
            <span className="mr-6 flex items-center mb-2"><i className="fas fa-map-marker-alt mr-2"></i> {PROFILE.location}</span>
            <span className="mr-6 flex items-center mb-2"><i className="fas fa-envelope mr-2"></i> {PROFILE.email}</span>
            <span className="flex items-center mb-2"><i className="fas fa-phone mr-2"></i> {PROFILE.phone}</span>
          </div>
          <p className="text-[#b3b3b3] max-w-2xl mb-6 text-sm md:text-base">{SUMMARY}</p>
          <div className="flex flex-wrap justify-center md:justify-start mt-4">
            <motion.button 
              className="spotify-button mr-4 mb-3"
              onClick={playIntro}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-play mr-2"></i> PLAY MY INTRO
            </motion.button>
            <motion.a 
              href="https://github.com/your-github" 
              target="_blank"
              rel="noopener noreferrer"
              className="spotify-button-outline mb-3 inline-flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-file-download mr-2"></i> DOWNLOAD CV
            </motion.a>
          </div>
        </div>
      </motion.div>
      
      {/* Top Skills with enhanced visuals */}
      <motion.div className="mb-12" variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <span className="text-[#1DB954] mr-2"><i className="fas fa-chart-line"></i></span>
          <span>Top Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SKILLS.programmingLanguages.map((skill, index) => (
            <motion.div 
              key={`pl-${index}`}
              className="track-item"
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-[#1DB954] to-[#68217a] rounded-md flex items-center justify-center text-white mr-4">
                <i className="fas fa-code"></i>
              </div>
              <div className="flex-1">
                <div className="font-semibold">{skill}</div>
                <div className="skill-level mt-1">
                  <div className="skill-progress" style={{ width: `${(skillLevels[skill as keyof typeof skillLevels] || 3) * 20}%` }}></div>
                </div>
              </div>
              <div className="text-[#1DB954] flex items-center ml-2">
                <div className="flex">
                  {Array.from({ length: Math.floor(skillLevels[skill as keyof typeof skillLevels] || 3) }).map((_, i) => (
                    <i key={i} className="fas fa-star text-xs"></i>
                  ))}
                  {(skillLevels[skill as keyof typeof skillLevels] || 3) % 1 !== 0 && (
                    <i className="fas fa-star-half-alt text-xs"></i>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
          
          {SKILLS.frameworksAndLibraries.map((skill, index) => (
            <motion.div 
              key={`fr-${index}`}
              className="track-item"
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-[#FF8C00] to-[#FF1493] rounded-md flex items-center justify-center text-white mr-4">
                <i className="fas fa-layer-group"></i>
              </div>
              <div className="flex-1">
                <div className="font-semibold">{skill}</div>
                <div className="skill-level mt-1">
                  <div 
                    className="skill-progress" 
                    style={{ 
                      width: `${(skillLevels[skill as keyof typeof skillLevels] || 3) * 20}%`,
                      background: "linear-gradient(90deg, #FF8C00 0%, #FF1493 100%)"
                    }}
                  ></div>
                </div>
              </div>
              <div className="text-[#FF8C00] flex items-center ml-2">
                <div className="flex">
                  {Array.from({ length: Math.floor(skillLevels[skill as keyof typeof skillLevels] || 3) }).map((_, i) => (
                    <i key={i} className="fas fa-star text-xs"></i>
                  ))}
                  {(skillLevels[skill as keyof typeof skillLevels] || 3) % 1 !== 0 && (
                    <i className="fas fa-star-half-alt text-xs"></i>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
          
          {SKILLS.toolsAndTechnologies.map((skill, index) => (
            <motion.div 
              key={`tt-${index}`}
              className="track-item"
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-[#1E90FF] to-[#00CED1] rounded-md flex items-center justify-center text-white mr-4">
                <i className="fas fa-tools"></i>
              </div>
              <div className="flex-1">
                <div className="font-semibold">{skill}</div>
                <div className="skill-level mt-1">
                  <div 
                    className="skill-progress" 
                    style={{ 
                      width: `${(skillLevels[skill as keyof typeof skillLevels] || 3) * 20}%`,
                      background: "linear-gradient(90deg, #1E90FF 0%, #00CED1 100%)"
                    }}
                  ></div>
                </div>
              </div>
              <div className="text-[#1E90FF] flex items-center ml-2">
                <div className="flex">
                  {Array.from({ length: Math.floor(skillLevels[skill as keyof typeof skillLevels] || 3) }).map((_, i) => (
                    <i key={i} className="fas fa-star text-xs"></i>
                  ))}
                  {(skillLevels[skill as keyof typeof skillLevels] || 3) % 1 !== 0 && (
                    <i className="fas fa-star-half-alt text-xs"></i>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Sound visualization teaser */}
      <motion.div 
        variants={itemVariants}
        className="mb-8 p-6 rounded-xl bg-gradient-to-r from-[rgba(29,185,84,0.1)] to-[rgba(104,33,122,0.1)] border border-[rgba(255,255,255,0.1)]"
      >
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <span className="text-[#1DB954] mr-2"><i className="fas fa-headphones-alt"></i></span>
          <span>Ready to hear more about my experience?</span>
        </h2>
        <p className="text-[#b3b3b3] mb-4">
          Explore the other sections to learn about my education, work experience, projects, and certifications. 
          Click the visualize button to see an audio representation of my skills!
        </p>
        <div className="flex flex-wrap">
          <motion.button 
            className="spotify-button flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('visualizeBtn')?.click()}
          >
            <i className="fas fa-wave-square mr-2"></i> VISUALIZE MY SKILLS
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HomeSection;
