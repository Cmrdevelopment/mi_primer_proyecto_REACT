import "./App.css";
import React from "react";
import { getAllCharacters } from "./service/serviceapi";

const charactersMock = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
  },
];

const App = () => {
  // nombre variable, función a cambiar = valor inicial
  // El useState crea un estado cuyo valor inicial es el characterlist y lo cambia en setcharacterList
  const [characterList, setCharacterList] = React.useState(charactersMock);
  // llamada al servicio para llamar a la api
  // El useEffect se utilza para llamar y/o modificar a cualquier dato o servicio externo
  React.useEffect(() => {
    getAllCharacters().then((characters) => setCharacterList(characters));
  }, []);
  // pintamos llamando a cada
  return (
    <>
      <h1>Rickand and Morty</h1>
      {characterList.map((character) => (
        <div className="gallery" key={character.id}>
          <img src={character.image} alt={character.name} />
          <h2>id: {character.id}</h2>
          <h2>status: {character.status}</h2>
          <h2>name: {character.name}</h2>
          {/* <h2>origin: {character.origin.name}</h2> */}
        </div>
      ))}
    </>
  );
};

export default App;
