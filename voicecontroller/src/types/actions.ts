import { Direction, Lane } from './enums';

/**
 * actions the voicecontroller can trigger
 */
export interface Action {
  action: string;
  amount?: number;
  speed?: number;
  direction?: Direction;
  lane?: Lane;
}
