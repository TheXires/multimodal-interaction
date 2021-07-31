import { Acceleration, Direction, Lane } from './enums';

export interface ChangeSpeedSlot {
  acceleration?: Acceleration;
  speed?: string;
}

export interface ChangeDirectionSlot {
  direction: Direction;
}

export interface ChangeLaneSlot {
  direction: Lane;
}
