import { useEffect, useRef, useState } from 'react';

function Clock() {
  const [date, setDate] = useState(new Date());
  // Une ref permet de conserver une valeur pendant toute la durée de vie du
  // composant
  let oldDate = useRef();

  // Cette fonction est déclenchée quand le DOM est prêt
  useEffect(() => {
    const i = setInterval(() => {
      console.log('ok');
      setDate(new Date());
    }, 1000);

    return () => {
      // Ce code est exécuté quand le composant est détruit
      clearInterval(i);
    }
  }, []); // La fonction s'appelle à chaque fois qu'un state change (par défaut)
  // Si on met [], la fonction s'appelle UNE SEULE fois

  useEffect(() => {
    if (date.getSeconds() % 10 === 0) {
      console.log('DING DONG', date, oldDate.current);
    }

    return () => { // Exécuté avant le code au dessus
      oldDate.current = date;
      console.log('AVANT', date);
    }
  }, [date]);// A chaque mise à jour de la date, on déclenche le useEffect

  return (
    <h1>{date.toLocaleTimeString()}</h1>
  );
}

export default Clock;
