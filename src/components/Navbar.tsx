import { Link } from 'react-scroll';

const Navbar = () => {
  const navItems = [
    { title: 'About', to: 'about' },
    { title: 'Skills', to: 'skills' },
    { title: 'Projects', to: 'projects' },
    { title: 'Resume', to: 'resume' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-gray-800">Trisha Reddy</span>
          </div>
          <div className="hidden md:flex flex-1 justify-end">
            <div className="flex items-center gap-12">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors duration-300 font-medium"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 