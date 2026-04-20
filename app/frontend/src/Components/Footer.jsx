
Action: file_editor create /app/frontend/src/components/Footer.jsx --file-text "import { Link } from \"react-router-dom\";
import { Phone, Mail, MapPin } from \"lucide-react\";

const LOGO_URL = \"https://customer-assets.emergentagent.com/job_0ec852a8-8344-4857-ace3-8ad47c3cba68/artifacts/fmzik3pa_Ai%20academy%20wallpaper1.png\";

export default function Footer() {
  return (
    <footer data-testid=\"main-footer\" className=\"bg-[#0A0A0A] text-white py-20\">
      <div className=\"max-w-7xl mx-auto px-6\">
        {/* Large CTA */}
        <div className=\"mb-16\">
          <p className=\"text-xs uppercase tracking-[0.2em] text-white/40 mb-4 font-['DM_Sans']\">
            Ready to start?
          </p>
          <h2 className=\"font-['Outfit'] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white\">
            Let's <span className=\"text-[#FFC107]\">Boost</span> Your Skills
          </h2>
        </div>

        <div className=\"grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12\">
          {/* Brand */}
          <div>
            <div className=\"flex items-center gap-3 mb-4\">
              <img src={LOGO_URL} alt=\"Ai Academy\" className=\"h-10 w-10 object-contain rounded\" />
              <span className=\"font-['Outfit'] font-bold text-lg text-white\">Ai Academy</span>
            </div>
            <p className=\"text-sm text-white/50 leading-relaxed max-w-xs\">
              Our Skill Booster — Empowering students with essential digital skills for a brighter future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className=\"font-['Outfit'] font-semibold text-sm uppercase tracking-[0.15em] text-white/40 mb-4\">
              Quick Links
            </h3>
            <div className=\"space-y-3\">
              {[
                { path: \"/\", label: \"Home\" },
                { path: \"/courses\", label: \"Courses\" },
                { path: \"/vlog\", label: \"Gallery\" },
                { path: \"/about\", label: \"About\" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  data-testid={`footer-link-${link.label.toLowerCase()}`}
                  className=\"block text-sm text-white/60 hover:text-[#FFC107] transition-colors duration-200\"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className=\"font-['Outfit'] font-semibold text-sm uppercase tracking-[0.15em] text-white/40 mb-4\">
              Get in Touch
            </h3>
            <div className=\"space-y-3\">
              <a
                href=\"tel:+919999999999\"
                data-testid=\"footer-phone\"
                className=\"flex items-center gap-3 text-sm text-white/60 hover:text-[#FFC107] transition-colors duration-200\"
              >
                <Phone size={16} />
                <span>+91 99999 99999</span>
              </a>
              <a
                href=\"mailto:info@aiacademy.com\"
                data-testid=\"footer-email\"
                className=\"flex items-center gap-3 text-sm text-white/60 hover:text-[#FFC107] transition-colors duration-200\"
              >
                <Mail size={16} />
                <span>info@aiacademy.com</span>
              </a>
              <div className=\"flex items-start gap-3 text-sm text-white/60\">
                <MapPin size={16} className=\"mt-0.5 flex-shrink-0\" />
                <span>Ai Academy, Rajasthan, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className=\"mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4\">
          <p className=\"text-xs text-white/30\">
            &copy; {new Date().getFullYear()} Ai Academy. All rights reserved.
          </p>
          <p className=\"text-xs text-white/30\">Our Skill Booster</p>
        </div>
      </div>
    </footer>
  );
}
"
Observation: Create successful: /app/frontend/src/components/Footer.jsx