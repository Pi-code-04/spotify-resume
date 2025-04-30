import { motion } from "framer-motion";
import { SectionType } from "@/types";
import { PROFILE } from "@/lib/constants";

interface SidebarProps {
  activeSection: SectionType;
  setActiveSection: (section: SectionType) => void;
}

const Sidebar = ({ activeSection, setActiveSection }: SidebarProps) => {
  const navItems = [
    { id: "home" as SectionType, label: "Home", icon: "fa-home" },
    { id: "about" as SectionType, label: "About", icon: "fa-user" },
    { id: "experience" as SectionType, label: "Experience", icon: "fa-briefcase" },
    { id: "education" as SectionType, label: "Education", icon: "fa-graduation-cap" },
    { id: "projects" as SectionType, label: "Projects", icon: "fa-code" },
    { id: "skills" as SectionType, label: "Skills", icon: "fa-star" },
    { id: "certifications" as SectionType, label: "Certifications", icon: "fa-certificate" },
  ];

  // Define colors for different sections
  const sectionColors = {
    "home": "#1DB954",
    "about": "#68217a",
    "experience": "#1E90FF",
    "education": "#FF8C00",
    "projects": "#FF1493",
    "skills": "#00CED1",
    "certifications": "#1DB954"
  };

  return (
    <motion.div 
      className="sidebar"
      initial={{ x: -60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center text-2xl font-bold mb-8">
        <div className="relative mr-3">
          <motion.div
            className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#1DB954] to-[#68217a] opacity-70 blur-sm"
            animate={{ 
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.05, 1],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <i className="fab fa-spotify text-[#1DB954] relative z-10 text-3xl"></i>
        </div>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#1DB954]">
          Spotify Resume
        </span>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <img 
            src={PROFILE.image}
            alt={PROFILE.name}
            className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-[#1DB954]"
          />
          <div>
            <div className="font-bold">{PROFILE.name}</div>
            <div className="text-xs text-[#b3b3b3]">QA Engineer & Developer</div>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="text-xs uppercase font-bold mb-2 text-[#b3b3b3]">Menu</div>
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const sectionColor = sectionColors[item.id as keyof typeof sectionColors] || "#1DB954";
            
            return (
              <motion.div
                key={item.id}
                className={`nav-item ${isActive ? 'active' : ''}`}
                onClick={() => setActiveSection(item.id)}
                whileHover={{ scale: 1.03, x: 5 }}
                whileTap={{ scale: 0.97 }}
                style={isActive ? { 
                  borderLeft: `3px solid ${sectionColor}`,
                  paddingLeft: '10px'
                } : {}}
              >
                <i 
                  className={`fas ${item.icon} text-xl mr-4`}
                  style={{ color: isActive ? sectionColor : undefined }}
                ></i>
                <span className="font-semibold">{item.label}</span>
                {isActive && (
                  <motion.div 
                    className="ml-auto h-2 w-2 rounded-full" 
                    style={{ backgroundColor: sectionColor }}
                    layoutId="activeIndicator"
                  />
                )}
              </motion.div>
            );
          })}
        </nav>
      </div>
      
      <div className="mt-auto">
        <div className="text-xs uppercase font-bold mb-2 text-[#b3b3b3]">External Links</div>
        <div className="space-y-1">
          <a 
            href={PROFILE.linkedin}
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-item group"
          >
            <i className="fab fa-linkedin text-xl mr-4 group-hover:text-[#0077b5]"></i>
            <span className="font-semibold">LinkedIn</span>
          </a>
          <a 
            href={PROFILE.github}
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-item group"
          >
            <i className="fab fa-github text-xl mr-4 group-hover:text-white"></i>
            <span className="font-semibold">GitHub</span>
          </a>
          <div className="py-4 px-3 mt-4 bg-gradient-to-r from-[rgba(29,185,84,0.1)] to-[rgba(104,33,122,0.1)] rounded-lg">
            <div className="text-sm font-semibold mb-2">Currently Playing</div>
            <div className="text-xs text-[#b3b3b3]">My Developer Journey</div>
            <div className="flex items-center mt-2">
              <div className="w-full bg-[#282828] h-1 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-[#1DB954]"
                  initial={{ width: "0%" }}
                  animate={{ width: "65%" }}
                  transition={{ duration: 15, repeat: Infinity }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
