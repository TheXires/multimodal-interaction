import { Acceleration, Direction, Lane } from './enums';

/**
 * describes the changeVelocity slot
 */
export interface ChangeVelocitySlot {
  acceleration?: Acceleration;
  velocity?: string;
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
