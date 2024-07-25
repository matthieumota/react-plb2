import Button from './components/Button'
import List from './components/List'
import Text from './components/Text'
import State2 from './exercices/State2'

function App() {
  return (
    <div>
      <h1>React + Vite</h1>
      <Button emoji="🐈‍⬛">Envoyer</Button>
      <Button emoji="🐆">Valider</Button>
      <Button>Confirmer</Button>
      <Text />
      <List />
      <State2 />
    </div>
  )
}

export default App
