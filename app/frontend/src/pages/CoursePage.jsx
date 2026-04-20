
Action: file_editor create /app/frontend/src/pages/HomePage.jsx --file-text "import { Link } from \"react-router-dom\";
import { ArrowRight, Monitor, BookOpen, Users, Award } from \"lucide-react\";

const HERO_IMAGE = \"https://images.pexels.com/photos/5530478/pexels-photo-5530478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\";

const stats = [
  { label: \"Students Trained\", value: \"500+\", icon: Users },
  { label: \"Courses Offered\", value: \"3\", icon: BookOpen },
  { label: \"Years Experience\", value: \"5+\", icon: Award },
  { label: \"Success Rate\", value: \"95%\", icon: Monitor },
];

const courses = [\"RS-CIT\", \"Tally Prime\", \"Kid's Computer\"];

export default function HomePage() {
  return (
    <main data-testid=\"home-page\">
      {/* Hero Section */}
      <section className=\"relative min-h-screen flex items-center\" data-testid=\"hero-section\">
        <div className=\"absolute inset-0\">
          <img
            src={HERO_IMAGE}
            alt=\"Students in computer classroom\"
            className=\"w-full h-full object-cover\"
          />
          <div className=\"absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/85 via-[#0A0A0A]/60 to-transparent\" />
        </div>

        <div className=\"relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-0\">
          <div className=\"max-w-2xl\">
            <p className=\"text-xs uppercase tracking-[0.2em] text-[#FFC107] mb-6 font-medium animate-fade-in-up\">
              Our Skill Booster
            </p>
            <h1
              className=\"font-['Outfit'] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] animate-fade-in-up-delay-1\"
              data-testid=\"hero-heading\"
            >
              Welcome to
              <br />
              <span className=\"text-[#FFC107]\">Ai Academy</span>
            </h1>
            <p className=\"mt-6 text-base sm:text-lg text-white/70 leading-relaxed max-w-lg animate-fade-in-up-delay-2\">
              Empowering students with essential digital skills. From government-certified RS-CIT to
              professional Tally Prime and fun Kid's Computer courses — we shape futures.
            </p>
            <div className=\"mt-8 flex flex-wrap gap-4 animate-fade-in-up-delay-3\">
              <Link
                to=\"/courses\"
                data-testid=\"hero-explore-btn\"
                className=\"inline-flex items-center gap-2 bg-[#FFC107] text-[#0A0A0A] font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-[#EAB308] transition-colors duration-200\"
              >
                Explore Courses
                <ArrowRight size={16} />
              </Link>
              <Link
                to=\"/about\"
                data-testid=\"hero-about-btn\"
                className=\"inline-flex items-center gap-2 border border-white/30 text-white font-medium text-sm px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors duration-200\"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <section className=\"bg-[#0A0A0A] py-4 overflow-hidden\" data-testid=\"marquee-section\">
        <div className=\"animate-marquee whitespace-nowrap flex\">
          {[...courses, ...courses, ...courses, ...courses].map((course, i) => (
            <span
              key={i}
              className=\"mx-8 text-sm font-['Outfit'] font-medium text-white/80 uppercase tracking-[0.15em]\"
            >
              {course} <span className=\"text-[#FFC107] mx-4\">&bull;</span>
            </span>
          ))}
        </div>
      </section>

      {/* Overview / Why Ai Academy */}
      <section className=\"py-20 lg:py-28\" data-testid=\"overview-section\">
        <div className=\"max-w-7xl mx-auto px-6\">
          <div className=\"mb-16\">
            <p className=\"text-xs uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3\">
              Why Choose Us
            </p>
            <h2 className=\"font-['Outfit'] text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0A0A]\">
              Why <span className=\"text-[#FFC107]\">Ai Academy</span>?
            </h2>
          </div>

          {/* Stats Grid */}
          <div className=\"grid grid-cols-2 lg:grid-cols-4 gap-6\">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  data-testid={`stat-card-${i}`}
                  className=\"bg-white border border-black/[0.06] p-8 rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-300\"
                >
                  <div className=\"w-10 h-10 bg-[#FFC107]/10 rounded-lg flex items-center justify-center mb-4\">
                    <Icon size={20} className=\"text-[#FFC107]\" />
                  </div>
                  <p className=\"font-['Outfit'] text-3xl font-bold text-[#0A0A0A] tracking-tight\">
                    {stat.value}
                  </p>
                  <p className=\"text-sm text-[#0A0A0A]/50 mt-1\">{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* Features Grid */}
          <div className=\"mt-16 grid grid-cols-1 md:grid-cols-3 gap-6\">
            <div className=\"bg-[#0A0A0A] text-white p-10 rounded-lg md:col-span-2\" data-testid=\"feature-card-main\">
              <p className=\"text-xs uppercase tracking-[0.2em] text-[#FFC107] mb-3\">Our Mission</p>
              <h3 className=\"font-['Outfit'] text-2xl font-bold tracking-tight mb-4\">
                Bridge the Digital Divide
              </h3>
              <p className=\"text-white/60 text-sm leading-relaxed max-w-lg\">
                At Ai Academy, we believe every individual deserves access to quality computer education.
                Our courses are designed to be affordable, practical, and aligned with industry needs.
                We prepare our students not just with knowledge, but with real-world skills.
              </p>
            </div>
            <div className=\"bg-[#FFC107] p-10 rounded-lg flex flex-col justify-between\" data-testid=\"feature-card-cta\">
              <div>
                <p className=\"text-xs uppercase tracking-[0.2em] text-[#0A0A0A]/50 mb-3\">Get Started</p>
                <h3 className=\"font-['Outfit'] text-2xl font-bold tracking-tight text-[#0A0A0A]\">
                  Ready to Learn?
                </h3>
              </div>
              <Link
                to=\"/courses\"
                data-testid=\"overview-cta-btn\"
                className=\"mt-8 inline-flex items-center gap-2 bg-[#0A0A0A] text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#0A0A0A]/80 transition-colors duration-200 w-fit\"
              >
                View Courses
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
"
Observation: Create successful: /app/frontend/src/pages/HomePage.jsx