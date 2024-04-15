const isDev = (): boolean => {
  return import.meta.env.MODE === "development";
};

export default isDev;
