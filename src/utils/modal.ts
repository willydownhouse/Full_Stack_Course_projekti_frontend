import { useEffect } from 'react';
import { IAppAction, IAppDispatch } from '../interfaces/actions';

export const handleCloseModal = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
  dispatch: IAppDispatch,
  action: () => IAppAction
) => {
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (ref.current && !ref.current.contains(event.target)) {
        dispatch(action());
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};
