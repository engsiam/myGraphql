import React from 'react'
import useCharacter from '../hooks/useCharacter'
import './Character.css'
import {useParams} from "react-router";


export default function Character() {
  const {id} = useParams();
  const { loading, data, error } = useCharacter(id)

  if (loading)
    return (
      <div>
        <img
          className="loadingimg"
          src="/src/assets/loading.gif"
          alt="loading"
        />
      </div>
    )
  if (error) return <div>{error.message}</div>

  return (
    <div className="Character">
      <img
        src={data.character.image}
        alt={data.character.name}
        width={300}
        height={300}
      />
      <div className="Character-content">
        <h3>{data.character.name}</h3>
        <p>{data.character.gender}</p>
        <div className="Character-episode">
          {data.character.episode.map((episode) => {
            return (

              <div key={episode.id}>
              {episode.name} - <b>{episode.episode}</b>
              </div>
            );
            
          })}
        </div>
      </div>
    </div>
  )
}
