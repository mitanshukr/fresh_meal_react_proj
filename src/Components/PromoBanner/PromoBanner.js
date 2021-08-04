import style from "./PromoBanner.module.css";

const PromoBanner = (props) => {
  return (
    <section className={style.message}>
      <h2>Delicious Food, Delivered to You</h2>
      <p>
        Choose your favorite meal from the catalogue of more than 85 Delicious
        Items, made with love by our Expert Chefs.
      </p>
      <p>
        Get your food delivered at your door step with No Delivery Fees, with
        freshness retained! We follow all the Safety guidelines and main proper
        hygiene.
      </p>
    </section>
  );
};

export default PromoBanner;
