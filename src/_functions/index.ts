import { FaceTypes } from "../types";

type Position = { x: number; y: number };

const GRID_SIZE = 5;

const MOVE_DELTA: Record<FaceTypes, Position> = {
  [FaceTypes.n]: { x: 0, y: 1 },
  [FaceTypes.e]: { x: -1, y: 0 },
  [FaceTypes.s]: { x: 0, y: -1 },
  [FaceTypes.w]: { x: 1, y: 0 },
};

const ROTATE_LEFT: Record<FaceTypes, FaceTypes> = {
  [FaceTypes.n]: FaceTypes.w,
  [FaceTypes.e]: FaceTypes.n,
  [FaceTypes.s]: FaceTypes.e,
  [FaceTypes.w]: FaceTypes.s,
};

const ROTATE_RIGHT: Record<FaceTypes, FaceTypes> = {
  [FaceTypes.n]: FaceTypes.e,
  [FaceTypes.e]: FaceTypes.s,
  [FaceTypes.s]: FaceTypes.w,
  [FaceTypes.w]: FaceTypes.n,
};

export function move(face: FaceTypes, x: number, y: number): Position {
  const delta = MOVE_DELTA[face];
  if (!delta) {
    throw new Error(`Invalid face value: ${face}`);
  }
  const newX = x + delta.x;
  const newY = y + delta.y;

  return {
    x: Math.min(Math.max(newX, 0), GRID_SIZE - 1),
    y: Math.min(Math.max(newY, 0), GRID_SIZE - 1),
  };
}

export function left(face: FaceTypes): FaceTypes {
  return ROTATE_LEFT[face];
}

export function right(face: FaceTypes): FaceTypes {
  return ROTATE_RIGHT[face];
}
