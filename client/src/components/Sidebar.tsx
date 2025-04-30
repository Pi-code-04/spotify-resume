import { motion } from "framer-motion";
import { SectionType } from "@/types";

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

  return (
    <motion.div 
      className="sidebar"
      initial={{ x: -60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center text-2xl font-bold mb-6">
        <i className="fab fa-spotify mr-2 text-[#1DB954]"></i>
        <span>Resumify</span>
      </div>
      
      <nav>
        {navItems.map((item) => (
          <motion.div
            key={item.id}
            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => setActiveSection(item.id)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <i className={`fas ${item.icon} text-xl mr-4`}></i>
            <span className="font-semibold">{item.label}</span>
          </motion.div>
        ))}
      </nav>
      
      <div className="mt-8">
        <div className="text-xs uppercase font-bold mb-4 text-gray-400">External Links</div>
        <a 
          href="https://www.linkedin.com/in/piyush-sinha-1a6036286" 
          target="_blank" 
          rel="noopener noreferrer"
          className="nav-item"
        >
          <i className="fab fa-linkedin text-xl mr-4"></i>
          <span className="font-semibold">LinkedIn</span>
        </a>
        <a 
          href="https://github.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="nav-item"
        >
          <i className="fab fa-github text-xl mr-4"></i>
          <span className="font-semibold">GitHub</span>
        </a>
      </div>
    </motion.div>
  );
};

export default Sidebar;
