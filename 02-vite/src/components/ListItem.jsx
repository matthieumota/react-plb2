import { useRef, useState } from 'react';
import Button from './Button';

function ListItemEdit({ item, onConfirm }) {
  const [name, setName] = useState(item.name);
  const input = useRef(); // Me permet d'aller manipuler un élément du DOM

  return (
    <>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} ref={input} />
      <Button onClick={() => onConfirm(input.current.value)}>Modifier</Button>
    </>
  );
}

export default ListItemEdit;
