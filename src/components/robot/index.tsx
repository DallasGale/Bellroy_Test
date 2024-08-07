import React from "react";
import { RobotProps } from "../../types";
import styles from "./styles.module.scss";
import classnames from "classnames";

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
