import { useState } from 'react';

// props = { a, b, c, d, e }
// function Button(props) {
// function Button({ a, b, c, ...props }) { // ...props est un objet qui est { d, e }

function Button({ children, emoji = '✅', onClick = () => {}, ...props }) {
  const [enabled, setEnabled] = useState(false);

  const toggle = () => {
    setEnabled(!enabled);
    onClick && onClick(); // Une props peut être une fonction
  };

  return (
    <button onClick={toggle} {...props}>
      {children} {enabled && emoji}
    </button>
  );
}

export default Button;
