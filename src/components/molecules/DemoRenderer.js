import React from 'react';
import Icon from '../atoms/Icon';
import Badge from '../atoms/Badge';
import Rating from '../atoms/Rating';
import Button from '../atoms/Button';
import MetricsCard from './MetricsCard';

// Component to render different types of demos based on data
export default function DemoRenderer({ demo }) {
  switch (demo.type) {
    case 'icons':
      return (
        <div className="demo-section">
          <h4>{demo.title}</h4>
          <div className="icon-grid">
            {demo.icons.map((iconName, index) => (
              <Icon key={index} name={iconName} size={demo.size} />
            ))}
          </div>
        </div>
      );

    case 'badges':
      return (
        <div className="demo-section">
          <h4>{demo.title}</h4>
          <div className="badge-grid">
            {demo.badges.map((badge, index) => (
              <Badge key={index} variant={badge.variant} glow={badge.glow}>
                {badge.text}
              </Badge>
            ))}
          </div>
        </div>
      );

    case 'ratings':
      return (
        <div className="demo-section">
          <h4>{demo.title}</h4>
          <div className="rating-grid">
            {demo.ratings.map((rating, index) => (
              <div key={index} className="rating-item">
                <span>{rating.label}</span>
                <Rating 
                  value={rating.value} 
                  difficulty={rating.difficulty} 
                  achieved={rating.achieved}
                />
              </div>
            ))}
          </div>
        </div>
      );

    case 'metrics':
      return (
        <div className="demo-section">
          <h4>{demo.title}</h4>
          <div className="metrics-demo-grid">
            {demo.cards.map((card, index) => (
              <MetricsCard
                key={index}
                title={card.title}
                value={card.value}
                icon={card.icon}
                color={card.color}
                trend={card.trend}
              />
            ))}
          </div>
        </div>
      );

    case 'animations':
      return (
        <div className="demo-section">
          <h4>{demo.title}</h4>
          <div className="animation-demo">
            {demo.elements.map((element, index) => {
              if (element.type === 'button') {
                return (
                  <Button 
                    key={index}
                    variant={element.variant} 
                    className={element.className}
                  >
                    {element.text}
                  </Button>
                );
              } else if (element.type === 'glow-card') {
                return (
                  <div key={index} className="glow-card">
                    <Icon name={element.icon} size={element.size} className={element.className} />
                    <span>{element.text}</span>
                  </div>
                );
              } else if (element.type === 'bounce-card') {
                return (
                  <div key={index} className="bounce-card">
                    <Icon name={element.icon} size={element.size} />
                    <span>{element.text}</span>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      );

    default:
      return <div>Unknown demo type: {demo.type}</div>;
  }
}