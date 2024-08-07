import React from "react";

import type { FaceTypes } from "../../types";
import styles from "./styles.module.scss";
import classnames from "classnames";

interface RobotProps {
  face: FaceTypes;
  x: number;
  y: number;
}
const Robot: React.FC<RobotProps> = ({ face, x, y }) => {
  const classes = classnames(
    styles.robot,
    styles[`facing--${face.toLowerCase()}`]
  );
  return (
    <div className={styles.wrapper}>
      <div className={classes} data-dir={face} data-pos={[x, y]} />
    </div>
  );
};

export default Robot;
