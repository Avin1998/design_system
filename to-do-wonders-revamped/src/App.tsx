import Badge from './components/atoms/Badge'
import Icon from './components/atoms/Icon'
import Button from './components/atoms/Button'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Design System Migration Demo</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-xl mb-4">Button Components</h2>
          <div className="flex gap-4 flex-wrap items-center">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="minimal">Minimal</Button>
            <Button variant="back">Back</Button>
            <Button variant="integration" icon="🔗" subtitle="Connect your account">
              GitHub Integration
            </Button>
            <Button variant="primary" glow>Glow Effect</Button>
          </div>
        </section>

        <section>
          <h2 className="text-xl mb-4">Badge Components</h2>
          <div className="flex gap-4 flex-wrap">
            <Badge variant="default">Default</Badge>
            <Badge variant="success" icon="completed">Success</Badge>
            <Badge variant="warning" status="active">Active</Badge>
            <Badge variant="danger" status="locked" icon="stop">Locked</Badge>
            <Badge glow status="completed" icon="completed">Completed</Badge>
          </div>
        </section>

        <section>
          <h2 className="text-xl mb-4">Icon Components</h2>
          <div className="flex gap-4 items-center">
            <Icon name="brain" size={24} variant="brain" />
            <Icon name="completed" size={24} variant="status" />
            <Icon name="mentor" size={24} variant="mentor" />
            <Icon name="hint" size={24} variant="hint" />
            <Icon name="functional" size={24} />
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
