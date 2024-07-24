import { useState } from 'react';
import Button from './Button';

function Text() {
  const [name, setName] = useState('Fiorella');

  return (
    <div>
      {name && <h2>Ton prénom est {name}</h2>}
      <div>
        <Button emoji="" onClick={() => setName('Marina')}>Marina</Button>
        <Button emoji="" onClick={() => setName('')} disabled={!name} id="toto" title="Delete">Supprimer</Button>
      </div>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
    </div>
  );
}

export default Text;
