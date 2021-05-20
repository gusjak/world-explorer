import { v4 } from 'uuid';
import { writable } from 'svelte/store';
import type { GameWorld } from './frontendInterfaces';
const users = [
  'Kimball',
  'Alegherix',
  'TestUser',
  'WhateverFace',
  'Something',
  'else',
  'anooothar',
];

interface IScore {
  username: string;
  score: number;
  elapsedTime: number;
  world: GameWorld;
  boosts: number;
  jumps: number;
  winnerName: string;
}

const GameStore = writable<IScore>({
  score: 0,
  elapsedTime: 0,
  world: null,
  username: null,
  boosts: 3,
  jumps: 4,
  winnerName: null,
});

export default GameStore;
