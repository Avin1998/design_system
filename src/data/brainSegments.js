// Brain Segments Data for Interactive Brain Map
// Maps brain regions to system design question categories

export const brainSegments = {
  // Main brain regions for system design mapped to anatomically accurate brain areas
  functionalRequirements: {
    id: 'functional-requirements',
    name: 'Functional Requirements',
    position: { x: 350, y: 200, width: 180, height: 120 },
    color: '#4f9cf9',
    hoverColor: '#6ba6f5',
    activeColor: '#0066ff',
    completedColor: '#00c853',
    description: 'Core features and capabilities',
    // Frontal lobe area - responsible for planning and decision making
    // Positioned at the front of the brain (left side in profile view)
    svgPath: "M570.814 51.1146L555.834 89.0626C491.921 94.0558 477.941 114.028 497.913 145.985C509.897 159.966 487.927 171.949 481.935 187.927C475.943 207.9 468.953 228.871 458.967 249.843C458.967 303.769 428.009 299.774 431.005 318.748L452.975 347.709L431.005 365.684L361.5 383.66L324 417L313.5 455.5L277 491L267.5 520.5L262.236 546.437C167.365 561.416 116.435 553.427 102.454 526.464C73.4939 516.478 55.5185 484.522 49.5267 430.595C34.5472 414.617 33.5485 399.638 38.5417 383.66C36.5444 377.668 35.5458 371.676 39.5403 365.684C31.5513 339.72 35.5458 325.739 40.539 312.757C42.5362 292.784 52.5226 275.807 67.5021 260.828C66.5034 235.862 81.483 222.88 101.456 214.891C117.434 163.96 189.335 129.008 218.296 121.019C237.27 104.042 263.234 94.0558 295.191 90.0613C311.169 83.0708 326.148 78.0777 341.128 76.0804C369.09 58.105 401.046 55.1091 433.002 55.1091C458.967 46.1214 485.93 43.1255 513.891 49.1173L570.814 51.1146Z",
    anatomicalRegion: 'Frontal Lobe'
  },
  
  nonFunctionalRequirements: {
    id: 'non-functional-requirements', 
    name: 'Non-Functional Requirements',
    position: { x: 550, y: 150, width: 200, height: 160 },
    color: '#4f9cf9',
    hoverColor: '#6ba6f5', 
    activeColor: '#0066ff',
    completedColor: '#00c853',
    description: 'Performance, scalability, reliability',
    // Parietal lobe area - responsible for processing and integration
    // Positioned at the top-back of the brain
    svgPath: "M563.929 53.9262C576.911 51.929 589.893 52.9276 601.877 59.918C639.825 52.9276 667.787 58.9194 684.764 77.8934C698.745 74.8975 713.724 78.8921 727.705 88.8784C766.652 105.855 794.613 127.825 816.583 152.791C852.534 167.77 866.515 185.746 868.512 205.719C887.486 219.699 896.011 236.676 904 255.65L855.5 302.5L829.5 329.5V353L554 312.5L522 318.5L490.5 347L481 339.5L455.078 347L432.5 318.5L446 302.5L455.078 286L463 255.65L473.5 223L481 188L508 161L490.5 128L498.5 107.5L553 88.8784L563.929 53.9262Z",
    anatomicalRegion: 'Parietal Lobe'
  },

  capacityEstimation: {
    id: 'capacity-estimation',
    name: 'Capacity Estimation', 
    position: { x: 400, y: 350, width: 250, height: 180 },
    color: '#4f9cf9',
    hoverColor: '#6ba6f5',
    activeColor: '#0066ff', 
    completedColor: '#00c853',
    description: 'Scale, users, storage, bandwidth',
    // Temporal lobe area - responsible for memory and processing
    // Positioned at the side-bottom of the brain
    svgPath: "M563.929 311.574L826 352L839.5 401.5C806 435 791.835 498.5 747.5 519.5C703.165 540.5 747.5 516.889 711.727 536.266C766.518 506.588 656.835 554.444 747.5 519.5C732.52 528.488 726.706 531.273 711.727 536.266C687.76 549.249 662.794 553.243 636.829 553.243C612.862 557.238 591.891 560.234 582.903 553.243C567.923 565.227 554.941 570.22 543.956 573.216C526.979 583.202 512.999 586.198 499.018 589.194C487.034 618.154 458.074 630.138 418.128 630.138C391.165 642.122 364.202 643.12 336.24 618.154C316.268 608.168 297.294 596.184 287.307 572.217C280.317 564.228 274.325 557.238 268.333 549.249C265.337 521.287 272.328 496.321 293.299 475.35C313.272 464.365 316.268 435.404 328.251 415.432C351.22 388.469 388.169 377.484 427.116 369.495C444.093 352.518 464.066 340.534 494.025 342.531C511.001 325.555 530.974 310.575 563.929 311.574Z",
    anatomicalRegion: 'Temporal Lobe'
  },

  highLevelDesign: {
    id: 'high-level-design',
    name: 'High-Level Design',
    position: { x: 750, y: 280, width: 180, height: 160 },
    color: '#4f9cf9',
    hoverColor: '#6ba6f5',
    activeColor: '#0066ff',
    completedColor: '#00c853', 
    description: 'Architecture and system components',
    // Occipital lobe area - responsible for visual processing and organization
    // Positioned at the back of the brain (right side in profile view)
    svgPath:"M905.02 255.054C874.518 280.847 857.086 296.996 832.12 326.955C825.13 351.921 829.124 376.887 839.111 401.853C831.298 411.562 817.679 419.907 812.27 429.291C809.201 434.616 794.875 473.936 788.315 477.475C782.316 480.71 776.718 481.159 774.888 487.262C774.664 488.011 763.467 498.25 761.978 499.251C752.532 505.598 748.157 505.289 749.757 507.771C752.08 511.376 752.918 513.75 756.336 515.177C759.753 516.604 786.616 523.998 790.592 523.492C794.655 522.975 810.307 524.762 814.236 524.515C818.091 524.274 823.423 522.425 826.577 521.59C830.581 520.53 836.257 515.616 838.472 515.751C854.968 516.75 874.085 517.088 896.402 514.298C930.667 505.456 915.969 510.11 946.963 492.728C956.949 480.745 964.938 464.767 972.928 436.805C979.918 425.82 978.919 407.844 975.923 390.868C981.915 366.9 970.93 357.913 955.951 340.936C951.956 325.957 946.963 306.982 928.988 292.003C929.986 282.017 924.993 266.038 905.02 255.054Z",
    anatomicalRegion: 'Occipital Lobe'
  }
};

// Mapping of questions to brain segments
export const questionToBrainMapping = {
  'functional-requirements': 'functionalRequirements',
  'non-functional-requirements': 'nonFunctionalRequirements', 
  'capacity-estimation': 'capacityEstimation',
  'high-level-design': 'highLevelDesign'
};

// Brain SVG viewBox and dimensions (matching anatomical brain.svg)
export const brainDimensions = {
  viewBox: '0 0 1024 731',
  width: 400,
  height: 300
};

// Brain interaction states
export const brainStates = {
  INACTIVE: 'inactive',
  HOVER: 'hover', 
  ACTIVE: 'active',
  COMPLETED: 'completed'
};