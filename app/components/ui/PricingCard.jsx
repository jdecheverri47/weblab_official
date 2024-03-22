import styles from "../../styles/PricingCard.module.css";
import ButtonWeb from "./ButtonWeb";
import "../../styles/transitions.css";
import { SwitchTransition, CSSTransition } from "react-transition-group";

function PricingCard({
  cardName,
  cardPrice,
  description,
  backgroundColor,
  afterLabel,
  children,
  keyNumber,
}) {
  return (
    <>
      <div
        className={styles.pricing_card}
        style={{ "--background": backgroundColor }}
      >
        <div className={styles.pricing_card_container}>
          <SwitchTransition>
            <CSSTransition
              classNames="fade"
              key={keyNumber}
              addEndListener={(node, done) =>
                addEventListener("transitionend", done, false)
              }
            >
              <div className={styles.text_container}>
                <h2>{cardName}</h2>
                <h1>
                  {cardPrice}
                  <span className={styles.after_label}>{afterLabel}</span>
                </h1>
                <p>{description}</p>
              </div>
            </CSSTransition>
          </SwitchTransition>
          <SwitchTransition>
            <CSSTransition
              classNames="fade"
              key={keyNumber}
              addEndListener={(node, done) =>
                addEventListener("transitionend", done, false)
              }
            >
              <div className={styles.perks_container}>{children}</div>
            </CSSTransition>
          </SwitchTransition>

          <SwitchTransition>
            <CSSTransition
              classNames="fade"
              key={keyNumber}
              addEndListener={(node, done) =>
                addEventListener("transitionend", done, false)
              }
            >
              <div className={styles.button_container}>
                <button className={styles.button_cards}>Get Now!</button>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
    </>
  );
}

export default PricingCard;
