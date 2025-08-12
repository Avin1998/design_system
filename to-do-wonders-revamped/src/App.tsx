import Badge from './components/atoms/Badge'
import Icon from './components/atoms/Icon'
import Button from './components/atoms/Button'
import Container from './components/atoms/Container'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Container 
        title="Design System Migration Demo" 
        subtitle="Showcasing migrated components in TypeScript + Tailwind"
        maxWidth="wide"
        padding="spacious"
      >
        <div className="space-y-8">
          <section>
            <h2 className="text-xl mb-4">Container Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Container maxWidth="narrow" padding="compact" title="Narrow Container" centerContent>
                <p className="text-gray-300">This is a narrow, compact container with centered content.</p>
              </Container>
              <Container maxWidth="default" padding="default" title="Default Container">
                <p className="text-gray-300">This is a default container with normal padding.</p>
              </Container>
            </div>
          </section>

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
      </Container>
    </div>
  )
}

export default App
