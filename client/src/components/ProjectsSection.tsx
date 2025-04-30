import { motion } from "framer-motion";
import { PROJECTS, PROFILE } from "@/lib/constants";

const ProjectsSection = () => {
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

  // Project colors
  const colors = [
    { from: "#FF1493", to: "#FF8C00" }, // Pink to Orange
    { from: "#1E90FF", to: "#00CED1" }, // Blue to Cyan
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="projects-section relative"
    >
      {/* Background elements */}
      <div className="absolute top-10 left-0 w-60 h-60 bg-gradient-radial from-[#FF1493] to-transparent opacity-10 blur-xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-radial from-[#1E90FF] to-transparent opacity-10 blur-xl rounded-full"></div>
      
      <motion.h1 
        className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FF1493]"
        variants={itemVariants}
      >
        My Projects
      </motion.h1>
      
      <motion.p 
        className="text-gray-300 mb-8 max-w-3xl"
        variants={itemVariants}
      >
        Here are some of the key projects I've developed that demonstrate my technical skills and problem-solving abilities.
        Each project addresses real-world challenges using modern development approaches.
      </motion.p>
      
      <div className="space-y-12">
        {PROJECTS.map((project, index) => {
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
                
                <div className="flex flex-col md:flex-row relative z-10">
                  <div className="w-full md:w-2/5 p-6">
                    <div className="aspect-video rounded-lg overflow-hidden mb-4 shadow-lg">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg">Technologies Used:</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1 text-sm rounded-full"
                            style={{
                              background: `linear-gradient(90deg, ${colorSet.from}30 0%, ${colorSet.to}30 100%)`,
                              border: `1px solid ${colorSet.from}80`
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-3/5 p-6">
                    <h2 
                      className="text-2xl font-bold mb-4"
                      style={{
                        background: `linear-gradient(90deg, ${colorSet.from} 0%, ${colorSet.to} 100%)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                      }}
                    >
                      {project.title}
                    </h2>
                    
                    <div className="space-y-3 text-gray-300">
                      {project.description.map((desc, i) => (
                        <p key={i} className="leading-relaxed">
                          {desc}
                        </p>
                      ))}
                    </div>
                    
                    <div 
                      className="mt-6 pt-4 border-t"
                      style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
                    >
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-300">
                        <li>Real-world problem solving with modern development techniques</li>
                        <li>Clean, maintainable code with best practices</li>
                        <li>User-centered design with focus on usability</li>
                        <li>Responsive design for cross-device compatibility</li>
                      </ul>
                    </div>
                  </div>
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
          <i className="fas fa-code-branch text-[#1DB954] mr-2"></i>
          <span>Looking for Collaboration?</span>
        </h3>
        <p className="text-gray-300 mb-4">
          I'm always interested in working on innovative projects with passionate teams.
          If you have a project idea or would like to discuss potential collaboration, feel free to reach out!
        </p>
        <a 
          href={`mailto:${PROFILE.email}`}
          className="inline-flex items-center text-[#1DB954] hover:underline"
        >
          <i className="fas fa-envelope mr-2"></i> Get in touch
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsSection;
