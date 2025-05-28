import { gql, useQuery } from '@apollo/client';

// La requête GraphQL, exportable aussi si besoin
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

// Hook personnalisé qui utilise useQuery avec la requête
export function useMembers() {
  return useQuery(GET_MEMBERS);
}