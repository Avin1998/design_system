
import React from 'react';
import './Button.css';

export default function Button({ children, variant='primary', glow=false, ...props }) {
  const className = `btn btn-${variant}${glow ? ' btn-glow' : ''}${props.className ? ' ' + props.className : ''}`;
  return <button className={className} {...props}>{children}</button>;
}
