import { motion } from "framer-motion";

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Delhi University",
      period: "2014 - 2016",
      details: [
        "Specialized in Human-Computer Interaction and Audio Processing Algorithms",
        "Thesis: \"Improving User Experience in Audio Streaming Applications Through Predictive Buffering\"",
        "GPA: 3.9/4.0"
      ]
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Indian Institute of Technology",
      period: "2010 - 2014",
      details: [
        "Core coursework in Data Structures, Algorithms, Database Systems, and Web Development",
        "Senior Project: Developed a web-based collaborative music composition tool",
        "Member of the Audio Engineering Society student chapter",
        "GPA: 3.8/4.0"
      ]
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Education</h2>
      
      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div 
            key={index}
            className="bg-[#282828] bg-opacity-70 rounded-lg p-6 transition hover:bg-opacity-80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-xl font-bold">{edu.degree}</h3>
              <div className="text-[#1DB954] font-semibold">{edu.period}</div>
            </div>
            <div className="mb-4 text-lg">{edu.institution}</div>
            <div className="space-y-2 text-[#b3b3b3]">
              {edu.details.map((detail, i) => (
                <p key={i}>{detail}</p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
