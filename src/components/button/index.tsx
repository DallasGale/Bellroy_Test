import styles from "./styles.module.scss";

interface ButtonProps {
  label: React.ReactNode;
  onClick: () => void;
}

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
