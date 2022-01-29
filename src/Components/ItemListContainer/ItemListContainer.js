import "../../Styles/Styles.scss";

export const ItemListContainer = ({ greeting }) => {
  return (
    <section className="item-list-container">
      <div className="hero-image">
        <div className="hero-text">
          <h2>{greeting}</h2>
        </div>
      </div>
    </section>
  );
};
