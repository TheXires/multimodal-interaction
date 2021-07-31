import { updateIndicator } from '../components/Controllersection/3d/indicator';
import { Command } from '../types/command';
import { Direction, Lane } from '../types/enums';
import { IndicatorState } from '../types/indicatorState';
import { xDirection } from '../types/xDirection';
import { zDirection } from '../types/zDirection';
import { changeLane, changeDirection, changeVelocity } from './car.service';

/**
 * defines the offset the car has to be moved to be considered in certain state and trigger the underlying command (x Axis)
 */
const horizontalThreshhold = 0.4;
/**
 * defines the offset the car has to be moved to be considered in certain state and trigger the underlying command (z Axis)
 */
const verticalThreshhold = 1.6;
/**
 * last coordinates the drag event sent
 */
let lastDraggedAction: Command;
/**
 * the interval instance handling the updates
 */
let updateInterval: NodeJS.Timeout;

/**
 * this translates the car coordinates to a requested event
 */
export const translateActionFormCoordinates = (x: number, z: number): Command => {
  if (x > horizontalThreshhold) {
    if (z > verticalThreshhold) {
      return {
        horizontal: xDirection.LEFT,
        vertical: zDirection.UP,
      };
    } else if (z < -verticalThreshhold) {
      return {
        horizontal: xDirection.LEFT,
        vertical: zDirection.DOWN,
      };
    } else {
      return {
        horizontal: xDirection.LEFT,
        vertical: zDirection.MIDDLE,
      };
    }
  } else if (x < -horizontalThreshhold) {
    if (z > verticalThreshhold) {
      return {
        horizontal: xDirection.RIGHT,
        vertical: zDirection.UP,
      };
    } else if (z < -verticalThreshhold) {
      return {
        horizontal: xDirection.RIGHT,
        vertical: zDirection.DOWN,
      };
    } else {
      return {
        horizontal: xDirection.RIGHT,
        vertical: zDirection.MIDDLE,
      };
    }
  } else {
    if (z > verticalThreshhold) {
      return {
        horizontal: xDirection.MIDDLE,
        vertical: zDirection.UP,
      };
    } else if (z < -verticalThreshhold) {
      return {
        horizontal: xDirection.MIDDLE,
        vertical: zDirection.DOWN,
      };
    } else {
      return {
        horizontal: xDirection.MIDDLE,
        vertical: zDirection.MIDDLE,
      };
    }
  }
};

/**
 * handle the input event and its data to send requested action to server. Processes the drag END event
 */
export const handleDragEnd = (x: number, z: number): void => {
  clearInterval(updateInterval);
  updateInterval = undefined as unknown as NodeJS.Timeout;
  updateIndicator(selectIndicator({ horizontal: xDirection.MIDDLE, vertical: zDirection.MIDDLE }));
  const action = translateActionFormCoordinates(x, z);
  if (action.vertical == zDirection.MIDDLE) {
    if (action.horizontal == xDirection.LEFT) {
      changeLane(Lane.LEFT);
    } else if (action.horizontal == xDirection.RIGHT) {
      changeLane(Lane.RIGHT);
    }
  } else if (action.vertical == zDirection.UP) {
    if (action.horizontal == xDirection.LEFT) {
      changeDirection(Direction.LEFT);
    } else if (action.horizontal == xDirection.RIGHT) {
      changeDirection(Direction.RIGHT);
    }
  }
};

/**
 * handle the input event and its data to send requested action to server. Processes the ONGOING drag event
 */
export const handleDragOngoing = (x: number, z: number): void => {
  lastDraggedAction = translateActionFormCoordinates(x, z);
  updateIndicator(selectIndicator(lastDraggedAction));
  if (!updateInterval) {
    updateInterval = setInterval(() => {
      if (lastDraggedAction.horizontal == xDirection.MIDDLE) {
        if (lastDraggedAction.vertical == zDirection.UP) {
          changeVelocity(5);
        } else if (lastDraggedAction.vertical == zDirection.DOWN) {
          changeVelocity(-5);
        }
      }
    }, 750);
  }
};

/**
 * determines the currently needed indicator icon based on a command
 * @param action The command to analyze
 * @returns An indicator state
 */
const selectIndicator = (action: Command): IndicatorState => {
  if (action.vertical == zDirection.MIDDLE) {
    if (action.horizontal == xDirection.LEFT) {
      return IndicatorState.LANE_CHANGE_LEFT;
    } else if (action.horizontal == xDirection.RIGHT) {
      return IndicatorState.LANE_CHANGE_RIGHT;
    }
  } else if (action.vertical == zDirection.UP) {
    if (action.horizontal == xDirection.LEFT) {
      return IndicatorState.TURN_LEFT;
    } else if (action.horizontal == xDirection.RIGHT) {
      return IndicatorState.TURN_RIGHT;
    } else if (action.horizontal == xDirection.MIDDLE) {
      return IndicatorState.INCREASE_VELOCITY;
    }
  } else if (action.vertical == zDirection.DOWN && action.horizontal == xDirection.MIDDLE) {
    return IndicatorState.DECREASE_VELOCITY;
  }
  return IndicatorState.NONE;
};
