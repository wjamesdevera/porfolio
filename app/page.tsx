import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import s from "./page.module.scss";
export default function Home() {
  return (
    <div className={s.page_layout}>
      <Navbar />
      <main className={s.main}>
        <div className={s.wrapper}>
          <article className={`${s.hero_section} ${s.section}`}>
            <div className={s.hero}>
              <h1 className={s.title}>Winfrey De Vera</h1>
              <p className={s.sub_title}>
                Designing the Engine Behind the Interface.
              </p>
              <p className={s.description}>
                I am a Software Engineer based in Quezon City, dedicated to
                building high-performance web applications. I thrive at the
                intersection of clean code and impactful community-driven
                technology
              </p>
            </div>
          </article>

          <article className={`${s.section} ${s.about_me} ${s.border_bottom}`}>
            <div className={s.wrapper}>
              <h2 className={s.title}>about me</h2>
              <p>
                With over two years of experience in the digital space, I
                currently serve as the Lead Frontend Developer at TomasinoWeb.
                In this role, I bridge the gap between creative design and
                technical execution, mentoring a team of developers to bring
                ambitious digital visions to life.
              </p>
              <p>
                Beyond professional development, I am passionate about
                knowledge-sharing. I’ve spent my free time tutoring fellow
                college students in programming, helping them navigate the
                complexities of modern software development.
              </p>
              <p>Here are some technologies I have been working on:</p>
              <div className={s.skill_list}>
                <ul className={s.left}>
                  <li>python</li>
                  <li>react.js</li>
                  <li>javascrip es6+</li>
                </ul>
                <ul className={s.right}>
                  <li>typescript</li>
                  <li>java</li>
                  <li>php</li>
                </ul>
              </div>
              <p>
                When I'm not at my desk, you'll find me exploring the latest
                tech trends, and curated playlists. I believe the discipline of
                working out mirrors the persistence needed in coding: progress
                is a result of consistency.
              </p>
            </div>
          </article>

          <article
            className={`${s.section} ${s.experience} ${s.border_bottom}`}
          >
            <div className={s.wrapper}>
              <h2 className={s.title}>experience</h2>
              <div className={s.content}>
                <div className={s.experience_container}>
                  <div className="">
                    <h3 className={s.title}>TomasinoWeb</h3>
                  </div>
                  <div className={s.description}>
                    <p className={s.role}>
                      lead frontend Developer @tomasinoweb
                    </p>
                    <p className={s.date}>jul 2025 - present</p>
                    <p className={s.task}>
                      Lead UI development for multiple web projects, mentoring
                      junior developers, and overseeing frontend code quality.
                    </p>
                    <p className={s.task}>
                      Collaborated with backend and design teams to improve
                      accessibility, performance, and overall user experience.
                    </p>
                    <p className={s.task}>
                      Championed Git-based collaboration workflows and conducted
                      code reviews for maintainable releases
                    </p>
                  </div>
                </div>

                <div className={s.experience_container}>
                  <div className="">
                    <h3 className={s.title}>TomasinoWeb</h3>
                  </div>
                  <div className={s.description}>
                    <p className={s.role}>frontend Developer @tomasinoweb</p>
                    <p className={s.date}>jul 2023 - jul 2025</p>
                    <p className={s.task}>
                      Contributed to Lamona and Thomscore, university
                      publication platforms
                    </p>
                    <p className={s.task}>
                      Developed responsive and accessible UI components,
                      improving design consistency and load efficiency
                    </p>
                    <p className={s.task}>
                      Enhanced cross-functional collaboration by aligning
                      frontend and backend integration.
                    </p>
                  </div>
                </div>

                <div className={s.experience_container}>
                  <div className="">
                    <h3 className={s.title}>TwinCJ Glamping Resort</h3>
                  </div>
                  <div className={s.description}>
                    <p className={s.role}>
                      system analyst @twincj glamping resort
                    </p>
                    <p className={s.date}>aug 2024 - mar 2025</p>
                    <p className={s.task}>
                      Designed and analyzed a full-stack booking system using
                      Express.js and Next.js.
                    </p>
                    <p className={s.task}>
                      Managed Git workflows, pull requests, and version control
                      for clean and stable builds
                    </p>
                    <p className={s.task}>
                      Deployed the frontend to Vercel and the API backend to
                      DigitalOcean, ensuring system availability and scalability
                    </p>
                    <p className={s.task}>
                      streamlined the customer booking and admin management
                      process, reducing manual tasks
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
