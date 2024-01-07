import React from 'react'
import useCharacters from '../hooks/useCharacters'
import './CharacterList.css'
import { Link } from 'react-router-dom'

export default function CharacterList() {
  const { loading, data, error } = useCharacters()
  if (loading)
    return (
      <div>
        {' '}
        <img className='loadingimg' src="src/assets/loading.gif" alt="loading" />
      </div>
    )
  if (error) return <div>{error.message}</div>
  console.log({ data, loading, error })
  return (
    <div className="CharacterList">
      {data.characters.results.map((char) => (
        <Link to={`${char.id}`} key={char.id}>
          <img src={char.image} alt={char.name} />
          <h3>{char.name}</h3>
          <h4>{char.gender}</h4>
        </Link>
      ))}
    </div>
  )
}
