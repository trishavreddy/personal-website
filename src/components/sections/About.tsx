import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { category: 'Programming',
      items: ['Java', 'Python', 'C++', 'TypeScript', 'Kotlin']
    },
    { category: 'Technologies',
      items: ['React', 'Node.js', 'MongoDB', 'MySQL', 'Unity']
    },
    { category: 'AI/ML',
      items: ['NumPy', 'Pandas', 'OpenCV', 'KNN', 'Embeddings']
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* About Me section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
          <div className="prose prose-lg text-gray-600">
            <p>
              Hey there! I'm a Computer Science student at the University of Pennsylvania, 
              where I'm also pursuing a minor in Mathematics. I'm passionate about using technology 
              to solve real-world problems and create meaningful impact.
            </p>
            
            <p>
              After taking Introduction to Artificial Intelligence with Professor Chris Callison-Burch, 
              I discovered my love for AI and its applications. Now, I'm excited to be conducting research 
              under his supervision, exploring cutting-edge AI technologies.
            </p>

            <p>
              Outside of academics, I love staying active and you can find me playing basketball 
              with friends or going for runs around campus. I also love being outdoors and would love to explore 
              Philly's diverse food scene this summer.
            </p>

            <p>
              I'm always eager to learn and collaborate on interesting projects. Whether it's AI, 
              web development, or anything tech-related, I'm up for the challenge!
            </p>
          </div>
        </div>

        {/* Skills section */}
        <div id="skills">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills & Technologies</h2>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                style={{
                  flex: 1,
                  border: '2px solid #9CA3AF',
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                  transition: 'transform 0.5s ease-in-out',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <h3 className="text-xl font-bold mb-4 text-center">{skillGroup.category}</h3>
                <div className="space-y-3">
                  {skillGroup.items.map((skill) => (
                    <div
                      key={skill}
                      className="bg-gray-50 p-3 rounded-lg text-center"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 