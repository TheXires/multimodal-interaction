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
  
  /**
   * directions the vehicle can turn to
   */
  export enum Direction {
    LEFT = 'links',
    RIGHT = 'rechts',
    STRAIGHT = 'geradeaus',
  }
  
  /**
   * the relative lanes the vehicle can change the lane to
   */
  export enum Lane {
    LEFT = 'links',
    RIGHT = 'rechts',
  }
  