export interface IPosition {
  x: number;
  y: number;
  z: number;
}

export interface IDimension {
  width: number;
  height: number;
  depth: number;
}

export enum SocketEvent {
  USER_CONNECTED = 'userConnected',
  CURRENT_USERS = 'currentUsers',
  USER_DISCONNECTED = 'userDisconnect',
  UPDATE_STATE = 'updateState',
  PLAYER_DIED = 'playerDied',
}

export interface ICurrentUsers {
  users: string[];
}

export interface IStateUpdate {
  position: IPosition;
  velocity: IPosition;
}

export interface IConnected {
  username: string;
}

export interface ICylinderDimension {
  radiusTop: number;
  radiusBottom: number;
  height: number;
  radialSegments: number;
}

export interface ITorusDimension {
  radius: number;
  tube: number;
  radialSegments: number;
  tubularSegments: number;
  arc: number;
}

export interface IHighscore {
  collectionName: string;
  username: string;
  time: number;
  score?: number;
}
