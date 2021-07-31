import { Acceleration, Direction, Lane } from './enums';

/**
 * describes the changeSpeed slot
 */
export interface ChangeSpeedSlot {
  acceleration?: Acceleration;
  speed?: string;
}

/**
 * describes the changeDirection slot
 */
export interface ChangeDirectionSlot {
  direction: Direction;
}

/**
 * describes the changeLane slot
 */
export interface ChangeLaneSlot {
  direction: Lane;
}
