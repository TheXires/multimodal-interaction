import { xDirection } from './xDirection';
import { zDirection } from './zDirection';

/**
 * Drag command
 */
export interface Command {
  horizontal: xDirection;
  vertical: zDirection;
}
