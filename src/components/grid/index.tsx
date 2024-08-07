import { FaceTypes } from "../../types";
import GridRow from "../gridRow";
import Robot from "../robot";
import styles from "./styles.module.scss";

interface GridProps {
  face: FaceTypes;
  pos: { x: number; y: number };
}
const Grid = ({ face, pos }: GridProps) => {
  return (
    <div className={styles.grid}>
      <Robot face={face} x={pos.x} y={pos.y} />
      <GridRow cellIds={[4.4, 3.4, 2.4, 1.4, 0.4]} />
      <GridRow cellIds={[4.3, 3.3, 2.3, 1.3, 0.3]} />
      <GridRow cellIds={[4.2, 3.2, 2.2, 1.2, 0.2]} />
      <GridRow cellIds={[4.1, 3.1, 2.1, 1.1, 0.1]} />
      <GridRow cellIds={[4.0, 3.0, 2.0, 1.0, 0.0]} />
    </div>
  );
};

export default Grid;
