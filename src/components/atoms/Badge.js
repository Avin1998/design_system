import React from 'react';
import './Badge.css';

export default function Badge({ children, variant = 'default', glow = false, ...props }) {
  return (
    <span className={`badge badge-${variant} ${glow ? 'glow' : ''}`} {...props}>
      {children}
    </span>
  );
}