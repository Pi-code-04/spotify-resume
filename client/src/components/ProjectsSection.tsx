import { motion } from "framer-motion";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Music Streaming Platform",
      description: "A full-stack music streaming application with features like playlists, recommendations, and social sharing.",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWMlMjBzdHJlYW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      tags: ["React", "Node.js", "MongoDB", "Web Audio API"]
    },
    {
      title: "Audio Visualization Tool",
      description: "Interactive audio visualization tool that transforms music into dynamic visual representations.",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXVkaW8lMjB3YXZlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      tags: ["JavaScript", "Canvas API", "Web Audio API"]
    },
    {
      title: "Mobile Music App",
      description: "Cross-platform mobile application for music discovery and offline listening.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      tags: ["React Native", "Redux", "Firebase"]
    },
    {
      title: "Music Analytics Dashboard",
      description: "Data visualization dashboard for music streaming metrics and listener behavior analysis.",
      image: "https://images.unsplash.com/photo-1543966888-7c1dc482a810?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGF0YSUyMHZpc3VhbGl6YXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      tags: ["Vue.js", "D3.js", "GraphQL"]
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="bg-[#282828] bg-opacity-70 rounded-lg overflow-hidden transition hover:bg-opacity-80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-[#b3b3b3] mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-[#1DB954] bg-opacity-30 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <a href="#" className="text-[#1DB954] hover:underline">View Project →</a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
