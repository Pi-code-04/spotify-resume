import { motion } from "framer-motion";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Advanced React Development",
      provider: "Frontend Masters",
      year: "2022",
      description: "Comprehensive course on advanced React patterns, state management, and performance optimization techniques."
    },
    {
      title: "Audio Processing with JavaScript",
      provider: "Web Audio Conference",
      year: "2021",
      description: "Specialized certification in Web Audio API, audio processing algorithms, and real-time visualization techniques."
    },
    {
      title: "Full Stack Development",
      provider: "MongoDB University",
      year: "2020",
      description: "Comprehensive training in building scalable applications with the MERN stack (MongoDB, Express, React, Node.js)."
    },
    {
      title: "UX Design for Developers",
      provider: "Interaction Design Foundation",
      year: "2019",
      description: "Course focused on user experience principles, design thinking, and creating intuitive interfaces for complex applications."
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Certifications</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <motion.div 
            key={index}
            className="bg-[#282828] bg-opacity-70 rounded-lg p-6 transition hover:bg-opacity-80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold">{cert.title}</h3>
                <div className="text-[#b3b3b3]">{cert.provider}</div>
              </div>
              <div className="text-[#1DB954]">{cert.year}</div>
            </div>
            <p className="text-[#b3b3b3] mb-4">{cert.description}</p>
            <a href="#" className="text-[#1DB954] hover:underline">View Certificate →</a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsSection;
