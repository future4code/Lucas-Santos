import { useEffect, useState } from 'react';

import { PokemonsList } from '../components/PokemonsList';
import { api } from '../services/api';
import './styles.scss';

type PokeTypes = {
  name: string
}

export const App = () => {
  const [pokemons, setPokemons] = useState<PokeTypes[]>([])
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

  const newPokemons = pokemons.map((pokemon) => {
    return pokemon.name
  }).sort()

  return (
    <div className="app">
      <img src="https://i2.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png" alt="pokemon" />
      <div>
        <p>Selecione o Pokémon</p>
        <select onChange={(e) => setPokemonName(e.target.value)}>
          <option value={''}>Selecione</option>
          {newPokemons.map((pokemon) => {
            return (
              <option key={pokemon} value={pokemon}>
                {pokemon}
              </option>
            );
          })}
        </select>
      </div>
      {pokemonName && <PokemonsList pokemonName={pokemonName} />}  
    </div>
  );
}
