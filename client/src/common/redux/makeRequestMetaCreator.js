const makeRequestMetaCreator = apiFunctionName => {
  return () => ({apiFunction: apiFunctionName});
};

export default makeRequestMetaCreator;
