import Image from "next/image";
import Logo from "@images/bellroy.svg";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Image src={Logo.src} alt="logo" width={150} height={70} />
    </header>
  );
};

export default Header;
