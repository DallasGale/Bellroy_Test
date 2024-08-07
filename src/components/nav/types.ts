import { FaceTypes } from "../../types";

export interface NavProps {
  face: FaceTypes;
  pos: { x: number; y: number };
  handleMove: (face: FaceTypes, x: number, y: number) => void;
  handleLeft: () => void;
  handleRight: () => void;
}
