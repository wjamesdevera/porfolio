import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import s from "./page.module.scss";
export default function Home() {
  return (
    <div className={s.page_layout}>
      <Navbar />
      <main className={s.main}>
        <div className={s.wrapper}>
          <section className={`${s.hero_section} ${s.section}`}>
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
          </section>
          <section className={`${s.section} ${s.about_me}`}>
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
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
