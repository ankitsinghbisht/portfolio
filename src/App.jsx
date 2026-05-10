import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
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

function Pill({ children }) {
  return (
    <span className="rounded-full border border-stone-300 bg-stone-50 px-3 py-1 text-sm font-medium text-stone-700 shadow-sm shadow-stone-200/60">
      {children}
    </span>
  );
}

function SectionTitle({ eyebrow, title, text, inverted = false }) {
  return (
    <div className="mx-auto mb-10 max-w-4xl text-center">
      <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-amber-700">{eyebrow}</p>
      <h2 className={`text-3xl font-black tracking-tight md:text-5xl ${inverted ? "text-white" : "text-stone-950"}`}>
        {title}
      </h2>
      {text && (
        <p className={`mx-auto mt-5 max-w-3xl text-base leading-8 ${inverted ? "text-stone-300" : "text-stone-600"}`}>
          {text}
        </p>
      )}
    </div>
  );
}

function App() {
  const [query, setQuery] = useState("");

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

  return (
    <main className="min-h-screen bg-[#f6f1e8] text-stone-900">
      <nav className="sticky top-0 z-30 border-b border-stone-900/10 bg-[#f6f1e8]/90 px-6 py-4 backdrop-blur md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5">
          <a href="#top" className="font-serif text-xl font-black text-stone-950">
            Ankit Singh Bisht
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-full px-4 py-2 text-sm font-bold text-stone-600 transition hover:bg-stone-950 hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-sm font-black text-stone-950 shadow-lg shadow-amber-900/10 transition hover:-translate-y-0.5 hover:bg-amber-400"
          >
            <Mail className="h-4 w-4" /> Contact
          </a>
        </div>
      </nav>

      <section id="top" className="relative overflow-hidden border-b border-stone-900/10">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(68,64,60,0.08)_1px,transparent_1px),linear-gradient(60deg,rgba(68,64,60,0.05)_1px,transparent_1px)] bg-[length:42px_42px]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:px-10 lg:py-24">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-stone-900/10 bg-white/70 px-4 py-2 text-sm font-black text-stone-700 shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Passionate About Quality | Delivering Quality at Scale
            </div>
            <h1 className="max-w-4xl font-serif text-5xl font-black leading-[0.95] tracking-tight text-stone-950 md:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-5 text-xl font-black text-stone-800">{profile.role}</p>
            <p className="mt-2 text-base font-bold text-stone-500">{profile.location}</p>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-700">{profile.headline}</p>
            <div className="mt-7 grid max-w-3xl gap-3 sm:grid-cols-3">
              {valueProps.map((item) => (
                <div key={item} className="border-l-4 border-amber-500 bg-white/65 px-4 py-3 text-sm font-black leading-5 text-stone-800 shadow-sm shadow-stone-200/60">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-stone-950 px-5 py-3 text-sm font-black text-white shadow-xl shadow-stone-900/20 transition hover:-translate-y-0.5 hover:bg-stone-800"
              >
                <Mail className="h-4 w-4" /> Start a conversation
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-stone-900/10 bg-white/80 px-5 py-3 text-sm font-black text-stone-900 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-500 hover:bg-white"
              >
                <ExternalLink className="h-4 w-4" /> View LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="overflow-hidden rounded-[1.5rem] border border-stone-900 bg-stone-950 text-white shadow-2xl shadow-stone-900/25"
          >
            <div className="relative overflow-hidden bg-[radial-gradient(circle_at_28%_18%,rgba(251,191,36,0.22),transparent_28%),linear-gradient(135deg,#1c1917,#0c0a09)] p-6">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:28px_28px]" />
              <div className="relative mx-auto max-w-[300px] overflow-hidden rounded-full border border-white/15 bg-stone-900 shadow-2xl shadow-black/40">
                <img
                  src="/ankit-profile-rounded.png"
                  alt="Ankit Singh Bisht"
                  width="399"
                  height="399"
                  className="aspect-square h-auto w-full object-cover object-center"
                />
              </div>
              <div className="relative mt-5">
                <p className="text-sm font-bold text-amber-300">Positioning snapshot</p>
                <h3 className="font-serif text-3xl font-black">QA leadership that ships</h3>
              </div>
            </div>
            <div className="p-6">
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

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-6 md:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="group rounded-[1.25rem] border border-stone-900/10 bg-white/75 p-6 shadow-sm shadow-stone-200/80 backdrop-blur transition hover:-translate-y-1 hover:border-amber-500"
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

      <section id="about" className="border-y border-stone-900/10 bg-white px-6 py-20 md:px-10">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            eyebrow="About"
            title="QA leadership for teams that need reliable releases, not just more test cases"
            text={profile.summary}
          />
          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <div key={service} className="flex items-start gap-3 border-l-4 border-amber-500 bg-stone-50 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-stone-900" />
                <p className="text-sm font-bold text-stone-700">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionTitle
          eyebrow="Projects"
          title="Selected project contexts, cleaned up for signal"
          text="A concise view of the platforms where I handled QA risk, validation depth, automation coverage, and release confidence."
        />

        <div className="mx-auto mb-8 flex max-w-xl items-center gap-3 rounded-full border border-stone-900/10 bg-white px-5 py-3 shadow-lg shadow-stone-200/80">
          <Search className="h-5 w-5 text-amber-700" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by POS, ETL, healthcare, blockchain, automation..."
            className="w-full bg-transparent text-sm font-semibold outline-none placeholder:text-stone-400"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <motion.article
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              className="group rounded-[1.25rem] border border-stone-900/10 bg-white p-7 shadow-sm shadow-stone-200/80 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-300/50"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-700">{project.domain}</p>
                  <h3 className="mt-2 font-serif text-3xl font-black text-stone-950">{project.title}</h3>
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

      <section id="domains" className="border-y border-stone-900/10 bg-white px-6 py-20 md:px-10">
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
                  className="group border border-stone-900/10 bg-stone-50 p-6 transition hover:-translate-y-1 hover:border-amber-500 hover:bg-white hover:shadow-xl hover:shadow-stone-200/80"
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

      <section id="experience" className="border-y border-stone-900/10 bg-stone-950 px-6 py-20 text-white md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Experience"
            title="Career timeline with the signal turned up"
            text="A compact view of the teams, processes, domains, and responsibilities that shaped how I approach quality ownership, collaboration, automation, and release confidence."
            inverted
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {experience.map((item) => (
              <div key={`${item.company}-${item.period}`} className="border border-white/10 bg-white/[0.04] p-6 transition hover:border-amber-400/70 hover:bg-white/[0.07]">
                <p className="mb-4 inline-flex rounded-full bg-amber-300 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-stone-950">
                  {item.period}
                </p>
                <h3 className="font-serif text-xl font-black text-white">{item.company}</h3>
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

      <section id="skills" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionTitle
          eyebrow="Skills"
          title="Focused capabilities, not a keyword pile"
          text="A cleaner view of the skills that matter most for senior QA ownership: strategy, automation, delivery visibility, and thoughtful AI-assisted testing."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.title} className="border border-stone-900/10 bg-white p-6 shadow-sm shadow-stone-200/80">
              <h3 className="font-serif text-2xl font-black text-stone-950">{group.title}</h3>
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

      <section id="education" className="border-y border-stone-900/10 bg-white px-6 py-20 md:px-10">
        <div className="mx-auto max-w-5xl">
          <SectionTitle eyebrow="Education" title="Academic background" />
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((item) => (
              <div key={item.degree} className="rounded-[1.25rem] border border-stone-900/10 bg-stone-50 p-6 shadow-sm">
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

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[1.5rem] bg-stone-950 text-white shadow-2xl shadow-stone-900/20 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 md:p-12">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-amber-300 text-stone-950">
              <Zap className="h-7 w-7" />
            </div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-amber-300">Work with me</p>
            <h2 className="font-serif text-3xl font-black tracking-tight md:text-5xl">
              I help teams make quality a shared operating habit.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-stone-300">
              The work I enjoy most is helping people align around risk, improve testing routines, make defects easier to reason about, and build release practices that feel clear instead of chaotic.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-amber-300 px-5 py-3 text-sm font-black text-stone-950 transition hover:-translate-y-0.5 hover:bg-amber-200"
              >
                Start a quality conversation <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:border-amber-300 hover:bg-white/10"
              >
                Connect on LinkedIn <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 bg-white/[0.04] p-8 md:p-12 lg:border-l lg:border-t-0">
            <h3 className="font-serif text-2xl font-black">Where I can be useful</h3>
            <div className="mt-6 space-y-4">
              {[
                "Working with teams to improve QA ownership, process clarity, and delivery confidence",
                "Creating practical QA routines that developers, product teams, and stakeholders can trust",
                "Data-intensive projects that deal with a wide variety of data",
                "Making defect triage, test evidence, and release decisions easier to communicate",
              ].map((item) => (
                <div key={item} className="flex gap-3 text-sm font-bold leading-6 text-stone-200">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-white/10 bg-stone-950/60 p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-stone-400">Direct email</p>
              <p className="mt-2 break-all font-mono text-sm text-amber-200">{profile.email}</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-900/10 bg-white px-6 py-8 text-center text-sm font-medium text-stone-500">
        <p>(c) {new Date().getFullYear()} {profile.name}. Passionate About Quality | Delivering Quality at Scale.</p>
      </footer>
    </main>
  );
}

export default App;
