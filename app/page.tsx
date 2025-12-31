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
          <section>experience</section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
