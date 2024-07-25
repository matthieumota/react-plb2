import { useState } from 'react';
import Instructions from '../components/Instructions';

function StateChallenge() {
  const [animals, setAnimals] = useState([
    {
      name: 'Trolilo',
      type: 'troll'
    },
    {
      name: 'Sheep sheep',
      type: 'poisson'
    },
    {
      name: 'Donald Trump',
      type: 'orange'
    }
  ]);
  const [newAnimalType, setNewAnimalType] = useState('');
  const [newAnimalName, setNewAnimalName] = useState('');

  const saveAnimal = () => {
    setAnimals([
      ...animals,
      {
        name: newAnimalName,
        type: newAnimalType
      }
    ]);

    setNewAnimalName('');
    setNewAnimalType('');
  }

  return (
    <div style={{ marginBottom: 50 }}>
      <Instructions>
        <ul>
          <li>
            Afficher la liste des animaux dans une boucle map. Pour chaque animal, afficher son nom et son type.
          </li>
          <li>
            Créer un input texte qui permet de saisir la valeur du state newAnimalType. Quand sa valeur change, la valeur de newAnimalType est mise à jour.
          </li>
          <li>
            Créer un autre input texte qui permet de saisir la valeur du state newAnimalName, avec le même fonctionnement.
          </li>
          <li>
            Créer une fonction vide saveAnimal, et l'appeler depuis un bouton que vous créerez également.
          </li>
          <li>
            Remplir la fonction saveAnimal tel que les valeurs newAnimalType et newAnimalName sont sauvegardées dans un nouvel objet animal,
            que la fonction mette le tableau des animaux à jour en ajoutant le nouvel objet animal à la fin et qu'une fois que l'animal a été créé,
            la fonction vide les champs newAnimalType et newAnimalName.
          </li>
          <li>Bon courage !</li>
        </ul>
      </Instructions>

      <ul>
        {animals.map((animal, index) =>
          <li key={index}>{animal.name} de type {animal.type}</li>
        )}
      </ul>

      <input type="text" value={newAnimalType} onChange={(e) => setNewAnimalType(e.target.value)} />
      <input type="text" value={newAnimalName} onChange={(e) => setNewAnimalName(e.target.value)} />

      {JSON.stringify({ newAnimalName, newAnimalType })}
      {newAnimalName.trim().length > 0 && newAnimalType.trim().length > 0 &&
        <button onClick={saveAnimal}>Sauvegarder</button>
      }

      <button onClick={saveAnimal} disabled={newAnimalName.trim().length <= 0 || newAnimalType.trim().length <= 0}>Sauvegarder</button>
    </div>
  )
}

export default StateChallenge;
