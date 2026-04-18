import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const navLink = (path) =>
    location.pathname === path ? "text-purple-600 font-semibold" : "text-gray-600";

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
          <span className="font-bold text-purple-600">HERO.IO</span>
        </Link>

        {/* Nav */}
        <nav className="flex gap-6">
          <Link to="/" className={navLink("/")}>Home</Link>
          <Link to="/apps" className={navLink("/apps")}>Apps</Link>
          <Link to="/installation" className={navLink("/installation")}>Installation</Link>
        </nav>

        {/* Button */}
        <a
          href="https://github.com/ReyadRafi"
          target="_blank"
          className="bg-purple-600 text-white px-4 py-2 rounded-md"
        >
          Contribute
        </a>
      </div>
    </header>
  );
}