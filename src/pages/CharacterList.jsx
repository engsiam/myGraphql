import { gql, useQuery } from "@apollo/client";
import React from "react";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
        gender
      }
    }
  }
`;

export default function CharacterList() {
  const { loading, data, error } = useQuery(GET_CHARACTERS);
  if (loading) return <div>Loading......</div>;
  if (error) return <div>{error.message}</div>;
  console.log({ data, loading, error });
  return (
    <div className="CharacterList">
      {data.characters.results.map((char) => (
        <div key={char.id}>
          <img src={char.image} alt={char.name} />
          <h3>{char.name}</h3>
          <h4>{char.gender}</h4>
        </div>
      ))}
    </div>
  );
}
