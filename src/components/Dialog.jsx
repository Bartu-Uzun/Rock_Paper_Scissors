import { forwardRef } from 'react';
import srcIconClose from '../images/icon-close.svg';

const Dialog = forwardRef(function Dialog({ children, toggleDialog }, ref) {
  return (
    <dialog ref={ref} className="dialog">
      <button onClick={toggleDialog} className="dialog-button">
        <img src={srcIconClose} alt="close" />
      </button>
      {children}
    </dialog>
  );
});

export default Dialog;
