import { useState } from 'react'
import Button from './components/Button'
import List from './components/List'
import Text from './components/Text'
import EventListener3 from './exercices/EventListener3'
import State2 from './exercices/State2'
import StateChallenge from './exercices/StateChallenge'
import Clock from './components/Clock'

function App() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <h1>React + Vite</h1>
      <Button emoji="🐈‍⬛">Envoyer</Button>
      <Button emoji="🐆">Valider</Button>
      <Button>Confirmer</Button>
      <Text />
      <Button onClick={() => setDisplay(!display)}>
        Afficher / Cacher l'horloge
      </Button>
      {display && <Clock />}
      <List />
      {/*<State2 />*/}
      <StateChallenge />
      <EventListener3 />
    </div>
  )
}

export default App
