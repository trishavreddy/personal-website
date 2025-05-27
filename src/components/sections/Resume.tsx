import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Resume</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Download my resume to learn more about my experience, skills, and
            qualifications.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="/documents/trisha-reddy-resume.pdf"
              download
              className="inline-flex items-center px-8 py-3 border border-transparent
                       text-base font-medium rounded-md text-white bg-blue-600
                       hover:bg-blue-700 transition-colors duration-300"
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume; 