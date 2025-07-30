// Component Showcase Demo Data
export const componentDemos = {
  atoms: {
    title: 'Atomic Components',
    components: [
      {
        name: 'Icons',
        demo: {
          type: 'icons',
          title: 'Icons with Hover Effects',
          icons: ['FaHome', 'FaCode', 'FaStar', 'FaFire', 'FaBell', 'FaUser'],
          size: 24
        }
      },
      {
        name: 'Badges',
        demo: {
          type: 'badges',
          title: 'Badges with Variants',
          badges: [
            { variant: 'success', text: 'Success' },
            { variant: 'warning', text: 'Warning' },
            { variant: 'danger', text: 'Danger' },
            { variant: 'default', text: 'Default' },
            { variant: 'success', text: 'With Glow', glow: true }
          ]
        }
      },
      {
        name: 'Ratings',
        demo: {
          type: 'ratings',
          title: 'Star Ratings',
          ratings: [
            { label: 'Medium (4/5):', value: 4, difficulty: 'medium' },
            { label: 'Hard (5/5):', value: 5, difficulty: 'hard' },
            { label: 'Achieved (3/5):', value: 3, difficulty: 'medium', achieved: true }
          ]
        }
      }
    ]
  },
  molecules: {
    title: 'Molecular Components',
    components: [
      {
        name: 'Metrics Cards',
        demo: {
          type: 'metrics',
          title: 'Metrics with Trends',
          cards: [
            {
              title: 'Problems Solved',
              value: '24',
              icon: 'FaCheckCircle',
              color: '#0066ff',
              trend: { direction: 'up', value: '+3 today' }
            },
            {
              title: 'Streak',
              value: '15 days',
              icon: 'FaFire',
              color: '#ff9800'
            },
            {
              title: 'Success Rate',
              value: '85%',
              icon: 'FaPercentage',
              color: '#ffd966',
              trend: { direction: 'down', value: '-2%' }
            }
          ]
        }
      }
    ]
  },
  animations: {
    title: 'Premium Animations',
    components: [
      {
        name: 'Hover Effects',
        demo: {
          type: 'animations',
          title: 'Interactive Elements',
          elements: [
            { type: 'button', variant: 'primary', className: 'pulse-btn', text: 'Pulse Effect' },
            { type: 'glow-card', icon: 'FaStar', size: 32, className: 'rotating-icon', text: 'Rotating Glow' },
            { type: 'bounce-card', icon: 'FaTrophy', size: 28, text: 'Achievement Bounce' }
          ]
        }
      }
    ]
  }
};