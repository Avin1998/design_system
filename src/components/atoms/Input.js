
import React from 'react';

export default function Input(props) {
  return (
    <input 
      className="bg-gray-800/50 border border-gray-600/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 
                focus:outline-none focus:border-blue-primary/50 focus:ring-2 focus:ring-blue-primary/20 
                transition-all duration-300 text-sm" 
      {...props} 
    />
  );
}
