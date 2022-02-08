export const getTokenFromLocalStorage = (): string => {
  const user = localStorage.getItem('user');

  const { token } = JSON.parse(user as string);

  return token;
};
