'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ParticleField from './components/ParticleField';
import MagneticCursor from './components/MagneticCursor';
import TerminalTypewriter from './components/TerminalTypewriter';
import {
  Reveal,
  StaggerContainer,
  StaggerItem,
  TextReveal,
  CountUp,
  GlitchText,
  Magnetic,
} from './components/Animations';

/* ─────────────────────────────────────
   DATA — from resume
   ───────────────────────────────────── */
const NAV_LINKS = [
  { label: 'NEXUS', href: '#home' },
  { label: 'THE_LAB', href: '#projects' },
  { label: 'THE_STACK', href: '#skills' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'AWARDS', href: '#awards' },
  { label: 'CONTACT', href: '#contact' },
];

const STATS = [
  { value: 1000, suffix: '+', label: 'Problems Solved' },
  { value: 1493, suffix: '', label: 'CF Rating' },
  { value: 2008, suffix: '', label: 'LC Peak' },
  { value: 9, suffix: '.25', label: 'CGPA', isDecimal: true },
];

const PROJECTS = [
  {
    icon: 'dns',
    name: 'LabFlow_Enterprise',
    ext: '.exe',
    tag: 'PRODUCTION',
    tagColor: '#00ff41',
    desc: 'Architected a production-grade full-stack application serving 5,000+ users with MySQL 8 schema, automated archival, audit trails, and 7 RBAC roles with bespoke dashboards. Eliminated N+1 query bottlenecks across 7 API routes, reducing response times from 8–10s to <1s (O(N²) → O(N)). Scaled with connection pooling, API caching, and concurrent batch email dispatch via cron jobs.',
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'MySQL 8', 'TailwindCSS 4', 'Shadcn UI', 'Zod', 'Recharts'],
    links: [
      { label: 'LIVE', href: 'https://lab-booking.lnmiit.ac.in', icon: 'link' },
      { label: 'SOURCE', href: 'https://github.com/abhinavdogra21', icon: 'code' },
    ],
  },
  {
    icon: 'view_in_ar',
    name: 'Rubiks_Cube_Solver',
    ext: '.sh',
    tag: 'INTERACTIVE',
    tagColor: '#00D1FF',
    desc: 'Engineered a full-stack solver with React + Three.js for real-time 3D animations and a Flask + C++ backend powered by the Kociemba two-phase algorithm. Integrated Pybind11 for C++→Python bindings achieving sub-100ms solves. Added OpenCV for live camera-based cube scanning and manual state editing.',
    stack: ['React', 'Three.js', 'Flask', 'Python', 'C++', 'Pybind11', 'OpenCV', 'CMake'],
    links: [
      { label: 'SOURCE', href: 'https://github.com/abhinavdogra21/rubix-cube-solver', icon: 'code' },
    ],
  },
  {
    icon: 'stream',
    name: 'Adaptive_Stream_Analytics',
    ext: '.sys',
    tag: 'BTP / RESEARCH',
    tagColor: '#FF3131',
    desc: 'Designed a distributed adaptive stream processing system for high-throughput analytics using Count-Min Sketch, HyperLogLog, and Misra-Gries. Architected a scalable pipeline with Kafka ingestion, C++ worker nodes, Redis state store, and FastAPI backend. Built an adaptive controller for dynamic accuracy–latency trade-offs with anti-flapping mechanisms.',
    stack: ['Kafka', 'Python', 'C++', 'Redis', 'FastAPI', 'HyperLogLog'],
    links: [],
    wide: true,
  },
];

const SKILLS = [
  { category: 'Languages', color: '#00ff41', items: ['C++', 'C', 'Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'Bash'] },
  { category: 'Web_Dev', color: '#00D1FF', items: ['Next.js', 'React.js', 'Node.js', 'Express.js', 'Three.js', 'Flask', 'TailwindCSS'] },
  { category: 'Databases', color: '#FF3131', items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
  { category: 'Tools', color: '#FFD700', items: ['Git', 'Linux', 'Docker', 'CMake', 'VS Code', 'Google Colab'] },
  { category: 'Libraries', color: '#c084fc', items: ['NumPy', 'Pandas', 'OpenCV', 'Pybind11', 'Shadcn UI', 'Zod'] },
];

const AWARDS = [
  '🏆 Specialist on Codeforces (Max Rating: 1493) and Knight on LeetCode (Peak Rating: 2008)',
  '🌐 Global Rank 884 in Codeforces Round 1029 (Div. 3) and 806 in LeetCode Weekly Contest 456',
  '🏅 Global Rank 93 in CodeChef Starters 199 Div 3',
  '💡 Solved over 1000 coding problems across LeetCode, Codeforces, and other platforms',
  '🎓 Awarded INR 25,000 Merit Scholarship for academic excellence (CGPA 9.46+)',
  '📊 Ranked 8th out of 251 in Y-23 CSE batch at LNMIIT',
  '🥇 1st in Mathematical Olympiad at 27th Children\'s Science Congress, Himachal Pradesh',
  '📝 Cleared NTSE Stage 1 with 9th state rank in Himachal Pradesh',
];

const TERMINAL_LINES = [
  '$ ssh abhinav@nexus.dev',
  '> Connection established...',
  '> Loading profile: abhinav_dogra',
  '> Location: Jaipur, India',
  '> Status: B.Tech CS @ LNMIIT [2023-2027]',
  '> CGPA: 9.25 | CF: 1493 | LC: 2008',
  '> Role: Full-Stack Architect',
  '> Systems: Online ✓',
];

/* ─────────────────────────────────────
   PAGE
   ───────────────────────────────────── */
export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      <ParticleField />
      <MagneticCursor />

      {/* ═══ NAV ═══ */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="nav-bar"
      >
        <div className="nav-inner">
          <a href="#home" className="nav-logo mono">[NEXUS_OS]</a>
          <div className="nav-links-desktop">
            {NAV_LINKS.map((link, i) => (
              <a key={link.label} href={link.href} className={`nav-link mono ${i === 0 ? 'active' : ''}`}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="nav-icons">
            <a href="https://github.com/abhinavdogra21" target="_blank" rel="noopener noreferrer" className="nav-icon-link">
              <span className="material-symbols-outlined nav-icon">code</span>
            </a>
            <a href="mailto:23ucs507@lnmiit.ac.in" className="nav-icon-link">
              <span className="material-symbols-outlined nav-icon">mail</span>
            </a>
          </div>
        </div>
      </motion.nav>

      {/* ═══ HERO ═══ */}
      <section id="home" ref={heroRef} className="hero-section">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="hero-content">
          <div className="hero-left">
            <Reveal delay={0.2}>
              <div className="status-badge">
                <span className="status-dot" />
                <span className="mono">SYSTEM_ONLINE</span>
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <h1 className="hero-title">
                <GlitchText text="ABHINAV" />
                <br />
                <span className="hero-title-accent">DOGRA</span>
              </h1>
            </Reveal>

            <Reveal delay={0.5}>
              <p className="hero-desc">
                <span className="accent-prefix mono">::</span>
                <TextReveal
                  text="Abhinav Dogra — Full-stack developer, competitive programmer, and systems researcher. B.Tech CS @ LNMIIT, Jaipur."
                  delay={0.6}
                />
              </p>
            </Reveal>

            <Reveal delay={0.65}>
              <div className="hero-buttons">
                <Magnetic>
                  <motion.a
                    href="#projects"
                    className="btn-glow"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="material-symbols-outlined">radar</span>
                    View Projects
                  </motion.a>
                </Magnetic>
                <Magnetic>
                  <motion.a
                    href="mailto:23ucs507@lnmiit.ac.in"
                    className="btn-ghost"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="material-symbols-outlined">mail</span>
                    Contact Me
                  </motion.a>
                </Magnetic>
              </div>
            </Reveal>

            <Reveal delay={0.8}>
              <div className="hero-socials">
                {[
                  { name: 'GitHub', href: 'https://github.com/abhinavdogra21', icon: 'code' },
                  { name: 'LinkedIn', href: 'https://linkedin.com/in/abhinavdogra21', icon: 'person' },
                  { name: 'Codeforces', href: 'https://codeforces.com/profile/abhinavdogra21', icon: 'leaderboard' },
                  { name: 'LeetCode', href: 'https://leetcode.com/abhinavdogra21', icon: 'trending_up' },
                  { name: 'CodeChef', href: 'https://codechef.com/users/abhinavdogra21', icon: 'emoji_events' },
                ].map(s => (
                  <motion.a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.1, borderColor: '#00ff41' }}
                    title={s.name}
                  >
                    <span className="material-symbols-outlined">{s.icon}</span>
                  </motion.a>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="hero-right">
            <Reveal delay={0.5} direction="right">
              <div className="terminal-window">
                <div className="terminal-bar">
                  <div className="terminal-dots">
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                  </div>
                  <span className="terminal-bar-title mono">nexus_terminal</span>
                </div>
                <div className="terminal-body">
                  <TerminalTypewriter lines={TERMINAL_LINES} speed={30} startDelay={800} />
                </div>
              </div>
            </Reveal>
          </div>
        </motion.div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section className="stats-section">
        <StaggerContainer className="stats-grid" stagger={0.1}>
          {STATS.map(stat => (
            <StaggerItem key={stat.label} className="stat-card">
              <div className="stat-value mono">
                {stat.isDecimal ? (
                  <span>{stat.value}{stat.suffix}</span>
                ) : (
                  <CountUp end={stat.value as number} suffix={stat.suffix} duration={2} />
                )}
              </div>
              <div className="stat-label mono">{stat.label}</div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ═══ PROJECTS ═══ */}
      <section id="projects" className="section">
        <Reveal>
          <div className="section-header">
            <span className="material-symbols-outlined section-icon">terminal</span>
            <h2 className="section-title">THE_LAB<span className="accent-dim"> // PROJECTS</span></h2>
            <div className="section-line" />
          </div>
        </Reveal>

        <StaggerContainer className="projects-grid" stagger={0.1}>
          {PROJECTS.map(project => (
            <StaggerItem key={project.name} className={`project-card ${project.wide ? 'wide' : ''}`}>
              <div className="project-inner">
                <div className="project-top">
                  <div className="project-name-row">
                    <span className="material-symbols-outlined project-icon" style={{ color: project.tagColor }}>{project.icon}</span>
                    <span className="project-name mono">{project.name}<span className="ext">{project.ext}</span></span>
                  </div>
                  <span className="project-tag mono" style={{ color: project.tagColor, borderColor: project.tagColor }}>{project.tag}</span>
                </div>
                <p className="project-desc">{project.desc}</p>
                <div className="project-stack">
                  {project.stack.map(t => (
                    <span key={t} className="stack-tag mono">{t}</span>
                  ))}
                </div>
                {project.links.length > 0 && (
                  <div className="project-links">
                    {project.links.map(l => (
                      <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="project-link mono">
                        <span className="material-symbols-outlined" style={{ fontSize: 14 }}>{l.icon}</span>
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ═══ SKILLS ═══ */}
      <section id="skills" className="section">
        <Reveal>
          <div className="section-header">
            <span className="material-symbols-outlined section-icon">memory</span>
            <h2 className="section-title">THE_STACK<span className="accent-dim"> // MODULES</span></h2>
            <div className="section-line" />
          </div>
        </Reveal>

        <StaggerContainer className="skills-grid" stagger={0.08}>
          {SKILLS.map(cat => (
            <StaggerItem key={cat.category} className="skill-card">
              <div className="skill-inner" style={{ borderLeftColor: cat.color }}>
                <h3 className="skill-category mono" style={{ color: cat.color }}>{cat.category}</h3>
                <div className="skill-items">
                  {cat.items.map(item => (
                    <div key={item} className="skill-item mono">
                      <span className="skill-arrow" style={{ color: cat.color }}>›</span> {item}
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ═══ EXPERIENCE ═══ */}
      <section id="experience" className="section">
        <Reveal>
          <div className="section-header">
            <span className="material-symbols-outlined section-icon">work</span>
            <h2 className="section-title">SYS_LOG<span className="accent-dim"> // EXPERIENCE</span></h2>
            <div className="section-line" />
          </div>
        </Reveal>

        <div className="timeline">
          <Reveal delay={0.1}>
            <div className="timeline-card">
              <div className="timeline-top">
                <div>
                  <h3 className="timeline-title">Coordinator — Cybros, LNMIIT</h3>
                  <p className="timeline-org">Formerly Problem Setter & Tester</p>
                </div>
                <div className="timeline-meta mono">
                  <span className="timeline-date">Jun 2024 — Present</span>
                </div>
              </div>
              <ul className="timeline-bullets">
                <li>Created 20+ original problems on Codeforces (Polygon) for beginner-level contests</li>
                <li>Verified 50+ peer-authored problems for logic, correctness, and difficulty balance</li>
                <li>Mentored 100+ peers via live sessions on algorithmic techniques and contest prep</li>
                <li>Led end-to-end programming contests for 200+ participants</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="timeline-card">
              <div className="timeline-top">
                <div>
                  <h3 className="timeline-title">B.Tech — Computer Science</h3>
                  <p className="timeline-org">The LNM Institute of Information Technology, Jaipur</p>
                </div>
                <div className="timeline-meta mono">
                  <span className="timeline-cgpa">9.25</span>
                  <span className="timeline-date">Jul 2023 — Jun 2027</span>
                </div>
              </div>
              <p className="timeline-desc">
                OOP, Data Structures & Algorithms, Design and Analysis of Algorithms, DBMS, Computer Organization, Operating Systems, Computer Networks.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ AWARDS ═══ */}
      <section id="awards" className="section">
        <Reveal>
          <div className="section-header">
            <span className="material-symbols-outlined section-icon">emoji_events</span>
            <h2 className="section-title">HONORS<span className="accent-dim"> // AWARDS</span></h2>
            <div className="section-line" />
          </div>
        </Reveal>

        <StaggerContainer className="awards-list" stagger={0.06}>
          {AWARDS.map((award, i) => (
            <StaggerItem key={i} className="award-item">
              <span className="award-text">{award}</span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact" className="section">
        <Reveal>
          <div className="section-header">
            <span className="material-symbols-outlined section-icon">mail</span>
            <h2 className="section-title">PING<span className="accent-dim"> // CONTACT</span></h2>
            <div className="section-line" />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="contact-card">
            <p className="contact-text">
              <span className="accent-prefix mono">&gt;</span> Interested in working together? Reach out via email or connect on LinkedIn.
            </p>
            <div className="contact-info mono">
              <a href="mailto:23ucs507@lnmiit.ac.in" className="contact-detail">
                <span className="material-symbols-outlined">mail</span>
                23ucs507@lnmiit.ac.in
              </a>
              <a href="tel:+917018268812" className="contact-detail">
                <span className="material-symbols-outlined">phone</span>
                +91 7018268812
              </a>
              <span className="contact-detail">
                <span className="material-symbols-outlined">location_on</span>
                Jaipur, India
              </span>
            </div>
            <div className="contact-buttons">
              <a href="mailto:23ucs507@lnmiit.ac.in" className="btn-glow">
                <span className="material-symbols-outlined">mail</span>
                Send Email
              </a>
              <a href="https://linkedin.com/in/abhinavdogra21" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <span className="material-symbols-outlined">person</span>
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="footer-bar">
        <div className="footer-inner">
          <div className="footer-status mono">
            :: ABHINAV_DOGRA // JAIPUR
          </div>
          <div className="footer-links mono">
            {[
              { label: 'LINKEDIN', href: 'https://linkedin.com/in/abhinavdogra21' },
              { label: 'GITHUB', href: 'https://github.com/abhinavdogra21' },
              { label: 'CODEFORCES', href: 'https://codeforces.com/profile/abhinavdogra21' },
              { label: 'LEETCODE', href: 'https://leetcode.com/abhinavdogra21' },
              { label: 'CODECHEF', href: 'https://codechef.com/users/abhinavdogra21' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="footer-link">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
