import { OPEN_MENU, CLOSE_MENU } from './types';
import { MenuAction } from '../interfaces/actions';

export const openMenu = (): MenuAction => {
  return {
    type: OPEN_MENU,
    payload: true,
  };
};
export const closeMenu = (): MenuAction => {
  return {
    type: CLOSE_MENU,
    payload: false,
  };
};
