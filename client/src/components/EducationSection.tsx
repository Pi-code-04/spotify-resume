import { motion } from "framer-motion";
import { EDUCATION } from "@/lib/constants";

const EducationSection = () => {
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

  // Education colors
  const colors = [
    { from: "#68217a", to: "#FF1493" }, // Purple to Pink
    { from: "#1E90FF", to: "#00CED1" }, // Blue to Cyan
    { from: "#FF8C00", to: "#FFD700" }, // Orange to Gold
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="education-section relative"
    >
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-radial from-[#68217a] to-transparent opacity-10 blur-2xl rounded-full"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-radial from-[#1E90FF] to-transparent opacity-10 blur-xl rounded-full"></div>
      
      <motion.h1 
        className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#1E90FF]"
        variants={itemVariants}
      >
        Education
      </motion.h1>
      
      <motion.p 
        className="text-gray-300 mb-8 max-w-3xl"
        variants={itemVariants}
      >
        My educational journey has equipped me with a strong foundation in computer science
        and engineering, providing me with the technical knowledge and problem-solving skills
        needed to excel in the field of software development.
      </motion.p>
      
      <div className="space-y-8">
        {EDUCATION.map((edu, index) => {
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
                <div 
                  className="absolute inset-0 z-0 opacity-30" 
                  style={{
                    background: `linear-gradient(135deg, ${colorSet.from}40 0%, ${colorSet.to}40 100%)`,
                  }}
                ></div>
                
                <div className="relative z-10 p-6">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div className="mb-2 md:mb-0">
                      <h2 
                        className="text-2xl font-bold"
                        style={{
                          background: `linear-gradient(90deg, ${colorSet.from} 0%, ${colorSet.to} 100%)`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent"
                        }}
                      >
                        {edu.degree}
                      </h2>
                      {edu.field && (
                        <p className="text-gray-300 mt-1">{edu.field}</p>
                      )}
                    </div>
                    <div 
                      className="px-4 py-1 rounded-full text-sm"
                      style={{
                        background: `linear-gradient(90deg, ${colorSet.from}30 0%, ${colorSet.to}30 100%)`,
                        border: `1px solid ${colorSet.from}60`
                      }}
                    >
                      {edu.period}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                        style={{
                          background: `linear-gradient(135deg, ${colorSet.from}30 0%, ${colorSet.to}30 100%)`,
                        }}
                      >
                        <i 
                          className="fas fa-university"
                          style={{ color: colorSet.from }}
                        ></i>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{edu.institution}</h3>
                        <p className="text-gray-400 text-sm">{edu.location}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div 
                    className="mt-4 pt-4 border-t"
                    style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
                  >
                    <div className="flex items-center">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center mr-3"
                        style={{
                          background: `linear-gradient(135deg, ${colorSet.from}30 0%, ${colorSet.to}30 100%)`,
                        }}
                      >
                        <i 
                          className="fas fa-graduation-cap"
                          style={{ color: colorSet.from }}
                        ></i>
                      </div>
                      <div className="text-gray-300">
                        {edu.grade}
                      </div>
                    </div>
                  </div>
                  
                  {index === 0 && (
                    <div 
                      className="mt-4 pt-4 border-t"
                      style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
                    >
                      <h4 className="font-semibold mb-2">Key Coursework:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="flex items-center">
                          <div 
                            className="w-6 h-6 rounded-full flex items-center justify-center mr-2"
                            style={{ background: `${colorSet.from}30` }}
                          >
                            <i className="fas fa-code text-xs" style={{ color: colorSet.from }}></i>
                          </div>
                          <span className="text-gray-300 text-sm">Data Structures & Algorithms</span>
                        </div>
                        <div className="flex items-center">
                          <div 
                            className="w-6 h-6 rounded-full flex items-center justify-center mr-2"
                            style={{ background: `${colorSet.from}30` }}
                          >
                            <i className="fas fa-database text-xs" style={{ color: colorSet.from }}></i>
                          </div>
                          <span className="text-gray-300 text-sm">Database Management Systems</span>
                        </div>
                        <div className="flex items-center">
                          <div 
                            className="w-6 h-6 rounded-full flex items-center justify-center mr-2"
                            style={{ background: `${colorSet.from}30` }}
                          >
                            <i className="fas fa-laptop-code text-xs" style={{ color: colorSet.from }}></i>
                          </div>
                          <span className="text-gray-300 text-sm">Web Technologies</span>
                        </div>
                        <div className="flex items-center">
                          <div 
                            className="w-6 h-6 rounded-full flex items-center justify-center mr-2"
                            style={{ background: `${colorSet.from}30` }}
                          >
                            <i className="fas fa-network-wired text-xs" style={{ color: colorSet.from }}></i>
                          </div>
                          <span className="text-gray-300 text-sm">Computer Networks</span>
                        </div>
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
          background: "linear-gradient(135deg, rgba(29, 185, 84, 0.2) 0%, rgba(30, 30, 30, 0.7) 100%)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
          border: "1px solid rgba(255, 255, 255, 0.05)"
        }}
        variants={itemVariants}
      >
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <i className="fas fa-lightbulb text-[#1DB954] mr-2"></i>
          <span>Continuous Learning</span>
        </h3>
        <p className="text-gray-300 mb-4">
          Besides my formal education, I'm constantly expanding my knowledge through online courses, 
          technical workshops, and hands-on projects. I believe in lifelong learning and staying 
          updated with the latest technologies and industry practices.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-[rgba(29,185,84,0.2)] flex items-center justify-center mr-3">
              <i className="fas fa-laptop-code text-[#1DB954]"></i>
            </div>
            <span className="text-gray-300">Online Courses</span>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-[rgba(29,185,84,0.2)] flex items-center justify-center mr-3">
              <i className="fas fa-users text-[#1DB954]"></i>
            </div>
            <span className="text-gray-300">Tech Meetups</span>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-[rgba(29,185,84,0.2)] flex items-center justify-center mr-3">
              <i className="fas fa-project-diagram text-[#1DB954]"></i>
            </div>
            <span className="text-gray-300">Personal Projects</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EducationSection;
