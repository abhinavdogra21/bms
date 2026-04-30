export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav>
        <a href="#" className="nav-logo">AD</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero" id="about">
        <div>
          <div className="hero-badge">
            <span>🎓</span> B.Tech CS @ LNMIIT Jaipur — CGPA 9.25
          </div>
          <h1>
            <span className="gradient-text">Abhinav Dogra</span>
          </h1>
          <p>
            Full-stack developer, competitive programmer, and systems researcher.
            Building production-grade applications and solving hard algorithmic problems.
          </p>

          <div className="hero-meta">
            <span className="meta-item">📍 Jaipur, India</span>
            <span className="meta-item">📞 +91 7018268812</span>
            <span className="meta-item">✉️ 23ucs507@lnmiit.ac.in</span>
          </div>

          <div className="hero-links">
            <a href="https://linkedin.com" target="_blank" className="btn btn-primary">LinkedIn</a>
            <a href="https://github.com/abhinavdogra21" target="_blank" className="btn btn-outline">GitHub</a>
            <a href="https://codeforces.com" target="_blank" className="btn btn-outline">Codeforces</a>
            <a href="https://leetcode.com" target="_blank" className="btn btn-outline">LeetCode</a>
            <a href="https://codechef.com" target="_blank" className="btn btn-outline">CodeChef</a>
          </div>

          <div className="stats-bar">
            <div className="stat-item">
              <span className="stat-value">1000+</span>
              <span className="stat-label">Problems Solved</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">9.25</span>
              <span className="stat-label">CGPA</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">1493</span>
              <span className="stat-label">CF Rating</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">2008</span>
              <span className="stat-label">LC Peak</span>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education">
        <div className="section-header">
          <span className="section-title">Education</span>
          <div className="section-line"></div>
        </div>
        <div className="card">
          <div className="edu-card">
            <div>
              <div className="edu-degree">Bachelor of Technology — Computer Science</div>
              <div className="edu-school">The LNM Institute of Information Technology, Jaipur</div>
              <div className="edu-courses">
                OOP · DSA · Design & Analysis of Algorithms · DBMS · OS · Computer Networks · Computer Architecture · Python Programming
              </div>
            </div>
            <div className="edu-meta">
              <span className="edu-cgpa">9.25</span>
              CGPA<br />
              Jul 2023 – Jun 2027
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="section-header">
          <span className="section-title">Projects</span>
          <div className="section-line"></div>
        </div>
        <div className="card-grid">

          {/* LabFlow */}
          <div className="card">
            <div className="project-header">
              <div>
                <div className="project-title">LabFlow</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Enterprise Lab Management System</div>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">🔗 Live</a>
                <a href="#" className="project-link" target="_blank">GitHub</a>
              </div>
            </div>
            <ul className="project-bullets">
              <li>Production-grade full-stack app serving 5,000+ users with MySQL 8 schema, audit trails & automated archival</li>
              <li>7 RBAC roles, 4-stage booking approval pipeline, and 6-stage equipment request lifecycle</li>
              <li>Eliminated N+1 bottlenecks across 7 API routes — response times slashed from 8–10s to &lt;1s</li>
              <li>Concurrent batch processing with Promise.allSettled() dispatching 17+ HTML email templates via cron</li>
            </ul>
            <div className="tag-list">
              {['Next.js 15', 'React 19', 'TypeScript', 'MySQL 8', 'TailwindCSS', 'Shadcn UI', 'Zod'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Rubik's Cube */}
          <div className="card">
            <div className="project-header">
              <div>
                <div className="project-title">Interactive 3D Rubik&apos;s Cube Solver</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Full-Stack 3D Visualizer</div>
              </div>
              <div className="project-links">
                <a href="https://github.com/abhinavdogra21/rubix-cube-solver" className="project-link" target="_blank">GitHub</a>
              </div>
            </div>
            <ul className="project-bullets">
              <li>React + Three.js front-end with real-time 3D animations and manual cube state editing</li>
              <li>Flask + C++ backend powered by the Kociemba two-phase algorithm — optimal solutions in &lt;100ms</li>
              <li>OpenCV integration for live camera-based cube scanning</li>
              <li>Pybind11 bindings to invoke C++ solver from Python with ≤25 moves guaranteed</li>
            </ul>
            <div className="tag-list">
              {['React', 'Three.js', 'Flask', 'Python', 'C++', 'Pybind11', 'OpenCV', 'CMake'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Stream Analytics */}
          <div className="card" style={{ gridColumn: '1 / -1' }}>
            <div className="project-header">
              <div>
                <div className="project-title">Adaptive Real-Time Stream Analytics</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>B.Tech Research Project · Under Dr. Subrat K Dash, LNMIIT · Apr 2026</div>
              </div>
            </div>
            <ul className="project-bullets">
              <li>Scalable system using probabilistic sketches — Count-Min Sketch, HyperLogLog, and Sliding-Window Misra-Gries — for memory-efficient stream analytics at millions of events/sec</li>
              <li>Apache Kafka ingestion pipeline simulating Zipfian heavy-tailed traffic with concept drift; parallel worker nodes in Python (asyncio) and C++ (XXH64 hashing)</li>
              <li>Redis cluster as federated shared state store; FastAPI REST API for real-time P99 latency and health monitoring via interactive web dashboard</li>
              <li>Phase 2 added adaptive controller with load-aware query routing based on memory pressure and latency — reduced ingestion latency to sub-millisecond across 100K events</li>
            </ul>
            <div className="tag-list">
              {['Apache Kafka', 'Python', 'C++', 'Redis', 'FastAPI', 'HyperLogLog', 'Count-Min Sketch', 'asyncio', 'XXH64'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="section-header">
          <span className="section-title">Skills</span>
          <div className="section-line"></div>
        </div>
        <div className="card">
          <div className="skills-grid">
            <div>
              <div className="skill-category">Languages</div>
              <div className="skill-tags">
                {['C++', 'C', 'Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'Bash'].map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="skill-category">Web Development</div>
              <div className="skill-tags">
                {['Next.js', 'React.js', 'Node.js', 'Express.js', 'Three.js', 'Flask', 'TailwindCSS'].map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="skill-category">Databases</div>
              <div className="skill-tags">
                {['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'].map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="skill-category">Libraries</div>
              <div className="skill-tags">
                {['NumPy', 'Pandas', 'OpenCV', 'Pybind11', 'Shadcn UI', 'Zod', 'Recharts'].map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="skill-category">Tools & Platforms</div>
              <div className="skill-tags">
                {['Git', 'Linux', 'Docker', 'CMake', 'VS Code', 'Google Colab'].map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="section-header">
          <span className="section-title">Experience</span>
          <div className="section-line"></div>
        </div>
        <div className="card">
          <div className="exp-header">
            <div>
              <div className="exp-title">Coordinator</div>
              <div className="exp-org">Cybros — LNMIIT <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>(Formerly Problem Setter & Tester)</span></div>
            </div>
            <div className="exp-period">Jaipur, India<br />Jun 2024 – Present</div>
          </div>
          <ul className="project-bullets">
            <li>Created 20+ original problems on Codeforces (Polygon) for beginner-level participants</li>
            <li>Verified 50+ peer-authored problems for logic, correctness, and difficulty balance</li>
            <li>Mentored 100+ peers via live sessions on algorithmic techniques and contest preparation</li>
            <li>Led end-to-end programming contests for 200+ participants, coordinating problem sets and logistics</li>
          </ul>
        </div>
      </section>

      {/* AWARDS */}
      <section id="awards">
        <div className="section-header">
          <span className="section-title">Honors & Awards</span>
          <div className="section-line"></div>
        </div>
        <div className="award-list">
          {[
            { icon: '⚡', text: 'Specialist on Codeforces (Max Rating: 1493) and Knight on LeetCode (Peak Rating: 2008)' },
            { icon: '🌍', text: 'Global Rank 884 in Codeforces Round 1029 (Div. 3) and 806 in LeetCode Weekly Contest 456' },
            { icon: '🌍', text: 'Global Rank 93 in CodeChef Starters 199 Div 3' },
            { icon: '💯', text: 'Solved over 1000 coding problems across LeetCode, Codeforces, and other platforms' },
            { icon: '🏆', text: 'Awarded INR 25,000 Merit Scholarship for academic excellence (CGPA 9.46+)' },
            { icon: '🎓', text: 'Ranked 8th out of 251 in Y-23 CSE batch at LNMIIT' },
            { icon: '🥇', text: '1st in Mathematical Olympiad at 27th Children\'s Science Congress, Himachal Pradesh' },
            { icon: '📜', text: 'Cleared NTSE Stage 1 with 9th state rank in Himachal Pradesh' },
          ].map((a, i) => (
            <div key={i} className="award-item">
              <span className="award-icon">{a.icon}</span>
              <span>{a.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>Built by <a href="#">Abhinav Dogra</a> · <a href="mailto:23ucs507@lnmiit.ac.in">23ucs507@lnmiit.ac.in</a></p>
      </footer>
    </>
  );
}
