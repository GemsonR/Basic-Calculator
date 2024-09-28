import styles from "./animate.module.css";
export default function Animate({ isOn }) {
  return (
    <div
      className={`${
        !isOn ? styles.animationContainer : styles.animationContainerOff
      }`}
    >
      <div className={`${!isOn ? styles.first : styles.animateOff}`}></div>
      <div className={`${!isOn ? styles.second : styles.animateOff}`}></div>
      <div className={`${!isOn ? styles.third : styles.animateOff}`}></div>
      <div className={`${!isOn ? styles.fourth : styles.animateOff}`}></div>
    </div>
  );
}
