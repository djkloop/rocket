const jsonObject = (data: string): boolean => {
  try {
    data = JSON.parse(data);
  } catch (error) {
    return false;
  }
  return typeof data === "object" && data !== null;
};

export default jsonObject;
