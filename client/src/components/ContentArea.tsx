import { AnimatePresence, motion } from "framer-motion";
import { SectionType } from "@/types";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import CertificationsSection from "./CertificationsSection";

interface ContentAreaProps {
  activeSection: SectionType;
  playIntro: () => void;
}

const ContentArea = ({ activeSection, playIntro }: ContentAreaProps) => {
  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    <motion.div 
      className="content-area"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={fadeVariants}
          className="section-content"
        >
          {activeSection === "home" && <HomeSection playIntro={playIntro} />}
          {activeSection === "about" && <AboutSection />}
          {activeSection === "experience" && <ExperienceSection />}
          {activeSection === "education" && <EducationSection />}
          {activeSection === "projects" && <ProjectsSection />}
          {activeSection === "skills" && <SkillsSection />}
          {activeSection === "certifications" && <CertificationsSection />}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default ContentArea;
