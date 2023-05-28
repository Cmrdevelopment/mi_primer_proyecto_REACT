import "./App.css";

import React from "react";

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
  const [characterList, setCharacterList] = React.useState(charactersMock);
  React.useEffect(() => {
    (async () => {
      let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
        (res) => res.json()
      );

      setCharacterList(data.results);
    })();
  }, []);
  return (
    <>
      <h1>Rickand and Morty</h1>
      {characterList.map((character) => (
        <div className="gallery" key={character.id}>
          <img src={character.image} alt={character.name} />
          <h2>id: {character.id}</h2>
          <h2>status: {character.status}</h2>
          <h2>name: {character.name}</h2>
          <h2>origin: {character.origin.name}</h2>
        </div>
      ))}
    </>
  );
};

export default App;
