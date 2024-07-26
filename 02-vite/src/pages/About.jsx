import { useState } from 'react';
import Ajax from '../components/Ajax';
import Ajax1 from '../components/Ajax1';
import Button from '../components/Button';
import Clock from '../components/Clock';
import Lifecycle2 from '../components/Lifecycle2';
import List from '../components/List';
import EventListener3 from '../exercices/EventListener3';
import State2 from '../exercices/State2';
import StateChallenge from '../exercices/StateChallenge';

function About() {
  const [display, setDisplay] = useState(true);

  return (
    <>
      <Button onClick={() => setDisplay(!display)}>
        Afficher / Cacher l'horloge
      </Button>
      {display && <Clock />}
      <Ajax />
      <Lifecycle2 />
      <Ajax1 />
      <List />
      <State2 />
      <StateChallenge />
      <EventListener3 />
    </>
  );
}

export default About;
