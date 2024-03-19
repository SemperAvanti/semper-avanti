export interface ZodErrorMessage {
    too_small: boolean;
    exact: boolean;
    inclusive: boolean;
    message: string;
    minimum: number;
    path: string[];
    type: string;
  }