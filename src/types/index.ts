export type InitialState<T> = {
  entity: T;
  isLoading: boolean;
  error: boolean | null;
};

export type Currencies = Record<string, number>;
