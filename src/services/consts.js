export const UNKNOWN_USER = "unknown";
export const isValidUserId = (userId) => {
  return userId && userId !== UNKNOWN_USER;
};
