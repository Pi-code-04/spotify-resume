import { motion } from "framer-motion";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      period: "2021 - Present",
      details: [
        "Led the frontend development team in creating a scalable music streaming platform serving over 100,000 users.",
        "Implemented real-time audio visualization features using Web Audio API and Canvas.",
        "Optimized application performance, reducing load time by 40% and improving user engagement metrics.",
        "Mentored junior developers and established code review processes that improved code quality by 35%."
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Innovative Systems Inc.",
      period: "2018 - 2021",
      details: [
        "Developed and maintained multiple web applications using React, Node.js, and MongoDB.",
        "Created a custom audio processing API that handled over 5,000 requests daily.",
        "Implemented CI/CD pipelines that reduced deployment time by 60%.",
        "Collaborated with UX designers to create intuitive interfaces for complex audio manipulation tools."
      ]
    },
    {
      title: "Junior Web Developer",
      company: "CreativeTech Studios",
      period: "2016 - 2018",
      details: [
        "Built responsive websites and web applications for clients in the entertainment industry.",
        "Assisted in developing a music player component that improved user session duration by 25%.",
        "Participated in weekly code reviews and contributed to the company's internal component library."
      ]
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            className="bg-[#282828] bg-opacity-70 rounded-lg p-6 transition hover:bg-opacity-80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <div className="text-[#1DB954] font-semibold">{exp.period}</div>
            </div>
            <div className="mb-4 text-lg">{exp.company}</div>
            <div className="space-y-2 text-[#b3b3b3]">
              {exp.details.map((detail, i) => (
                <p key={i}>{detail}</p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
