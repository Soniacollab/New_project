import React from 'react';
import { useGetTriplesQuery } from '@0xintuition/graphql';
import './App.css';



function App() {
  const { error, data } = useGetTriplesQuery({
  where: {
    predicate: { label: { _eq: "is member of" } },
    object: { label: { _eq: "The Hacking Project" } },
  }
});

  
   if (error) return <p>Erreur : {error.message}</p>;
   if (!data || !data.triples) return <p>Chargement...</p>;

  return (
    <div className="App">
      <h1>Membres de The Hacking Project (Apollo)</h1>
      <ul>
        {data.triples.map((triple, i) => (
          <li key={i}>{triple.subject.label}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;