export const getTokenFromLocalStorage = (): string => {
  const user = localStorage.getItem('user');

  const { token } = JSON.parse(user as string);

  return token;
};
export const getUserIdFromLocalStorage = (): string => {
  const user = localStorage.getItem('user');

  const { user: id } = JSON.parse(user as string);

  return id;
};
