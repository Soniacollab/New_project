import { useMembers } from './useMembers';
import './App.css';



function App() {
  const { loading, error, data } = useMembers();

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