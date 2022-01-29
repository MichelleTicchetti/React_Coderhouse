import "../../Styles/Styles.scss";

export const ItemListContainer = ({ greeting }) => {
  return (
    <section className="item-list-container">
      <div class="hero-image">
        <h2>{greeting}</h2>
      </div>
    </section>
  );
};
