import Navbar from './Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Resume from './sections/Resume';

const Layout = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Resume />
    </main>
  );
};

export default Layout; 