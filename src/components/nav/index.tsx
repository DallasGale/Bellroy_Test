import Button from "../button";
import styles from "./styles.module.scss";
import { NavProps } from "./types";
import { IconRotate2, IconRotateClockwise2 } from "@tabler/icons-react";

const Nav = ({ face, pos, handleLeft, handleMove, handleRight }: NavProps) => {
  return (
    <nav className={styles.nav}>
      <Button label={<IconRotate2 size={30} />} onClick={handleLeft} />
      <Button
        label={`CLICK TO MOVE ${face}`}
        onClick={() => handleMove(face, pos.x, pos.y)}
      />
      <Button
        label={<IconRotateClockwise2 size={30} />}
        onClick={handleRight}
      />
    </nav>
  );
};

export default Nav;
