export enum FaceTypes {
  n = "NORTH",
  e = "EAST",
  s = "SOUTH",
  w = "WEST",
}
export type DirectionTypes = "left" | "right";

export interface ButtonProps {
  label: React.ReactNode;
  onClick: () => void;
}

export interface GridProps {
  face: FaceTypes;
  pos: { x: number; y: number };
}

export interface GridProps {
  cellIds: Number[];
}

export interface RobotProps {
  face: FaceTypes;
  x: number;
  y: number;
}
