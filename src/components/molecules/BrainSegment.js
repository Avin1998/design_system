import './BrainSegment.css';

// Brain interaction states
export const BRAIN_STATES = {
  INACTIVE: 'inactive',
  HOVER: 'hover', 
  ACTIVE: 'active',
  COMPLETED: 'completed'
};

export default function BrainSegment({
  segment,
  state = BRAIN_STATES.INACTIVE,
  isHovered = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
  showTooltip = true,
  className = ''
}) {
  const {
    id,
    name,
    description,
    svgPath,
    color,
    hoverColor,
    activeColor,
    completedColor
  } = segment;

  // Determine colors based on state
  const getSegmentColor = () => {
    switch (state) {
      case BRAIN_STATES.COMPLETED:
        return completedColor;
      case BRAIN_STATES.ACTIVE:
        return activeColor;
      case BRAIN_STATES.HOVER:
        return hoverColor;
      default:
        return color;
    }
  };

  const getSegmentOpacity = () => {
    switch (state) {
      case BRAIN_STATES.INACTIVE:
        return 0.0;
      case BRAIN_STATES.HOVER:
        return 0.8;
      case BRAIN_STATES.ACTIVE:
        return 0.9;
      case BRAIN_STATES.COMPLETED:
        return 1;
      default:
        return 0.6;
    }
  };

  const segmentClasses = `brain-segment brain-segment-${state} ${isHovered ? 'brain-segment-hovered' : ''} ${className}`;

  const segmentElement = (
    <g className={segmentClasses}>
      <path
        d={svgPath}
        fill={getSegmentColor()}
        fillOpacity={getSegmentOpacity()}
        stroke={getSegmentColor()}
        strokeWidth="1"
        strokeOpacity="0.8"
        className="brain-segment-path"
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{
          cursor: onClick ? 'pointer' : 'default',
          filter: state === BRAIN_STATES.COMPLETED 
            ? `drop-shadow(0 0 8px ${completedColor}40)` 
            : state === BRAIN_STATES.ACTIVE
            ? `drop-shadow(0 0 6px ${activeColor}60)`
            : 'none'
        }}
      />
      
      {/* Status indicator */}
      {state === BRAIN_STATES.COMPLETED && (
        <circle
          cx={segment.position.x + segment.position.width/2}
          cy={segment.position.y + segment.position.height/2}
          r="3"
          fill={completedColor}
          className="brain-segment-indicator"
        />
      )}
    </g>
  );

  return segmentElement;
}