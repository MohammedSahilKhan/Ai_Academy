
Action: file_editor create /app/frontend/src/components/Header.jsx --file-text "import { useState } from \"react\";
import { Link, useLocation } from \"react-router-dom\";
import { Menu, X } from \"lucide-react\";

const LOGO_URL = \"https://customer-assets.emergentagent.com/job_0ec852a8-8344-4857-ace3-8ad47c3cba68/artifacts/fmzik3pa_Ai%20academy%20wallpaper1.png\";

const navLinks = [
  { path: \"/\", label: \"Home\" },
  { path: \"/courses\", label: \"Courses\" },
  { path: \"/vlog\", label: \"Gallery\" },
  { path: \"/about\", label: \"About\" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header
      data-testid=\"main-header\"
      className=\"fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/70 border-b border-black/5\"
    >
      <div className=\"max-w-7xl mx-auto px-6 py-3 flex items-center justify-between\">
        {/* Logo */}
        <Link to=\"/\" data-testid=\"header-logo-link\" className=\"flex items-center gap-3\">
          <img
            src={LOGO_URL}
            alt=\"Ai Academy\"
            className=\"h-10 w-10 object-contain rounded\"
          />
          <span className=\"font-['Outfit'] font-bold text-lg tracking-tight text-[#0A0A0A]\">
            Ai Academy
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className=\"hidden md:flex items-center gap-8\" data-testid=\"desktop-nav\">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              data-testid={`nav-link-${link.label.toLowerCase()}`}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                location.pathname === link.path
                  ? \"text-[#0A0A0A] border-b-2 border-[#FFC107] pb-0.5\"
                  : \"text-[#0A0A0A]/60 hover:text-[#0A0A0A]\"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          to=\"/courses\"
          data-testid=\"header-cta-btn\"
          className=\"hidden md:inline-flex bg-[#FFC107] text-[#0A0A0A] font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-[#EAB308] transition-colors duration-200\"
        >
          Explore Courses
        </Link>

        {/* Mobile Toggle */}
        <button
          data-testid=\"mobile-menu-toggle\"
          className=\"md:hidden p-2\"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav
          data-testid=\"mobile-nav\"
          className=\"md:hidden bg-white border-t border-black/5 px-6 py-4 space-y-3\"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className={`block text-base font-medium py-2 ${
                location.pathname === link.path
                  ? \"text-[#0A0A0A]\"
                  : \"text-[#0A0A0A]/60\"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to=\"/courses\"
            onClick={() => setMobileOpen(false)}
            data-testid=\"mobile-cta-btn\"
            className=\"block bg-[#FFC107] text-[#0A0A0A] font-semibold text-center text-sm px-5 py-2.5 rounded-full hover:bg-[#EAB308] transition-colors duration-200\"
          >
            Explore Courses
          </Link>
        </nav>
      )}
    </header>
  );
}
"
Observation: Create successful: /app/frontend/src/components/Header.jsx