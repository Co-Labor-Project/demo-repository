const useEmpty = (obj) => {
  if (obj.constructor === Object && Object.keys(obj).length === 0) {
    return true;
  }
  return false;
};

export default useEmpty;
