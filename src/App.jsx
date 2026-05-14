import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Database,
  ExternalLink,
  HeartPulse,
  Landmark,
  Mail,
  MonitorCog,
  PackageSearch,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Terminal,
  WalletCards,
  Zap,
} from "lucide-react";

const profile = {
  name: "Ankit Singh Bisht",
  role: "Passionate About Quality | Automation & Release Quality | Delivering Quality at Scale",
  location: "Sinamangal, Kathmandu - 9",
  email: "ankitsinghbisht@hotmail.com",
  phone: "(+977) 9813130170",
  linkedin: "https://www.linkedin.com/in/ankitsbisht/",
  headline:
    "Helping teams build calmer release habits through quality ownership, clear process, and practical automation.",
  summary:
    "Senior QA Engineer and QA Lead with 10+ years of experience across FoodTech, FinTech, SaaS, e-commerce, blockchain, healthcare, data platforms, claims management, digital marketing technology, and risk intelligence products. I work best where people, process, and product risk meet: helping teams clarify ownership, improve quality routines, strengthen automation, and make release decisions with better evidence.",
};

const valueProps = [
  "Quality ownership across teams and workflows",
  "Process clarity that makes delivery less reactive",
  "Automation that supports people instead of replacing judgment",
];

const skillGroups = [
  {
    title: "Test Strategy",
    text: "Planning practical coverage for complex releases without turning QA into paperwork.",
    items: ["Functional", "Regression", "Performance", "Security", "Usability"],
  },
  {
    title: "Automation",
    text: "Building maintainable checks that reduce repeat effort and protect critical flows.",
    items: ["Selenium", "Playwright", "Python", "Java", "Postman"],
  },
  {
    title: "Delivery Tools",
    text: "Keeping test execution, defects, and CI handoffs visible across product teams.",
    items: ["Jira", "Bugzilla", "ClickUp", "Jenkins", "GitLab", "Bitbucket"],
  },
  {
    title: "AI-assisted QA",
    text: "Using AI carefully for test design, automation planning, defect analysis, and review support.",
    items: ["Claude Code", "OpenAI Codex", "Agentic Workflows", "Self-Healing Tests"],
  },
];

const domains = [
  {
    icon: ShoppingCart,
    name: "FoodTech & Retail POS",
    text: "Transaction-heavy systems where small mistakes affect orders, payments, refunds, and daily operations.",
    focus: ["POS flows", "Payments", "Refunds", "Reconciliation"],
  },
  {
    icon: WalletCards,
    name: "FinTech & Lending",
    text: "Financial workflows that need careful validation across applications, backend rules, and data handling.",
    focus: ["Application journeys", "Backend rules", "Financial data", "Regression"],
  },
  {
    icon: Cloud,
    name: "SaaS, Cloud & Blockchain",
    text: "Platforms where reliability depends on admin workflows, storage, compute behavior, and system-level checks.",
    focus: ["Admin flows", "Storage", "Compute", "Reliability"],
  },
  {
    icon: HeartPulse,
    name: "Healthcare & Claims",
    text: "Role-driven workflows where process accuracy, data handling, and case visibility matter.",
    focus: ["Clinical flows", "Claims intake", "User roles", "Case management"],
  },
  {
    icon: PackageSearch,
    name: "E-commerce & Data Platforms",
    text: "Catalogue, campaign, and migration-heavy platforms where data accuracy drives business confidence.",
    focus: ["Catalogue data", "ETL checks", "Campaign QA", "Reporting"],
  },
  {
    icon: Landmark,
    name: "Risk Intelligence",
    text: "Content and dashboard products where search, filtering, reporting, and subscriptions need dependable behavior.",
    focus: ["Dashboards", "Search", "Reports", "Content delivery"],
  },
];

const highlights = [
  {
    icon: ShieldCheck,
    title: "Release Confidence",
    text: "Supported 15-20 release cycles with regression testing, release validation, checklists, notes, sign-off communication, and post-release verification.",
  },
  {
    icon: Bot,
    title: "Product QA Depth",
    text: "Led QA for Izy mAIFood across CMS, POS User Flow, POS Chef Flow, annotation workflows, computer vision recognition, payments, refunds, billing, and reporting.",
  },
  {
    icon: Database,
    title: "Data and API Assurance",
    text: "Validated transaction records, order data, payment states, refunds, reconciliation, tenant mapping, ETL pipelines, and source-to-target migration accuracy.",
  },
  {
    icon: BarChart3,
    title: "Team and Process Leadership",
    text: "Defined QA processes, quality checkpoints, KPIs, reporting mechanisms, team guidance, defect tracking, and cross-functional release coordination.",
  },
];

const projects = [
  {
    title: "Izy mAIFood",
    domain: "AI FoodTech POS",
    summary: "AI-powered POS platform with CMS, computer vision recognition, payments, refunds, billing, and reporting.",
    focus: ["POS workflows", "AI recognition", "Payments", "API checks"],
  },
  {
    title: "Iagon",
    domain: "Blockchain / Cloud",
    summary: "Decentralized cloud storage and compute platform built around blockchain-based resource sharing.",
    focus: ["Cloud storage", "Compute flows", "QA checkpoints", "Team guidance"],
  },
  {
    title: "CrediLinq",
    domain: "Embedded Finance",
    summary: "Digital lending platform covering business financing journeys, backend validation, and financial data handling.",
    focus: ["Application flows", "Backend rules", "Financial data", "Regression"],
  },
  {
    title: "Syntro Health",
    domain: "Healthcare / Clinical Trials",
    summary: "Healthcare and clinical trial platform covering clinical workflows, user roles, and process validation.",
    focus: ["Clinical flows", "User roles", "Data handling", "Release readiness"],
  },
  {
    title: "Stratfor Worldview / RANE",
    domain: "Risk Intelligence SaaS",
    summary: "Geopolitical risk intelligence platform covering dashboards, content delivery, reporting, search, and filtering.",
    focus: ["Dashboards", "Reports", "Search", "Integration QA"],
  },
  {
    title: "PF Concept",
    domain: "E-commerce Data / ETL",
    summary: "Promotional products e-commerce platform with catalogue data, ETL migration validation, and reporting.",
    focus: ["ETL testing", "Data integrity", "Reconciliation", "SSIS"],
  },
  {
    title: "Gallagher Bassett GBCARE",
    domain: "Claims Management",
    summary: "Claims management and healthcare support platform covering claim intake, referrals, and case management.",
    focus: ["Claims workflows", "Healthcare support", "Selenium", "Automation framework"],
  },
  {
    title: "GrowByData",
    domain: "E-commerce Marketing Intelligence",
    summary: "Marketing and pricing intelligence platform covering campaigns, A/B testing, conversion insights, and reporting.",
    focus: ["Campaign QA", "A/B testing", "Salesforce", "Performance checks"],
  },
];

const experience = [
  {
    company: "Resimator OY | Izy mAIFood",
    title: "Senior Quality Assurance Engineer",
    period: "Jun 2025 - Present",
    summary: "Owns QA for an AI-driven FoodTech POS and computer vision platform.",
    focus: ["CMS & POS flows", "Payments & refunds", "API automation", "SQL validation"],
  },
  {
    company: "NGIT Solutions Pvt Ltd",
    title: "Quality Assurance Manager",
    period: "Jul 2024 - Sept 2024",
    summary: "Led quality control for Iagon, a decentralized cloud storage and compute platform.",
    focus: ["QA process", "Quality checkpoints", "KPI reporting", "Team mentoring"],
  },
  {
    company: "Aerion Technologies",
    title: "Quality Assurance Team Lead",
    period: "Aug 2021 - Aug 2022",
    summary: "Led QA across multi-domain SaaS and product platforms.",
    focus: ["Retail POS", "Embedded finance", "Healthcare", "Release validation"],
  },
  {
    company: "Tekvortex | Stratfor Worldview / RANE",
    title: "Senior Quality Assurance Engineer",
    period: "May 2020 - Jun 2021",
    summary: "Supported QA for a geopolitical risk intelligence SaaS platform during integration into RANE.",
    focus: ["Dashboards", "Search & filters", "Reports", "Release readiness"],
  },
  {
    company: "JAVRA Software B.V | PF Concept",
    title: "Associate Senior Quality Control Engineer",
    period: "Dec 2018 - Mar 2020",
    summary: "Performed e-commerce data and ETL validation for a large catalogue platform.",
    focus: ["T-SQL & MySQL", "SSIS", "Data reconciliation", "Deployment testing"],
  },
  {
    company: "Spiralogics International Pvt Ltd",
    title: "Automation Engineer",
    period: "Aug 2018 - Dec 2018",
    summary: "Designed a Selenium hybrid automation framework in Java for enterprise QA adoption.",
    focus: ["Selenium", "Java framework", "Reusable utilities", "Regression automation"],
  },
  {
    company: "GrowByData Services Pvt Ltd",
    title: "Quality Assurance Engineer",
    period: "Nov 2016 - May 2018",
    summary: "Tested an e-commerce marketing intelligence platform across campaigns, reporting, and migration work.",
    focus: ["Pricing intelligence", "A/B testing", "Performance checks", "QA reporting"],
  },
  {
    company: "Nexus IT Pvt Ltd",
    title: "Web / Software Developer",
    period: "Aug 2015 - Oct 2016",
    summary: "Built client websites, portals, e-commerce applications, and pharmacy management systems.",
    focus: ["Web apps", "E-commerce", "Database schemas", "API integrations"],
  },
  {
    company: "P & G Technology Pvt Ltd",
    title: "Software QA Engineer",
    period: "Jul 2014 - Jul 2015",
    summary: "Tested web-based data digitization and member management portals.",
    focus: ["Test cases", "Data entry flows", "Regression", "Smoke testing"],
  },
];

const education = [
  {
    degree: "Executive MBA",
    school: "Ace Institute of Management, Kathmandu, Nepal",
    year: "2023",
  },
  {
    degree: "B.E / B.Tech Computer Science Engineering",
    school: "Manipal Institute of Technology, Manipal, Karnataka, India",
    year: "2014",
  },
];

const services = [
  "QA strategy and process definition",
  "Functional, regression, API, and end-to-end testing",
  "Selenium, Playwright, Python, Java, and API automation",
  "SQL, ETL, database, transaction, and reconciliation validation",
  "Release validation, sign-off, post-release verification, and RCA",
  "QA leadership, mentoring, reporting, and stakeholder communication",
];

const navLinks = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Domains", "#domains"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Education", "#education"],
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const storySlides = [
  {
    eyebrow: "Profile",
    title: profile.name,
    text: profile.headline,
    meta: profile.role,
    tone: "light",
  },
  {
    eyebrow: "Release Signal",
    title: "Quality leadership that ships calmly.",
    text: "A quick view of the release, product, data, and process strengths I bring into teams.",
    items: highlights.map((item) => item.title),
    tone: "dark",
  },
  {
    eyebrow: "Projects",
    title: "Complex products, tested for the risks that matter.",
    text: "Representative contexts across FoodTech POS, cloud, lending, healthcare, claims, data, and risk intelligence.",
    items: projects.slice(0, 4).map((project) => project.title),
    tone: "light",
  },
  {
    eyebrow: "Domains",
    title: "Domain risk translated into practical QA focus.",
    text: "Payments, data accuracy, platform reliability, role-based workflows, reporting trust, and operational readiness.",
    items: domains.slice(0, 4).map((domain) => domain.name),
    tone: "dark",
  },
  {
    eyebrow: "Experience",
    title: "10+ years across delivery, QA, automation, and leadership.",
    text: "From hands-on validation to QA ownership, release sign-off, process clarity, and team guidance.",
    items: experience.slice(0, 4).map((item) => item.company),
    tone: "light",
  },
  {
    eyebrow: "Skills",
    title: "Focused capabilities, not a keyword pile.",
    text: "Strategy, automation, tooling, data validation, release communication, and AI-assisted QA workflows.",
    items: skillGroups.map((group) => group.title),
    tone: "dark",
  },
  {
    eyebrow: "Education",
    title: "Engineering depth with business leadership context.",
    text: "Executive MBA plus Computer Science Engineering background.",
    items: education.map((item) => `${item.degree} - ${item.year}`),
    tone: "light",
  },
  {
    eyebrow: "Work With Me",
    title: "Bring me in when releases need calmer evidence.",
    text: "Useful for QA ownership, practical automation, regression routines, data-heavy validation, and clearer sign-off.",
    items: ["Release confidence", "Automation routines", "Data validation"],
    tone: "dark",
  },
];

function Pill({ children }) {
  return (
    <span className="inline-flex max-w-full rounded-full border border-stone-300 bg-stone-50 px-2.5 py-1 text-xs font-medium leading-5 text-stone-700 shadow-sm shadow-stone-200/60 sm:px-3 sm:text-sm">
      {children}
    </span>
  );
}

function SectionTitle({ eyebrow, title, text, inverted = false }) {
  return (
    <div className="mx-auto mb-8 max-w-4xl text-center md:mb-10">
      <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-amber-700 sm:text-sm sm:tracking-[0.24em]">{eyebrow}</p>
      <h2 className={`text-2xl font-black leading-tight tracking-tight sm:text-3xl md:text-5xl ${inverted ? "text-white" : "text-stone-950"}`}>
        {title}
      </h2>
      {text && (
        <p className={`mx-auto mt-4 max-w-3xl text-sm leading-7 sm:text-base sm:leading-8 ${inverted ? "text-stone-300" : "text-stone-600"}`}>
          {text}
        </p>
      )}
    </div>
  );
}

function AvatarImage({ className = "", sizes = "(max-width: 767px) 45vw, 384px" }) {
  return (
    <img
      src="/ankit-avatar-384.jpg"
      srcSet="/ankit-avatar-240.jpg 240w, /ankit-avatar-384.jpg 384w, /ankit-avatar-640.jpg 640w, /ankit-avatar-960.jpg 960w"
      sizes={sizes}
      alt="Ankit Singh Bisht"
      width="640"
      height="640"
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}

function MobileStories({ activeStory, onPrevious, onNext, onSelect }) {
  const story = storySlides[activeStory];
  const isDark = story.tone === "dark";

  return (
    <section className={`mobile-stories ${isDark ? "is-dark" : "is-light"}`}>
      <div className="story-progress" aria-label={`Story ${activeStory + 1} of ${storySlides.length}`}>
        {storySlides.map((slide, index) => (
          <button
            key={slide.eyebrow}
            type="button"
            className={`story-progress-segment ${index <= activeStory ? "is-filled" : ""}`}
            onClick={() => onSelect(index)}
            aria-label={`Go to ${slide.eyebrow}`}
          />
        ))}
      </div>

      <div className="story-topbar">
        <a href={`mailto:${profile.email}`} className="story-contact" aria-label="Email Ankit Singh Bisht">
          <Mail className="h-4 w-4" />
        </a>
        <span>{activeStory + 1}/{storySlides.length}</span>
      </div>

      <button type="button" className="story-tap-zone story-tap-left" onClick={onPrevious} aria-label="Previous segment" />
      <button type="button" className="story-tap-zone story-tap-right" onClick={onNext} aria-label="Next segment" />

      <motion.article
        key={story.eyebrow}
        initial={{ opacity: 0, x: 28, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="story-card"
      >
        <div className="story-kicker">
          <Sparkles className="h-4 w-4" />
          <span>{story.eyebrow}</span>
        </div>

        {activeStory === 0 && (
          <div className="story-avatar">
            <AvatarImage sizes="45vw" />
          </div>
        )}

        <h1>{story.title}</h1>
        {story.meta && <p className="story-meta">{story.meta}</p>}
        <p className="story-copy">{story.text}</p>

        {story.items && (
          <div className="story-list">
            {story.items.map((item) => (
              <div key={item} className="story-list-item">
                <CheckCircle2 className="h-4 w-4" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}

        {activeStory === storySlides.length - 1 && (
          <div className="story-actions">
            <a href={`mailto:${profile.email}`}>
              Email me <ArrowRight className="h-4 w-4" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        )}
      </motion.article>

      <div className="story-controls">
        <button type="button" onClick={onPrevious} aria-label="Previous segment">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <span>Tap sides to flip</span>
        <button type="button" onClick={onNext} aria-label="Next segment">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}

function App() {
  const [query, setQuery] = useState("");
  const [activeStory, setActiveStory] = useState(0);

  const filteredProjects = useMemo(() => {
    const normalized = query.toLowerCase().trim();
    if (!normalized) return projects;
    return projects.filter((project) => {
      const content = [project.title, project.domain, project.summary, ...project.focus]
        .join(" ")
        .toLowerCase();
      return content.includes(normalized);
    });
  }, [query]);

  const goToPreviousStory = () => {
    setActiveStory((current) => Math.max(0, current - 1));
  };

  const goToNextStory = () => {
    setActiveStory((current) => Math.min(storySlides.length - 1, current + 1));
  };

  return (
    <main className="site-scroll min-h-screen overflow-x-hidden bg-[#f6f1e8] text-stone-900">
      <MobileStories
        activeStory={activeStory}
        onPrevious={goToPreviousStory}
        onNext={goToNextStory}
        onSelect={setActiveStory}
      />

      <div className="desktop-site">
      <nav className="mobile-story-nav sticky top-0 z-30 border-b border-stone-900/10 bg-[#f6f1e8]/95 px-3 py-2.5 backdrop-blur sm:px-4 md:px-10 md:py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 md:gap-5">
          <a href="#top" className="min-w-0 font-serif text-base font-black leading-tight text-stone-950 sm:text-xl">
            Ankit Singh Bisht
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-full px-4 sm:py-3 py-2 sm:text-xs text-sm font-bold text-stone-600 transition hover:bg-stone-950 hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Contact Ankit Singh Bisht by email"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-amber-500 p-0 text-xs font-black text-stone-950 shadow-lg shadow-amber-900/10 transition hover:-translate-y-0.5 hover:bg-amber-400 sm:h-auto sm:w-auto sm:px-4 sm:py-2 sm:text-sm"
          >
            <Mail className="h-4 w-4" /> <span className="contact-label hidden sm:inline">Contact</span>
          </a>
        </div>
        <div className="mx-auto mt-1.5 flex max-w-md items-center justify-center gap-2 text-[0.62rem] font-black uppercase tracking-[0.16em] text-stone-500 md:hidden">
          <span className="h-px flex-1 bg-stone-900/10" />
          Scroll to explore
          <span className="h-px flex-1 bg-stone-900/10" />
        </div>
      </nav>

      <section id="top" className="parallax-section hero-panel relative overflow-hidden border-b border-stone-900/10">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(68,64,60,0.08)_1px,transparent_1px),linear-gradient(60deg,rgba(68,64,60,0.05)_1px,transparent_1px)] bg-[length:42px_42px]" />
        <div className="relative mx-auto grid max-w-7xl gap-7 px-3 py-7 sm:px-6 sm:py-10 md:grid-cols-[1.05fr_0.95fr] md:px-10 md:py-16 lg:gap-10 lg:py-24">
          <motion.div className="parallax-copy min-w-0" initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
            <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-stone-900/10 bg-white/70 px-3 py-2 text-xs font-black leading-5 text-stone-700 shadow-sm backdrop-blur sm:mb-6 sm:px-4 sm:text-sm">
              <Sparkles className="h-4 w-4 shrink-0" />
              <span className="min-w-0">Passionate About Quality | Delivering Quality at Scale</span>
            </div>
            <h1 className="max-w-4xl text-balance font-serif text-[2.35rem] font-black leading-[0.96] tracking-tight text-stone-950 sm:text-5xl md:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-4 text-[0.95rem] font-black leading-7 text-stone-800 sm:text-base md:text-xl">{profile.role}</p>
            <p className="mt-2 text-sm font-bold text-stone-500 sm:text-base">{profile.location}</p>
            <p className="mt-5 max-w-3xl text-[0.95rem] leading-7 text-stone-700 sm:text-lg sm:leading-8 md:mt-7">{profile.headline}</p>
            <div className="mt-5 grid max-w-3xl gap-2.5 sm:grid-cols-3 md:mt-7">
              {valueProps.map((item) => (
                <div key={item} className="border-l-4 border-amber-500 bg-white/65 px-4 py-3 text-sm font-black leading-5 text-stone-800 shadow-sm shadow-stone-200/60">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-950 px-5 py-3 text-sm font-black text-white shadow-xl shadow-stone-900/20 transition hover:-translate-y-0.5 hover:bg-stone-800"
              >
                <Mail className="h-4 w-4" /> Start a conversation
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-900/10 bg-white/80 px-5 py-3 text-sm font-black text-stone-900 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-500 hover:bg-white"
              >
                <ExternalLink className="h-4 w-4" /> View LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="overflow-hidden rounded-[1.1rem] border border-stone-900 bg-stone-950 text-white shadow-2xl shadow-stone-900/25 sm:rounded-[1.5rem]"
          >
            <div className="relative overflow-hidden bg-[radial-gradient(circle_at_28%_18%,rgba(251,191,36,0.22),transparent_28%),linear-gradient(135deg,#1c1917,#0c0a09)] p-5 sm:p-6">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:28px_28px]" />
              <div className="relative mx-auto max-w-[14.5rem] overflow-hidden rounded-full border border-white/15 bg-stone-900 shadow-2xl shadow-black/40 sm:max-w-sm">
                <AvatarImage className="aspect-square h-auto w-full object-cover object-center" sizes="(max-width: 767px) 70vw, (max-width: 1023px) 384px, 448px" />
              </div>
              <div className="relative mt-5">
                <p className="text-sm font-bold text-amber-300">Positioning snapshot</p>
                <h3 className="font-serif text-2xl font-black sm:text-3xl">QA leadership that ships</h3>
              </div>
            </div>
            <div className="p-5 sm:p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                <p className="text-sm text-stone-400">Working style</p>
                <h3 className="text-xl font-black">People, process, and quality</h3>
                </div>
                <MonitorCog className="h-8 w-8 text-amber-300" />
              </div>
              <div className="grid gap-4 border-y border-white/10 py-5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                {[
                  ["10+", "Years in QA and product delivery"],
                  ["8", "Domains with hands-on product QA"],
                ].map(([number, label]) => (
                  <div key={label}>
                    <p className="font-serif text-4xl font-black text-amber-200">{number}</p>
                    <p className="mt-1 text-sm leading-5 text-stone-300">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <div className="mb-3 flex items-center gap-2 text-sm font-black text-stone-200">
                  <Terminal className="h-4 w-4" /> Contact
                </div>
                <p className="break-all font-mono text-sm leading-7 text-stone-300">{profile.email}</p>
                <p className="font-mono text-sm leading-7 text-stone-300">{profile.phone}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="parallax-section mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-10 md:py-16">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="group rounded-[1.25rem] border border-stone-900/10 bg-white/75 p-5 shadow-sm shadow-stone-200/80 backdrop-blur transition hover:-translate-y-1 hover:border-amber-500 md:p-6"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-stone-950 transition group-hover:bg-amber-500">
                  <Icon className="h-6 w-6 text-white group-hover:text-stone-950" />
                </div>
                <h3 className="text-lg font-black text-stone-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-600">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="about" className="parallax-section border-y border-stone-900/10 bg-white px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            eyebrow="About"
            title="QA leadership for teams that need reliable releases, not just more test cases"
            text={profile.summary}
          />
          <div className="grid gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service} className="flex items-start gap-3 border-l-4 border-amber-500 bg-stone-50 p-4 sm:p-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-stone-900" />
                <p className="text-sm font-bold leading-6 text-stone-700 sm:text-xs md:text-sm">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="parallax-section mx-auto max-w-7xl px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <SectionTitle
          eyebrow="Projects"
          title="Selected project contexts, cleaned up for signal"
          text="A concise view of the platforms where I handled QA risk, validation depth, automation coverage, and release confidence."
        />

        <div className="project-search mx-auto mb-8 hidden w-full items-center gap-3 rounded-2xl border border-stone-900/10 bg-white px-4 py-3 shadow-lg shadow-stone-200/80 sm:max-w-xl sm:rounded-full sm:px-5 md:flex">
          <Search className="h-5 w-5 text-amber-700" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by POS, ETL, healthcare, blockchain, automation..."
            className="min-w-0 w-full bg-transparent text-sm font-semibold outline-none placeholder:text-stone-400"
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {filteredProjects.map((project) => (
            <motion.article
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              className="group rounded-[1.25rem] border border-stone-900/10 bg-white p-5 shadow-sm shadow-stone-200/80 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-300/50 md:p-7"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-amber-700 sm:text-sm sm:tracking-[0.18em]">{project.domain}</p>
                  <h3 className="mt-2 font-serif text-2xl font-black text-stone-950 md:text-3xl">{project.title}</h3>
                </div>
                <ExternalLink className="h-5 w-5 shrink-0 text-stone-400 transition group-hover:text-amber-700" />
              </div>
              <p className="text-sm leading-7 text-stone-600">{project.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.focus.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="domains" className="parallax-section border-y border-stone-900/10 bg-white px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Domains"
            title="Domain experience, translated into QA risk"
            text="Not just industries I have touched, but the types of product risk I have learned to test: payments, data accuracy, platform reliability, role-based workflows, and reporting trust."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {domains.map((domain) => {
              const Icon = domain.icon;
              return (
                <motion.div
                  key={domain.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeUp}
                  className="group border border-stone-900/10 bg-stone-50 p-5 transition hover:-translate-y-1 hover:border-amber-500 hover:bg-white hover:shadow-xl hover:shadow-stone-200/80 sm:p-6"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-stone-950 text-white transition group-hover:bg-amber-400 group-hover:text-stone-950">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-black text-stone-950">{domain.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-600">{domain.text}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {domain.focus.map((item) => (
                      <Pill key={item}>{item}</Pill>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="experience" className="parallax-section dark-panel border-y border-stone-900/10 bg-stone-950 px-4 py-14 text-white sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Experience"
            title="Career timeline with the signal turned up"
            text="A compact view of the teams, processes, domains, and responsibilities that shaped how I approach quality ownership, collaboration, automation, and release confidence."
            inverted
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {experience.map((item) => (
              <div key={`${item.company}-${item.period}`} className="border border-white/10 bg-white/[0.04] p-5 transition hover:border-amber-400/70 hover:bg-white/[0.07] md:p-6">
                <p className="mb-4 inline-flex rounded-full bg-amber-300 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.12em] text-stone-950 sm:text-xs sm:tracking-[0.16em]">
                  {item.period}
                </p>
                <h3 className="font-serif text-lg font-black text-white md:text-xl">{item.company}</h3>
                <p className="mt-2 text-sm font-black text-amber-200">{item.title}</p>
                <p className="mt-4 text-sm leading-6 text-stone-300">{item.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.focus.map((focus) => (
                    <span key={focus} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-bold text-stone-200">
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="parallax-section mx-auto max-w-7xl px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <SectionTitle
          eyebrow="Skills"
          title="Focused capabilities, not a keyword pile"
          text="A cleaner view of the skills that matter most for senior QA ownership: strategy, automation, delivery visibility, and thoughtful AI-assisted testing."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.title} className="border border-stone-900/10 bg-white p-5 shadow-sm shadow-stone-200/80 md:p-6">
              <h3 className="font-serif text-xl font-black text-stone-950 md:text-2xl">{group.title}</h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">{group.text}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="education" className="parallax-section border-y border-stone-900/10 bg-white px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionTitle eyebrow="Education" title="Academic background" />
          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {education.map((item) => (
              <div key={item.degree} className="rounded-[1.25rem] border border-stone-900/10 bg-stone-50 p-5 shadow-sm sm:p-6">
                <p className="mb-4 inline-flex rounded-full bg-stone-950 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-white">
                  {item.year}
                </p>
                <h3 className="font-serif text-2xl font-black text-stone-950">{item.degree}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-600">{item.school}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="parallax-section px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="work-cta mx-auto grid max-w-6xl overflow-hidden rounded-[1.25rem] bg-stone-950 text-white shadow-2xl shadow-stone-900/20 sm:rounded-[1.5rem] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-5 sm:p-8 md:p-12">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-amber-300 text-stone-950 sm:mb-6 sm:h-14 sm:w-14">
              <Zap className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-amber-300 sm:text-sm sm:tracking-[0.24em]">Work with me</p>
            <h2 className="font-serif text-[1.85rem] font-black leading-[1.05] tracking-tight sm:text-3xl md:text-5xl">
              I help teams make quality a shared operating habit.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-stone-300 sm:hidden">
              Bring me in when releases need clearer risk, stronger test evidence, and calmer sign-off.
            </p>
            <p className="mt-5 hidden max-w-2xl text-base leading-7 text-stone-300 sm:block">
              The work I enjoy most is helping people align around risk, improve testing routines, make defects easier to reason about, and build release practices that feel clear instead of chaotic.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:flex sm:flex-wrap">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-amber-300 px-4 py-3 text-sm font-black text-stone-950 transition hover:-translate-y-0.5 hover:bg-amber-200 sm:px-5"
              >
                <span className="sm:hidden">Email me</span>
                <span className="hidden sm:inline">Start a quality conversation</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:border-amber-300 hover:bg-white/10 sm:px-5"
              >
                <span className="sm:hidden">LinkedIn</span>
                <span className="hidden sm:inline">Connect on LinkedIn</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 bg-white/[0.04] p-5 sm:p-8 md:p-12 lg:border-l lg:border-t-0">
            <h3 className="font-serif text-xl font-black sm:text-2xl">Best fit</h3>
            <div className="mt-4 space-y-3 sm:mt-6 sm:space-y-4">
              {[
                "Release confidence and QA ownership",
                "Practical automation and regression routines",
                "Data-heavy validation and defect evidence",
              ].map((item) => (
                <div key={item} className="flex gap-3 text-sm font-bold leading-6 text-stone-200">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-300 sm:h-5 sm:w-5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-stone-950/60 p-4 sm:mt-8 sm:p-5">
              <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-stone-400 sm:text-xs sm:tracking-[0.2em]">Direct email</p>
              <p className="mt-2 break-all font-mono text-xs leading-5 text-amber-200 sm:text-sm">{profile.email}</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-900/10 bg-white px-4 py-8 text-center text-sm font-medium leading-6 text-stone-500 sm:px-6">
        <p>(c) {new Date().getFullYear()} {profile.name}. Passionate About Quality | Delivering Quality at Scale.</p>
      </footer>
      </div>
    </main>
  );
}

export default App;
