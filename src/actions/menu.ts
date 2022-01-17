import { OPEN_MENU, CLOSE_MENU } from './types';

export const openMenu = () => {
  return {
    type: OPEN_MENU,
    payload: true,
  };
};
export const closeMenu = () => {
  return {
    type: CLOSE_MENU,
    payload: false,
  };
};
