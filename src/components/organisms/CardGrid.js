
import React from 'react';
import Card from '../molecules/Card';
import './CardGrid.css';
export default function CardGrid({ items }) {
  return (
    <div className="grid">
      {items.map((item, i) => (
        <Card
          key={i}
          title={item.name}
          description={item.description || `Learn the ${item.name} pattern for coding interviews.`}
          progress={item.progress ?? 0}
          status={item.status || 'inactive'}
          image={item.image}
        />
      ))}
    </div>
  );
}
