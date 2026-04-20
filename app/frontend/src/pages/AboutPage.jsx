
Action: file_editor create /app/frontend/src/pages/AboutPage.jsx --file-text "import { Target, Eye, Heart, GraduationCap } from \"lucide-react\";

const LOGO_URL = \"https://customer-assets.emergentagent.com/job_0ec852a8-8344-4857-ace3-8ad47c3cba68/artifacts/fmzik3pa_Ai%20academy%20wallpaper1.png\";
const FOUNDER_IMAGE = \"https://images.unsplash.com/photo-1746513399803-e988cc54e812?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwZWR1Y2F0b3IlMjBzdGFuZGluZ3xlbnwwfHx8fDE3NzY2MTE5NTF8MA&ixlib=rb-4.1.0&q=85\";

const values = [
  {
    icon: Target,
    title: \"Mission\",
    description:
      \"To empower students and professionals with essential digital skills through quality education and hands-on training.\",
  },
  {
    icon: Eye,
    title: \"Vision\",
    description:
      \"To become the leading computer education institute, bridging the digital divide and creating skilled professionals for the future.\",
  },
  {
    icon: Heart,
    title: \"Values\",
    description:
      \"Quality education, affordable access, practical learning, and student-first approach in everything we do.\",
  },
  {
    icon: GraduationCap,
    title: \"Approach\",
    description:
      \"Hands-on practical training combined with theoretical knowledge, ensuring students are industry-ready from day one.\",
  },
];

export default function AboutPage() {
  return (
    <main data-testid=\"about-page\" className=\"pt-20\">
      {/* Header */}
      <section className=\"py-16 lg:py-20 bg-[#F4F4F5]\">
        <div className=\"max-w-7xl mx-auto px-6\">
          <p className=\"text-xs uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3\">
            Our Story
          </p>
          <h1
            className=\"font-['Outfit'] text-4xl sm:text-5xl font-bold tracking-tight text-[#0A0A0A]\"
            data-testid=\"about-heading\"
          >
            About <span className=\"text-[#FFC107]\">Ai Academy</span>
          </h1>
          <p className=\"mt-4 text-base text-[#0A0A0A]/60 max-w-lg\">
            Learn about our journey, mission, and the people behind Ai Academy.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className=\"py-16 lg:py-24\" data-testid=\"founder-section\">
        <div className=\"max-w-7xl mx-auto px-6\">
          <div className=\"grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center\">
            {/* Image */}
            <div className=\"relative\">
              <div className=\"overflow-hidden rounded-lg aspect-[3/4] max-w-md\">
                <img
                  src={FOUNDER_IMAGE}
                  alt=\"Founder of Ai Academy\"
                  className=\"w-full h-full object-cover\"
                />
              </div>
              {/* Decorative accent */}
              <div className=\"absolute -bottom-4 -right-4 w-24 h-24 bg-[#FFC107] rounded-lg -z-10 hidden lg:block\" />
            </div>

            {/* Content */}
            <div>
              <p className=\"text-xs uppercase tracking-[0.2em] text-[#FFC107] mb-3 font-medium\">
                Founder & Director
              </p>
              <h2 className=\"font-['Outfit'] text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0A0A] mb-6\">
                Passionate About Education
              </h2>
              <div className=\"space-y-4 text-sm text-[#0A0A0A]/60 leading-relaxed\">
                <p>
                  With over 5 years of experience in computer education, the founder of Ai Academy
                  started this institute with a simple yet powerful goal — to make quality digital
                  education accessible to everyone.
                </p>
                <p>
                  Having witnessed the growing need for computer literacy in today's world, Ai Academy
                  was established to bridge the gap between traditional education and the digital skills
                  demanded by the modern workplace.
                </p>
                <p>
                  Our academy has since trained over 500 students across RS-CIT, Tally Prime, and
                  Kid's Computer courses, building a community of digitally empowered individuals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className=\"py-16 lg:py-24 bg-[#F4F4F5]\" data-testid=\"values-section\">
        <div className=\"max-w-7xl mx-auto px-6\">
          <div className=\"mb-12\">
            <p className=\"text-xs uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3\">
              What Drives Us
            </p>
            <h2 className=\"font-['Outfit'] text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0A0A]\">
              Our <span className=\"text-[#FFC107]\">Core Values</span>
            </h2>
          </div>

          <div className=\"grid grid-cols-1 sm:grid-cols-2 gap-6\">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  data-testid={`value-card-${i}`}
                  className=\"bg-white border border-black/[0.06] p-8 rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-300\"
                >
                  <div className=\"w-10 h-10 bg-[#FFC107]/10 rounded-lg flex items-center justify-center mb-4\">
                    <Icon size={20} className=\"text-[#FFC107]\" />
                  </div>
                  <h3 className=\"font-['Outfit'] text-lg font-semibold text-[#0A0A0A] mb-2\">
                    {v.title}
                  </h3>
                  <p className=\"text-sm text-[#0A0A0A]/60 leading-relaxed\">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Logo Showcase */}
      <section className=\"py-20 lg:py-28\" data-testid=\"logo-showcase\">
        <div className=\"max-w-7xl mx-auto px-6 text-center\">
          <img
            src={LOGO_URL}
            alt=\"Ai Academy Logo\"
            className=\"w-40 h-40 object-contain mx-auto mb-8\"
          />
          <h2 className=\"font-['Outfit'] text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0A0A]\">
            Ai Academy
          </h2>
          <p className=\"mt-2 text-lg text-[#0A0A0A]/40 font-['Outfit']\">Our Skill Booster</p>
        </div>
      </section>
    </main>
  );
}
"
Observation: Create successful: /app/frontend/src/pages/AboutPage.jsx