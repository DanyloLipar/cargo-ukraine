export const delayedImport = <T>(importFunc: () => Promise<T>) => {
  return new Promise<T>((resolve) => {
    setTimeout(() => {
      importFunc().then(resolve);
    }, 1500);
  });
};
