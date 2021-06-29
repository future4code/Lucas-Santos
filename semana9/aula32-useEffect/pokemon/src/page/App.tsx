import { useEffect, useState } from 'react';

import { PokemonsList } from '../components/PokemonsList';
import { api } from '../services/api';
import './App.css';

export const App = () => {
  const [pokemons, setPokemons] = useState([])
  const [pokemonName, setPokemonName] = useState('')
  
  useEffect(() => {
    handlePokemonsName()
  }, [pokemonName])

  const handlePokemonsName = async () => {
    try {
      const res = await api.get('?limit=151')
      setPokemons(res.data.results)
    } catch (err) {
      alert(err)
    }
  }

  return (
    <div className="App">
      <select onChange={(e) => setPokemonName(e.target.value)}>
        <option value={''}>Selecione</option>
        {pokemons.map(({name}) => {
          return (
            <option key={name} value={name}>
              {name}
            </option>
          );
        })}
      </select>
      {/* {pokemonName && <PokemonsList pokemonName={pokemonName} />}       */}
      <PokemonsList pokemonName={pokemonName} />     
    </div>
  );
}
