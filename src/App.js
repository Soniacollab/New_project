import React from 'react';
import { gql, useQuery } from '@apollo/client';
import './App.css';

// Définir la requête GraphQL
const GET_MEMBERS = gql`
  query {
    triples(
      where: {
        predicate: { label: { _eq: "is member of" } }
        object: { label: { _eq: "The Hacking Project" } }
      }
    ) {
      subject {
        label
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_MEMBERS);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

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
