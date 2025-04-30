import { motion } from "framer-motion";
import { SUMMARY, PROFILE } from "@/lib/constants";

const AboutSection = () => {
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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="about-section relative"
    >
      {/* Background elements */}
      <div className="absolute top-10 right-0 w-72 h-72 bg-gradient-radial from-[#68217a] to-transparent opacity-10 blur-2xl rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-gradient-radial from-[#FF1493] to-transparent opacity-5 blur-xl rounded-full"></div>
      
      <motion.h1 
        className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#68217a]"
        variants={itemVariants}
      >
        About Me
      </motion.h1>
      
      <motion.div 
        className="p-6 rounded-2xl mb-8 backdrop-blur-sm"
        style={{
          background: "linear-gradient(135deg, rgba(104, 33, 122, 0.3) 0%, rgba(30, 30, 30, 0.8) 100%)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
          border: "1px solid rgba(255, 255, 255, 0.1)"
        }}
        variants={itemVariants}
      >
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 pr-0 md:pr-6 mb-6 md:mb-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#68217a] to-[#1DB954] opacity-30 rounded-lg blur-md transform scale-105"></div>
              <img 
                src={PROFILE.image} 
                alt={PROFILE.name} 
                className="w-full rounded-lg object-cover relative z-10 border border-[rgba(255,255,255,0.2)]"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-[#68217a] mr-2"><i className="fas fa-user-circle"></i></span>
              <span>Professional Summary</span>
            </h2>
            <p className="mb-6 text-gray-300 leading-relaxed">{SUMMARY}</p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-[#1DB954]">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[rgba(104,33,122,0.2)] flex items-center justify-center mr-3">
                    <i className="fas fa-envelope text-[#68217a]"></i>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Email</div>
                    <div>{PROFILE.email}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[rgba(104,33,122,0.2)] flex items-center justify-center mr-3">
                    <i className="fas fa-phone text-[#68217a]"></i>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Phone</div>
                    <div>{PROFILE.phone}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[rgba(104,33,122,0.2)] flex items-center justify-center mr-3">
                    <i className="fas fa-map-marker-alt text-[#68217a]"></i>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Location</div>
                    <div>{PROFILE.location}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[rgba(104,33,122,0.2)] flex items-center justify-center mr-3">
                    <i className="fab fa-linkedin text-[#68217a]"></i>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">LinkedIn</div>
                    <a 
                      href={PROFILE.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-[#1DB954] transition-colors"
                    >
                      My Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <motion.div 
          className="p-6 rounded-xl"
          style={{
            background: "linear-gradient(135deg, rgba(255, 20, 147, 0.2) 0%, rgba(30, 30, 30, 0.8) 100%)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
            border: "1px solid rgba(255, 255, 255, 0.1)"
          }}
          variants={itemVariants}
        >
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <i className="fas fa-heart text-[#FF1493] mr-2"></i>
            <span>Interests</span>
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <div className="w-8 h-8 rounded-md bg-[rgba(255,20,147,0.2)] flex items-center justify-center mr-3">
                <i className="fas fa-code text-[#FF1493]"></i>
              </div>
              <span>Web Development</span>
            </li>
            <li className="flex items-center">
              <div className="w-8 h-8 rounded-md bg-[rgba(255,20,147,0.2)] flex items-center justify-center mr-3">
                <i className="fas fa-bug text-[#FF1493]"></i>
              </div>
              <span>Quality Assurance</span>
            </li>
            <li className="flex items-center">
              <div className="w-8 h-8 rounded-md bg-[rgba(255,20,147,0.2)] flex items-center justify-center mr-3">
                <i className="fab fa-github text-[#FF1493]"></i>
              </div>
              <span>Open Source Contribution</span>
            </li>
            <li className="flex items-center">
              <div className="w-8 h-8 rounded-md bg-[rgba(255,20,147,0.2)] flex items-center justify-center mr-3">
                <i className="fas fa-leaf text-[#FF1493]"></i>
              </div>
              <span>Sustainable Technology Solutions</span>
            </li>
          </ul>
        </motion.div>
        
        <motion.div 
          className="p-6 rounded-xl"
          style={{
            background: "linear-gradient(135deg, rgba(0, 206, 209, 0.2) 0%, rgba(30, 30, 30, 0.8) 100%)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
            border: "1px solid rgba(255, 255, 255, 0.1)"
          }}
          variants={itemVariants}
        >
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <i className="fas fa-globe text-[#00CED1] mr-2"></i>
            <span>Languages</span>
          </h3>
          <ul className="space-y-6">
            <li>
              <div className="flex items-center justify-between mb-2">
                <span className="flex items-center">
                  <div className="w-8 h-8 rounded-md bg-[rgba(0,206,209,0.2)] flex items-center justify-center mr-3">
                    <i className="fas fa-language text-[#00CED1]"></i>
                  </div>
                  <span>English</span>
                </span>
                <span className="text-sm text-gray-400">Proficient</span>
              </div>
              <div className="w-full bg-[rgba(0,0,0,0.3)] h-2 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full" 
                  style={{ 
                    width: "80%",
                    background: "linear-gradient(90deg, #00CED1 0%, #1E90FF 100%)"
                  }}
                ></div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between mb-2">
                <span className="flex items-center">
                  <div className="w-8 h-8 rounded-md bg-[rgba(0,206,209,0.2)] flex items-center justify-center mr-3">
                    <i className="fas fa-language text-[#00CED1]"></i>
                  </div>
                  <span>Hindi</span>
                </span>
                <span className="text-sm text-gray-400">Native</span>
              </div>
              <div className="w-full bg-[rgba(0,0,0,0.3)] h-2 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full" 
                  style={{ 
                    width: "100%",
                    background: "linear-gradient(90deg, #00CED1 0%, #1E90FF 100%)"
                  }}
                ></div>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
      
      <motion.div 
        className="p-6 rounded-xl mb-8"
        style={{
          background: "linear-gradient(135deg, rgba(30, 144, 255, 0.2) 0%, rgba(30, 30, 30, 0.8) 100%)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
          border: "1px solid rgba(255, 255, 255, 0.1)"
        }}
        variants={itemVariants}
      >
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <i className="fas fa-lightbulb text-[#1E90FF] mr-2"></i>
          <span>My Work Philosophy</span>
        </h3>
        <div className="space-y-4 text-gray-300">
          <p className="leading-relaxed">
            I believe in creating software that not only meets technical requirements but also delivers exceptional user experiences. 
            My approach combines technical excellence with creative problem-solving and attention to detail.
          </p>
          <p className="leading-relaxed">
            As a detail-oriented QA engineer and developer, I understand the importance of both implementing features and ensuring 
            they work correctly. I'm passionate about quality and believe that testing is an integral part of the development process.
          </p>
          <p className="leading-relaxed">
            I'm committed to continuous learning and staying updated with the latest technologies and industry best practices. 
            This helps me deliver innovative and sustainable solutions that address real-world challenges.
          </p>
        </div>
      </motion.div>
      
      <motion.div
        className="p-6 rounded-xl"
        style={{
          background: "linear-gradient(135deg, rgba(29, 185, 84, 0.2) 0%, rgba(30, 30, 30, 0.8) 100%)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
          border: "1px solid rgba(255, 255, 255, 0.1)"
        }}
        variants={itemVariants}
      >
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <i className="fas fa-handshake text-[#1DB954] mr-2"></i>
          <span>Let's Connect</span>
        </h3>
        <p className="mb-6 text-gray-300">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          Feel free to reach out through any of the platforms below.
        </p>
        <div className="flex space-x-4">
          <a 
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[rgba(29,185,84,0.2)] flex items-center justify-center hover:bg-[rgba(29,185,84,0.4)] transition-colors"
          >
            <i className="fab fa-linkedin-in text-[#1DB954]"></i>
          </a>
          <a 
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[rgba(29,185,84,0.2)] flex items-center justify-center hover:bg-[rgba(29,185,84,0.4)] transition-colors"
          >
            <i className="fab fa-github text-[#1DB954]"></i>
          </a>
          <a 
            href={`mailto:${PROFILE.email}`}
            className="w-12 h-12 rounded-full bg-[rgba(29,185,84,0.2)] flex items-center justify-center hover:bg-[rgba(29,185,84,0.4)] transition-colors"
          >
            <i className="fas fa-envelope text-[#1DB954]"></i>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutSection;
