import { motion } from "framer-motion";

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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="flex flex-col md:flex-row items-center md:items-end mb-8 pb-6 border-b border-opacity-10 border-white"
        variants={itemVariants}
      >
        <img 
          src="https://media.licdn.com/dms/image/v2/D4D03AQGNGXUK2plbEw/profile-displayphoto-shrink_800_800/B4DZTptDnLGkAc-/0/1739087691373?e=1751500800&v=beta&t=xuTbV5tFU3DIca_rwBRRdhHVR5M8eCw1CsyuiXrh0cM" 
          alt="Piyush Sinha" 
          className="w-48 h-48 rounded-full object-cover md:mr-6 mb-6 md:mb-0 shadow-xl"
        />
        <div className="text-center md:text-left">
          <div className="uppercase text-xs font-bold mb-2">Profile</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2 leading-tight">Piyush Sinha</h1>
          <div className="flex flex-wrap justify-center md:justify-start items-center text-[#b3b3b3] text-sm mb-4">
            <span className="mr-6 flex items-center"><i className="fas fa-map-marker-alt mr-2"></i> New Delhi, India</span>
            <span className="mr-6 flex items-center"><i className="fas fa-envelope mr-2"></i> piyush.sinha@example.com</span>
            <span className="flex items-center"><i className="fas fa-phone mr-2"></i> +91 98765-43210</span>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start mt-4">
            <motion.button 
              className="spotify-button mr-4"
              onClick={playIntro}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              PLAY MY INTRO
            </motion.button>
            <motion.button 
              className="spotify-button-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              DOWNLOAD CV
            </motion.button>
          </div>
        </div>
      </motion.div>
      
      {/* Top Skills */}
      <motion.div className="mb-10" variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4">Top Skills</h2>
        <div className="space-y-2">
          <motion.div 
            className="track-item"
            whileHover={{ scale: 1.01 }}
          >
            <div className="w-6 text-center text-[#b3b3b3] mr-4">1</div>
            <div className="flex-1">
              <div className="font-semibold">Full Stack Development</div>
              <div className="text-sm text-[#b3b3b3]">React, Node.js, Express, MongoDB</div>
            </div>
            <div className="text-[#b3b3b3] flex items-center">
              <div className="flex space-x-1 mr-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star text-[#1DB954]"></i>
                ))}
              </div>
              <span>5+ years</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="track-item"
            whileHover={{ scale: 1.01 }}
          >
            <div className="w-6 text-center text-[#b3b3b3] mr-4">2</div>
            <div className="flex-1">
              <div className="font-semibold">UI/UX Design</div>
              <div className="text-sm text-[#b3b3b3]">Figma, Adobe XD, Sketch</div>
            </div>
            <div className="text-[#b3b3b3] flex items-center">
              <div className="flex space-x-1 mr-4">
                {[...Array(4)].map((_, i) => (
                  <i key={i} className="fas fa-star text-[#1DB954]"></i>
                ))}
                <i className="fas fa-star-half-alt text-[#1DB954]"></i>
              </div>
              <span>4 years</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="track-item"
            whileHover={{ scale: 1.01 }}
          >
            <div className="w-6 text-center text-[#b3b3b3] mr-4">3</div>
            <div className="flex-1">
              <div className="font-semibold">Mobile Development</div>
              <div className="text-sm text-[#b3b3b3]">React Native, Flutter</div>
            </div>
            <div className="text-[#b3b3b3] flex items-center">
              <div className="flex space-x-1 mr-4">
                {[...Array(4)].map((_, i) => (
                  <i key={i} className="fas fa-star text-[#1DB954]"></i>
                ))}
                <i className="far fa-star text-[#1DB954]"></i>
              </div>
              <span>3+ years</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Featured Projects */}
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Music Streaming App",
              desc: "A Spotify-inspired music streaming application with real-time analytics",
              img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            },
            {
              title: "E-Commerce Platform",
              desc: "Full-stack e-commerce solution with payment integration",
              img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            },
            {
              title: "Data Visualization Tool",
              desc: "Interactive dashboard for complex data analysis",
              img: "https://images.unsplash.com/photo-1543966888-7c1dc482a810?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGF0YSUyMHZpc3VhbGl6YXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            },
            {
              title: "Audio Processing API",
              desc: "Backend service for audio processing and analysis",
              img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXVkaW8lMjB3YXZlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            }
          ].map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="aspect-square rounded overflow-hidden mb-4 shadow-lg">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold truncate">{project.title}</h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HomeSection;
