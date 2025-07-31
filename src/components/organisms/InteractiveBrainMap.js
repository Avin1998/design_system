import React, { useState, useEffect } from 'react';
import BrainSegment from '../molecules/BrainSegment';
import { brainSegments, brainDimensions, brainStates } from '../../data/brainSegments';
import './InteractiveBrainMap.css';

export default function InteractiveBrainMap({
  activeSegmentId = null,
  hoveredSegmentId = null,
  completedSegments = [],
  onSegmentClick,
  onSegmentHover,
  onSegmentLeave,
  className = ''
}) {
  const [internalHoveredSegment, setInternalHoveredSegment] = useState(null);

  // Determine segment state
  const getSegmentState = (segmentId) => {
    if (completedSegments.includes(segmentId)) {
      return brainStates.COMPLETED;
    }
    if (activeSegmentId === segmentId) {
      return brainStates.ACTIVE;
    }
    if (hoveredSegmentId === segmentId || internalHoveredSegment === segmentId) {
      return brainStates.HOVER;
    }
    return brainStates.INACTIVE;
  };

  const handleSegmentClick = (segmentId) => {
    if (onSegmentClick) {
      onSegmentClick(segmentId);
    }
  };

  const handleSegmentMouseEnter = (segmentId) => {
    setInternalHoveredSegment(segmentId);
    if (onSegmentHover) {
      onSegmentHover(segmentId);
    }
  };

  const handleSegmentMouseLeave = (segmentId) => {
    setInternalHoveredSegment(null);
    if (onSegmentLeave) {
      onSegmentLeave(segmentId);
    }
  };

  const brainMapClasses = `interactive-brain-map ${className}`;

  return (
    <div className={brainMapClasses}>
      {/* Brain Title */}
      <div className="brain-map-header">
        <h3 className="brain-map-title">System Design Brain</h3>
        <p className="brain-map-subtitle">
          Click or hover over regions to explore requirements
        </p>
      </div>

      {/* SVG Brain */}
      <div className="brain-svg-container">
        <svg
          viewBox={brainDimensions.viewBox}
          className="brain-svg"
          width="100%"
          height="100%"
        >
          {/* Brain outline/background */}
          <defs>
            <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#1a1a2f', stopOpacity: 0.8 }} />
              <stop offset="50%" style={{ stopColor: '#2d2d44', stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: '#404066', stopOpacity: 0.8 }} />
            </linearGradient>
            
            <filter id="brainGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* =================================================================
              ANATOMICAL BRAIN SVG - SCIENTIFICALLY ACCURATE
              =================================================================
              Using anatomically correct brain visualization with 
              four distinct lobes: Frontal, Parietal, Temporal, Occipital
              ================================================================= */}
          
          {/* Anatomical Brain with Four Distinct Lobes */}
          <g className="brain-base">
            
            {/* Parietal lobe (top-back of brain - processing and integration) */}
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M563.929 53.9262C576.911 51.929 589.893 52.9276 601.877 59.918C639.825 52.9276 667.787 58.9194 684.764 77.8934C698.745 74.8975 713.724 78.8921 727.705 88.8784C766.652 105.855 794.613 127.825 816.583 152.791C852.534 167.77 866.515 185.746 868.512 205.719C887.486 219.699 896.011 236.676 904 255.65L855.5 302.5L829.5 329.5V353L554 312.5L522 318.5L490.5 347L481 339.5L455.078 347L432.5 318.5L446 302.5L455.078 286L463 255.65L473.5 223L481 188L508 161L490.5 128L498.5 107.5L553 88.8784L563.929 53.9262Z"
              fill="rgba(79, 156, 249, 0.15)"
              stroke="rgba(79, 156, 249, 0.4)"
              strokeWidth="2"
              className="parietal-lobe anatomical-region"
            />
            
            {/* Frontal Lobe (front of brain - planning and decision making) */}
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M570.814 51.1146L555.834 89.0626C491.921 94.0558 477.941 114.028 497.913 145.985C509.897 159.966 487.927 171.949 481.935 187.927C475.943 207.9 468.953 228.871 458.967 249.843C458.967 303.769 428.009 299.774 431.005 318.748L452.975 347.709L431.005 365.684L361.5 383.66L324 417L313.5 455.5L277 491L267.5 520.5L262.236 546.437C167.365 561.416 116.435 553.427 102.454 526.464C73.4939 516.478 55.5185 484.522 49.5267 430.595C34.5472 414.617 33.5485 399.638 38.5417 383.66C36.5444 377.668 35.5458 371.676 39.5403 365.684C31.5513 339.72 35.5458 325.739 40.539 312.757C42.5362 292.784 52.5226 275.807 67.5021 260.828C66.5034 235.862 81.483 222.88 101.456 214.891C117.434 163.96 189.335 129.008 218.296 121.019C237.27 104.042 263.234 94.0558 295.191 90.0613C311.169 83.0708 326.148 78.0777 341.128 76.0804C369.09 58.105 401.046 55.1091 433.002 55.1091C458.967 46.1214 485.93 43.1255 513.891 49.1173L570.814 51.1146Z"
              fill="rgba(79, 156, 249, 0.15)"
              stroke="rgba(79, 156, 249, 0.4)"
              strokeWidth="2"
              className="frontal-lobe anatomical-region"
            />
            
            {/* Temporal lobe (side of brain - memory and processing) */}
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M563.929 311.574L826 352L839.5 401.5C806 435 791.835 498.5 747.5 519.5C703.165 540.5 747.5 516.889 711.727 536.266C766.518 506.588 656.835 554.444 747.5 519.5C732.52 528.488 726.706 531.273 711.727 536.266C687.76 549.249 662.794 553.243 636.829 553.243C612.862 557.238 591.891 560.234 582.903 553.243C567.923 565.227 554.941 570.22 543.956 573.216C526.979 583.202 512.999 586.198 499.018 589.194C487.034 618.154 458.074 630.138 418.128 630.138C391.165 642.122 364.202 643.12 336.24 618.154C316.268 608.168 297.294 596.184 287.307 572.217C280.317 564.228 274.325 557.238 268.333 549.249C265.337 521.287 272.328 496.321 293.299 475.35C313.272 464.365 316.268 435.404 328.251 415.432C351.22 388.469 388.169 377.484 427.116 369.495C444.093 352.518 464.066 340.534 494.025 342.531C511.001 325.555 530.974 310.575 563.929 311.574Z"
              fill="rgba(79, 156, 249, 0.15)"
              stroke="rgba(79, 156, 249, 0.4)"
              strokeWidth="2"
              className="temporal-lobe anatomical-region"
            />
            
            {/* Occipital lobe (back of brain - visual processing and organization) */}
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M905.02 255.054C874.518 280.847 857.086 296.996 832.12 326.955C825.13 351.921 829.124 376.887 839.111 401.853C831.298 411.562 817.679 419.907 812.27 429.291C809.201 434.616 794.875 473.936 788.315 477.475C782.316 480.71 776.718 481.159 774.888 487.262C774.664 488.011 763.467 498.25 761.978 499.251C752.532 505.598 748.157 505.289 749.757 507.771C752.08 511.376 752.918 513.75 756.336 515.177C759.753 516.604 786.616 523.998 790.592 523.492C794.655 522.975 810.307 524.762 814.236 524.515C818.091 524.274 823.423 522.425 826.577 521.59C830.581 520.53 836.257 515.616 838.472 515.751C854.968 516.75 874.085 517.088 896.402 514.298C930.667 505.456 915.969 510.11 946.963 492.728C956.949 480.745 964.938 464.767 972.928 436.805C979.918 425.82 978.919 407.844 975.923 390.868C981.915 366.9 970.93 357.913 955.951 340.936C951.956 325.957 946.963 306.982 928.988 292.003C929.986 282.017 924.993 266.038 905.02 255.054Z"
              fill="rgba(79, 156, 249, 0.15)"
              stroke="rgba(79, 156, 249, 0.4)"
              strokeWidth="2"
              className="occipital-lobe anatomical-region"
            />
            
            {/* Brain outline border */}
            <path
              d="M435.829 53.9061C458.876 45.9378 483.054 41.9444 512.204 47.9345C529.191 47.9424 549.129 48.9425 572.011 50.9305C581.692 50.9303 592.975 50.9077 603.325 57.8075C640.537 51.0942 668.922 55.7902 685.6 75.7636C699.483 73.9411 713.625 75.1619 727.729 86.1454C762.668 101.156 792.702 122.152 816.789 151.117C847.1 162.931 868.895 179.034 869.496 204.629C886.206 215.647 900.036 230.651 908.089 254.237C917.868 259.241 924.244 264.838 927.909 271.121C931.499 277.275 932.366 283.88 931.545 290.804C946.196 303.727 956.14 318.789 958.31 339.659C965.577 347.402 973.071 355.205 977.379 363.314C979.602 367.498 981.036 371.862 981.139 376.44C981.237 380.799 980.123 385.229 977.516 389.756C979.918 398.511 981.858 407.417 981.858 415.682C981.858 424.059 979.862 431.928 974.222 438.324C967.071 474.451 950.073 496.347 926.199 508.221C902.503 520.005 872.328 521.763 839.008 518.346C815.603 532.246 787.461 528.211 758.032 518.517C744.918 528.27 728.09 533.241 711.677 538.068C705.324 543.223 695.84 546.975 683.703 549.699C671.345 552.473 656.034 554.227 638.058 555.229C626.644 557.214 615.073 559.226 604.973 559.731C595.62 560.199 587.075 559.41 581.025 555.719C570.31 564.358 558.41 572.101 543.596 575.123C523.634 584.621 510.651 589.719 500.493 591.032C495.153 605.947 484.654 615.711 470.753 621.973C456.636 628.332 438.981 631.098 419.548 632.115C398.963 640.1 382.923 641.416 369.652 638.582C356.445 635.761 346.221 628.879 337.166 620.871C315.072 611.769 296.831 597.583 285.627 574.328C278.923 566.666 272.134 558.887 265.343 548.403C225.872 553.793 189.714 556.976 161.331 554.86C133.286 552.769 111.978 545.444 103.19 528.982C86.8449 524.48 76.6689 509.994 66.9124 494.384C57.821 480.233 50.8097 461.191 48.7073 432.505C47.6267 431.585 46.869 430.265 46.3108 429.074C45.5456 427.442 44.9157 425.509 44.3607 423.782C43.7814 421.98 43.2929 420.438 42.7796 419.328C42.5723 418.88 42.3995 418.595 42.2747 418.428H41.3558L40.8235 417.257C35.872 406.363 33.6367 395.103 38.348 383.748C36.0775 380.439 35.9259 376.923 36.4241 373.684C36.6938 371.932 37.1611 370.204 37.595 368.623C37.9945 367.168 38.3593 365.851 38.596 364.603C33.6655 347.596 32.6554 330.344 40.6858 313.042C42.7765 291.01 52.7422 273.869 67.6146 260.729C67.7632 249.787 70.594 240.197 76.0862 232.405C81.5755 224.618 89.6332 218.755 100.025 215.118C110.332 188.045 131.531 166.066 163.296 147.174C180.484 132.066 200.627 124.993 219.461 119.037C241.569 102.033 266.698 91.9847 295.784 89.9081C308.435 84.0586 324.472 76.0827 339.646 74.9345C369.776 57.9808 404.783 51.9741 435.829 53.9061Z"
              fill="none"
              stroke="rgba(79, 156, 249, 0.5)"
              strokeWidth="3"
              className="brain-outline"
            />
          </g>

          {/* Brain Segments */}
          {Object.entries(brainSegments).map(([key, segment]) => (
            <BrainSegment
              key={segment.id}
              segment={segment}
              state={getSegmentState(segment.id)}
              isHovered={hoveredSegmentId === segment.id || internalHoveredSegment === segment.id}
              onClick={() => handleSegmentClick(segment.id)}
              onMouseEnter={() => handleSegmentMouseEnter(segment.id)}
              onMouseLeave={() => handleSegmentMouseLeave(segment.id)}
              showTooltip={true}
            />
          ))}

          {/* Neural connections (anatomically inspired) - Realistic pathways for new brain */}
          <g className="neural-connections" opacity="0.4">
            {/* Connections between brain regions following neural pathways */}
            
            {/* Frontal to Parietal connection (arcuate fasciculus) */}
            <line 
              x1="450" y1="240" x2="650" y2="220"
              stroke="#4f9cf9" 
              strokeWidth="3"
              strokeDasharray="8,4"
              className="neural-line"
            />
            
            {/* Parietal to Occipital connection (superior longitudinal fasciculus) */}
            <line 
              x1="720" y1="250" x2="820" y2="320"
              stroke="#4f9cf9" 
              strokeWidth="3"
              strokeDasharray="8,4"
              className="neural-line"
            />
            
            {/* Frontal to Temporal connection (uncinate fasciculus) */}
            <line 
              x1="420" y1="280" x2="480" y2="380"
              stroke="#4f9cf9" 
              strokeWidth="3"
              strokeDasharray="6,6"
              className="neural-line"
            />
            
            {/* Temporal to Occipital connection (inferior longitudinal fasciculus) */}
            <line 
              x1="580" y1="430" x2="780" y2="380"
              stroke="#4f9cf9" 
              strokeWidth="3"
              strokeDasharray="6,6"
              className="neural-line"
            />
            
            {/* Central connection (corpus callosum representation) */}
            <line 
              x1="500" y1="200" x2="650" y2="300"
              stroke="#4f9cf9" 
              strokeWidth="4"
              strokeDasharray="10,4"
              className="neural-line major-connection"
            />
            
            {/* Neural nodes at key connection points */}
            <circle cx="450" cy="240" r="4" fill="#66b3ff" opacity="0.8" className="neural-node" />
            <circle cx="650" cy="220" r="4" fill="#66b3ff" opacity="0.8" className="neural-node" />
            <circle cx="480" cy="380" r="4" fill="#66b3ff" opacity="0.8" className="neural-node" />
            <circle cx="780" cy="380" r="4" fill="#66b3ff" opacity="0.8" className="neural-node" />
            <circle cx="575" cy="250" r="6" fill="#66b3ff" opacity="0.9" className="neural-node major-node" />
          </g>
        </svg>
      </div>

      {/* Legend */}
      <div className="brain-legend">
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: brainSegments.functionalRequirements.color }}></div>
          <span>Inactive</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: brainSegments.functionalRequirements.activeColor }}></div>
          <span>Active</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: brainSegments.functionalRequirements.completedColor }}></div>
          <span>Completed</span>
        </div>
      </div>

      {/* Progress Summary */}
      <div className="brain-progress-summary">
        <div className="progress-stat">
          <span className="stat-value">{completedSegments.length}</span>
          <span className="stat-label">Completed</span>
        </div>
        <div className="progress-stat">
          <span className="stat-value">{Object.keys(brainSegments).length - completedSegments.length}</span>
          <span className="stat-label">Remaining</span>
        </div>
        <div className="progress-stat">
          <span className="stat-value">
            {Math.round((completedSegments.length / Object.keys(brainSegments).length) * 100)}%
          </span>
          <span className="stat-label">Progress</span>
        </div>
      </div>
    </div>
  );
}