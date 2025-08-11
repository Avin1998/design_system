

interface ConnectionLineProps {
  startPos: { x: number; y: number };
  endPos: { x: number; y: number };
  className?: string;
  color?: string;
  strokeWidth?: number;
}

export default function ConnectionLine({ 
  startPos, 
  endPos, 
  className = '',
  color = '#4f9cf9',
  strokeWidth = 2
}: ConnectionLineProps) {
  const width = Math.abs(endPos.x - startPos.x);
  const height = Math.abs(endPos.y - startPos.y);
  const svgWidth = width + 20;
  const svgHeight = height + 20;
  
  const adjustedStart = {
    x: startPos.x < endPos.x ? 10 : svgWidth - 10,
    y: startPos.y < endPos.y ? 10 : svgHeight - 10
  };
  
  const adjustedEnd = {
    x: endPos.x < startPos.x ? 10 : svgWidth - 10,
    y: endPos.y < startPos.y ? 10 : svgHeight - 10
  };

  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      style={{
        left: Math.min(startPos.x, endPos.x) - 10,
        top: Math.min(startPos.y, endPos.y) - 10,
        width: svgWidth,
        height: svgHeight,
        zIndex: 5
      }}
    >
      <line
        x1={adjustedStart.x}
        y1={adjustedStart.y}
        x2={adjustedEnd.x}
        y2={adjustedEnd.y}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray="4,4"
        className="animate-pulse"
      />
      <circle
        cx={adjustedEnd.x}
        cy={adjustedEnd.y}
        r="4"
        fill={color}
      />
    </svg>
  );
}