import { Direction, Lane } from './enums';

/**
 * actions the voicecontroller can trigger
 */
export interface Action {
  action: string;
  amount?: number;
  velocity?: number;
  direction?: Direction;
  lane?: Lane;
}
