export type InitialState<T> = {
  entity: T;
  isLoading: boolean;
  error: boolean | null;
};

export type Currency = {
  name: string;
  value: number;
};
