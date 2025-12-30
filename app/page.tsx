import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import s from "./page.module.scss";
export default function Home() {
  return (
    <div className={s.page_layout}>
      <Navbar />
      <main className={s.main}>
        <div className={s.wrapper}></div>
      </main>
      <Footer />
    </div>
  );
}
