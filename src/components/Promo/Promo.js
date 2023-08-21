import promo__logo from "../../images/promo__logo.svg";

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <img
        className="promo__logo"
        src={promo__logo}
        alt="OCOCOC"
      />
    </section>
  );
}

export default Promo;
