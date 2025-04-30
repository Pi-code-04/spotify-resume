import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/constants";

const ExperienceSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  // Experience colors
  const colors = [
    { from: "#1DB954", to: "#68217a" }, // Green to Purple
    { from: "#FF8C00", to: "#FF1493" }, // Orange to Pink
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="experience-section relative"
    >
      {/* Background elements */}
      <div className="absolute top-10 right-20 w-64 h-64 bg-gradient-radial from-[#1DB954] to-transparent opacity-10 blur-xl rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-radial from-[#FF8C00] to-transparent opacity-10 blur-xl rounded-full"></div>
      
      <motion.h1 
        className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#1DB954]"
        variants={itemVariants}
      >
        Professional Experience
      </motion.h1>
      
      <motion.p 
        className="text-gray-300 mb-8 max-w-3xl"
        variants={itemVariants}
      >
        My professional journey has provided me with valuable hands-on experience in quality assurance 
        and collaborative team environments. I've had the opportunity to apply my technical skills and
        develop a strong work ethic through these roles.
      </motion.p>
      
      <div className="space-y-10">
        {EXPERIENCE.map((exp, index) => {
          const colorSet = colors[index % colors.length];
          return (
            <motion.div 
              key={index}
              className="rounded-xl overflow-hidden"
              style={{
                background: `linear-gradient(135deg, rgba(30, 30, 30, 0.9) 0%, rgba(18, 18, 18, 0.8) 100%)`,
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                border: "1px solid rgba(255, 255, 255, 0.05)"
              }}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative">
                {/* Decorative gradient overlay */}
                <div 
                  className="absolute inset-0 z-0 opacity-30" 
                  style={{
                    background: `linear-gradient(135deg, ${colorSet.from}40 0%, ${colorSet.to}40 100%)`,
                  }}
                ></div>
                
                {/* Left decoration bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1"
                  style={{
                    background: `linear-gradient(to bottom, ${colorSet.from}, ${colorSet.to})`
                  }}
                ></div>
                
                <div className="relative z-10 p-6">
                  <div className="flex flex-wrap justify-between items-start mb-6">
                    <div className="mb-4 md:mb-0">
                      <h2 
                        className="text-2xl font-bold mb-1"
                        style={{
                          background: `linear-gradient(90deg, ${colorSet.from} 0%, ${colorSet.to} 100%)`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent"
                        }}
                      >
                        {exp.position}
                      </h2>
                      <div className="flex items-center">
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center mr-3"
                          style={{
                            background: `linear-gradient(135deg, ${colorSet.from}30 0%, ${colorSet.to}30 100%)`,
                          }}
                        >
                          <i 
                            className="fas fa-building"
                            style={{ color: colorSet.from }}
                          ></i>
                        </div>
                        <div>
                          <div className="text-lg font-medium">{exp.company}</div>
                          <div className="text-gray-400 text-sm">{exp.location}</div>
                        </div>
                      </div>
                    </div>
                    <div 
                      className="px-4 py-1 rounded-full text-sm whitespace-nowrap"
                      style={{
                        background: `linear-gradient(90deg, ${colorSet.from}30 0%, ${colorSet.to}30 100%)`,
                        border: `1px solid ${colorSet.from}60`
                      }}
                    >
                      {exp.period}
                    </div>
                  </div>
                  
                  <div 
                    className="mt-6 pt-4 space-y-4 border-t"
                    style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
                  >
                    <h4 className="font-semibold mb-2 flex items-center">
                      <i 
                        className="fas fa-tasks mr-2"
                        style={{ color: colorSet.from }}
                      ></i>
                      Key Responsibilities & Achievements
                    </h4>
                    <ul className="space-y-3 text-gray-300">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex">
                          <div 
                            className="w-6 h-6 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0"
                            style={{
                              background: `linear-gradient(135deg, ${colorSet.from}20 0%, ${colorSet.to}20 100%)`,
                            }}
                          >
                            <i 
                              className="fas fa-check text-xs"
                              style={{ color: colorSet.from }}
                            ></i>
                          </div>
                          <p className="leading-relaxed">{desc}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {index === 0 && (
                    <div 
                      className="mt-6 pt-4 space-y-2 border-t"
                      style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
                    >
                      <h4 className="font-semibold mb-3 flex items-center">
                        <i 
                          className="fas fa-trophy mr-2"
                          style={{ color: colorSet.from }}
                        ></i>
                        Skills Applied
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <span 
                          className="px-3 py-1 rounded-full text-sm"
                          style={{
                            background: `linear-gradient(90deg, ${colorSet.from}20 0%, ${colorSet.to}20 100%)`,
                            border: `1px solid ${colorSet.from}40`
                          }}
                        >
                          Manual Testing
                        </span>
                        <span 
                          className="px-3 py-1 rounded-full text-sm"
                          style={{
                            background: `linear-gradient(90deg, ${colorSet.from}20 0%, ${colorSet.to}20 100%)`,
                            border: `1px solid ${colorSet.from}40`
                          }}
                        >
                          Defect Tracking
                        </span>
                        <span 
                          className="px-3 py-1 rounded-full text-sm"
                          style={{
                            background: `linear-gradient(90deg, ${colorSet.from}20 0%, ${colorSet.to}20 100%)`,
                            border: `1px solid ${colorSet.from}40`
                          }}
                        >
                          Agile Methodology
                        </span>
                        <span 
                          className="px-3 py-1 rounded-full text-sm"
                          style={{
                            background: `linear-gradient(90deg, ${colorSet.from}20 0%, ${colorSet.to}20 100%)`,
                            border: `1px solid ${colorSet.from}40`
                          }}
                        >
                          Test Documentation
                        </span>
                        <span 
                          className="px-3 py-1 rounded-full text-sm"
                          style={{
                            background: `linear-gradient(90deg, ${colorSet.from}20 0%, ${colorSet.to}20 100%)`,
                            border: `1px solid ${colorSet.from}40`
                          }}
                        >
                          Regression Testing
                        </span>
                      </div>
                    </div>
                  )}

                  {index === 1 && (
                    <div 
                      className="mt-6 pt-4 space-y-2 border-t"
                      style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
                    >
                      <h4 className="font-semibold mb-3 flex items-center">
                        <i 
                          className="fas fa-trophy mr-2"
                          style={{ color: colorSet.from }}
                        ></i>
                        Skills Applied
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <span 
                          className="px-3 py-1 rounded-full text-sm"
                          style={{
                            background: `linear-gradient(90deg, ${colorSet.from}20 0%, ${colorSet.to}20 100%)`,
                            border: `1px solid ${colorSet.from}40`
                          }}
                        >
                          Event Coordination
                        </span>
                        <span 
                          className="px-3 py-1 rounded-full text-sm"
                          style={{
                            background: `linear-gradient(90deg, ${colorSet.from}20 0%, ${colorSet.to}20 100%)`,
                            border: `1px solid ${colorSet.from}40`
                          }}
                        >
                          Communication
                        </span>
                        <span 
                          className="px-3 py-1 rounded-full text-sm"
                          style={{
                            background: `linear-gradient(90deg, ${colorSet.from}20 0%, ${colorSet.to}20 100%)`,
                            border: `1px solid ${colorSet.from}40`
                          }}
                        >
                          Workshop Organization
                        </span>
                        <span 
                          className="px-3 py-1 rounded-full text-sm"
                          style={{
                            background: `linear-gradient(90deg, ${colorSet.from}20 0%, ${colorSet.to}20 100%)`,
                            border: `1px solid ${colorSet.from}40`
                          }}
                        >
                          Leadership
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      <motion.div 
        className="mt-12 p-6 rounded-xl"
        style={{
          background: "linear-gradient(135deg, rgba(104, 33, 122, 0.2) 0%, rgba(30, 30, 30, 0.7) 100%)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
          border: "1px solid rgba(255, 255, 255, 0.05)"
        }}
        variants={itemVariants}
      >
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <i className="fas fa-rocket text-[#68217a] mr-2"></i>
          <span>My Professional Goals</span>
        </h3>
        <div className="space-y-3 text-gray-300">
          <p className="leading-relaxed">
            As I continue to develop my skills, I'm focusing on building a career in software development
            with a specialization in web technologies. I'm particularly interested in opportunities that will 
            allow me to combine my quality assurance background with development skills.
          </p>
          <p className="leading-relaxed">
            My goal is to join a dynamic team where I can contribute to innovative projects while continuing
            to grow as a developer. I'm especially drawn to roles that value both technical excellence and
            creativity.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceSection;
