import { motion } from "framer-motion";

const AboutSection = () => {
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
        className="bg-[#282828] bg-opacity-70 rounded-lg p-6 mb-8"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <div className="space-y-4">
          <p>Full Stack Developer with a passion for creating seamless, user-centric applications that solve real-world problems. I specialize in modern JavaScript frameworks with a focus on performance optimization and responsive design.</p>
          <p>With a background in computer science and 5+ years of industry experience, I've developed a keen eye for detail and a methodical approach to debugging complex issues. I thrive in collaborative environments and enjoy mentoring junior developers.</p>
          <p>When I'm not coding, you'll find me exploring new music genres, contributing to open-source projects, or experimenting with audio visualization algorithms.</p>
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div 
          className="bg-[#282828] bg-opacity-70 rounded-lg p-6"
          variants={itemVariants}
        >
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <i className="fas fa-heart text-[#1DB954] mr-2"></i> Interests
          </h3>
          <ul className="list-disc list-inside space-y-2 text-[#b3b3b3]">
            <li>Music Production & Audio Engineering</li>
            <li>Data Visualization & Information Design</li>
            <li>Open Source Development</li>
            <li>Machine Learning for Audio Analysis</li>
            <li>UX Research & User-Centered Design</li>
          </ul>
        </motion.div>
        
        <motion.div 
          className="bg-[#282828] bg-opacity-70 rounded-lg p-6"
          variants={itemVariants}
        >
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <i className="fas fa-bullseye text-[#1DB954] mr-2"></i> Goals
          </h3>
          <ul className="list-disc list-inside space-y-2 text-[#b3b3b3]">
            <li>Lead development of innovative music technology solutions</li>
            <li>Create accessible audio applications that connect people</li>
            <li>Contribute to the evolution of streaming technologies</li>
            <li>Mentor the next generation of audio-focused developers</li>
            <li>Bridge the gap between technical implementation and creative expression</li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
