import { useState } from 'react';
import Button from './Button';

function Instructions({ children }) {
  const [show, setShow] = useState(false);

  return (
    <>
      {show && children}

      <Button onClick={() => setShow(!show)}>Afficher/Masquer les instructions</Button>
    </>
  );
}

export default Instructions;
