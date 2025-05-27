import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Dev-Health Tracker',
      description: 'A web app integrating GitHub API and Fitbit API to track coding hours and fitness data, featuring interactive dashboards built with React, TypeScript, and Chart.js.',
      tech: 'React TypeScript Node.js Express Chart.js',
      date: 'Dec 2024',
    },
    {
      title: 'AI Attendance Helper',
      description: 'Facial recognition attendance system using face embeddings with KNN classification, featuring MongoDB Atlas integration and RESTful API implementation.',
      tech: 'Python OpenCV MongoDB REST API Machine Learning',
      date: 'Jun 2024',
    },
    {
      title: 'Evolutionary Autonomous Critters',
      description: 'C++ simulation game with autonomous critter species using vector dynamics, featuring RayLib graphics for real-time animations and evolutionary algorithms.',
      tech: 'C++ RayLib Vector Dynamics AI Simulation',
      date: 'Oct 2023',
    },
    {
      title: '3D Fruit Ninja',
      description: 'VR game using Unity\'s XR Interaction Toolkit with physics-based interactions, real-time mesh deformation, and particle effects for fruit slicing mechanics.',
      tech: 'Unity C# VR Physics Game Dev',
      date: 'Feb 2023',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">
            Projects
          </h2>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-500 mb-4">
                  {project.date}
                </p>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  {project.description}
                </p>
                <p className="text-gray-500">
                  {project.tech}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 