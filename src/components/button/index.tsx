import { ButtonProps } from "@/types";
import styles from "./styles.module.scss";

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
