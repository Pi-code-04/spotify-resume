import { motion } from "framer-motion";
import AudioVisualization from "./AudioVisualization";

const SkillsSection = () => {
  const technicalSkills = [
    {
      category: "Frontend Development",
      level: "Expert",
      skills: ["React", "Vue", "JavaScript", "TypeScript", "HTML5", "CSS3/SASS"]
    },
    {
      category: "Backend Development",
      level: "Advanced",
      skills: ["Node.js", "Express", "Python", "Flask", "RESTful APIs", "GraphQL"]
    },
    {
      category: "Databases",
      level: "Advanced",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"]
    },
    {
      category: "Audio Technologies",
      level: "Expert",
      skills: ["Web Audio API", "Audio Processing", "DSP", "Audio Streaming", "Audio Visualizers"]
    }
  ];

  const softSkills = [
    { name: "Communication", icon: "comments", percentage: 95 },
    { name: "Teamwork", icon: "users", percentage: 90 },
    { name: "Problem Solving", icon: "lightbulb", percentage: 92 },
    { name: "Time Management", icon: "clock", percentage: 88 },
    { name: "Mentoring", icon: "chalkboard-teacher", percentage: 85 },
    { name: "Project Management", icon: "project-diagram", percentage: 80 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Technical Skills */}
        <motion.div 
          className="bg-[#282828] bg-opacity-70 rounded-lg p-6"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
          <div className="space-y-4">
            {technicalSkills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">{skillGroup.category}</span>
                  <span className="text-[#1DB954]">{skillGroup.level}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      className="skill-tag"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(29, 185, 84, 0.2)" }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Soft Skills */}
        <motion.div 
          className="bg-[#282828] bg-opacity-70 rounded-lg p-6"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div 
                key={index}
                className="bg-[#121212] p-4 rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-2">
                  <i className={`fas fa-${skill.icon} text-[#1DB954] mr-2`}></i>
                  <span className="font-semibold">{skill.name}</span>
                </div>
                <div className="skill-level">
                  <motion.div 
                    className="skill-progress"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Audio Visualization */}
      <motion.div 
        className="bg-[#282828] bg-opacity-70 rounded-lg p-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <h3 className="text-xl font-bold mb-4">Audio Skills Visualization</h3>
        <AudioVisualization />
      </motion.div>
    </motion.div>
  );
};

export default SkillsSection;
