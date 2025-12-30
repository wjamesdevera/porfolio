import s from "./footer.module.scss";
const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.wrapper}>
        <div className="">
          <p>bult and designed by winfrey de vera</p>
          <p>all rights reserverd &#169;</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
