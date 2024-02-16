import styles from "../../styles/PricingCard.module.css";
import ButtonWeb from "./ButtonWeb";

function PricingCard({
  cardName,
  cardPrice,
  description,
  backgroundColor,
  afterLabel,
  children,
}) {
  return (
    <div
      className={styles.pricing_card}
      style={{ "--background": backgroundColor }}
    >
      <div className={styles.pricing_card_container}>
        <div className={styles.text_container}>
          <h2>{cardName}</h2>
          <h1>
            {cardPrice}
            <span className={styles.after_label}>{afterLabel}</span>
          </h1>
          <p>{description}</p>
        </div>
        <div className={styles.perks_container}>{children}</div>
        <div className={styles.button_container}>
          <button className={styles.button_cards}>Get Now!</button>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
