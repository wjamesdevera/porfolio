import s from "./navbar.module.scss";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <header className={s.header} id="header">
      <div className={s.wrapper}>
        <nav className={s.nav}>
          <a href="#header" className={`${s.name}`}>
            Winfrey De Vera
          </a>
          <a href="" className={s.link}>
            about
          </a>
          <a href="" className={s.link}>
            experience
          </a>
          <a href="" className={s.link}>
            projects
          </a>
        </nav>
        <div className={s.iconLinks}>
          {/* Mail Box */}
          <a className={s.icon} href="mailto:w.jamesdevera@gmail.com">
            <Icon icon={`material-symbols:mail`} />
          </a>
          <a
            className={s.icon}
            href="https://github.com/wjamesdevera"
            target="_blank"
          >
            <Icon icon={`mdi:github`} />
          </a>
          <a
            className={s.icon}
            href="https://www.linkedin.com/in/wjamesdevera/"
            target="_blank"
          >
            <Icon icon={`mdi:linkedin`} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
