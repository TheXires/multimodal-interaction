/**
 * Picovoice inference
 */
export interface Inference {
  isUnderstood: boolean;
  intent: string;
  slots: any;
}
