import type { IDimension, ICylinderDimension, ITorusDimension, IPosition } from './../../shared/interfaces';
import { Material, Vec3 } from 'cannon-es';
import * as CANNON from 'cannon-es';

const config = {
  WINZONE_WIDTH: 50,
  WINZONE_HEIGHT: 10,
  WINZONE_DEPTH: 10,
  BLOCK_DEPTH: 10,
  WIN_PERCENTAGE_LIMIT: 80,
  PLANET_WIDTH: 200,
  PLANET_DEPTH: 200,
};

// Creates the physical plane boundry of a Plane
// Should probably be here since classes other than Game might wanna use it
export function createBoundry(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
  rotation,
  shape,
  material: CANNON.Material
): CANNON.Body {
  const body = new CANNON.Body({
    mass: 0,
    shape: shape,
    material,
  });
  body.quaternion.setFromAxisAngle(new CANNON.Vec3(x1, y1, z1), rotation);
  body.position = new Vec3(x2, y2, z2);
  return body;
}

export function getDimensions(width: number, height: number, depth: number): IDimension {
  return { width, height, depth };
}

export function getCylinderDimensions(
  radiusTop: number,
  radiusBottom: number,
  height: number,
  radialSegments: number
): ICylinderDimension {
  return { radiusTop, radiusBottom, height, radialSegments };
}

export function getTorusrDimensions(
  radius: number,
  tube: number,
  radialSegments: number,
  tubularSegments: number,
  arc: number
): ITorusDimension {
  return { radius, tube, radialSegments, tubularSegments, arc };
}

export function getPosition(x: number, y: number, z: number): IPosition {
  return { x, y, z };
}

export default config;
