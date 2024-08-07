import { GridProps } from "@/types";
import styles from "./styles.module.scss";

const GridRow = ({ cellIds }: GridProps) => (
  <div className={styles.row}>
    <div className={styles.cell} data-id={cellIds[0]} />
    <div className={styles.cell} data-id={cellIds[1]} />
    <div className={styles.cell} data-id={cellIds[2]} />
    <div className={styles.cell} data-id={cellIds[3]} />
    <div className={styles.cell} data-id={cellIds[4]} />
  </div>
);

export default GridRow;
