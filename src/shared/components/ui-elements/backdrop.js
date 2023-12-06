import React from 'react';
import { createPortal } from 'react-dom';

import './backdrop.css';

export const Backdrop = (props) => {
  const { onClick } = props;

  return createPortal(
    <div className='backdrop' onClick={onClick}></div>,
    document.getElementById('backdrop-hook')
  );
};

