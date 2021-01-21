import React, { useState } from 'react';
import { useQuery, InMemoryCache } from '@apollo/client';
import { useLocation, useHistory } from 'react-router-dom';
import { toCamelCase } from '../utils/globalFunction';
import { POKEMON_DETAIL, MY_POKEMON_LIST } from '../graphql/query/pokemons';

import Button from '../components/button';
import client from '../graphql/client/client';
import { Loading, PokemonDetail } from '../styles/styles';

function PokemonDetailPage() {
  const location = useLocation();
  const history = useHistory();
  const [probability, setProbability] = useState(0);
  const pokemon = location.pathname.split('/')[2];
  const { loading, data } = useQuery(POKEMON_DETAIL, {
    variables: {
      name: pokemon,
    },
  });

  if (loading) return <Loading />;

  const p = data.pokemon;
  return (
    <PokemonDetail>
      <img src={location.state.image} />
      <span>{toCamelCase(p.name)}</span>
      <div>Probability {`${probability}%`}</div>
      <Button
        onClick={() => {
          if (probability < 90) {
            setProbability(probability + 10);
          }

          if (probability > 50) {
            let pokemonName = prompt('Enter your pokemon name: ');
            const oldData = client.readQuery({ query: MY_POKEMON_LIST });

            let pokemon = {
              id: location.state.id,
              name: pokemonName,
              image: location.state.image,
            };

            if (oldData === null) {
              client.writeQuery({
                query: MY_POKEMON_LIST,
                data: {
                  pokemons: [pokemon],
                },
              });
              history.push({
                pathname: '/my-pokemon',
                state: {
                  name: p.name,
                },
              });
            } else {
              oldData.pokemons.forEach((pk) => {
                if (pk.name === pokemonName) {
                  pokemonName = prompt(
                    'Name already exist !, Enter another pokemon name: ',
                  );
                }
              });
              pokemon = {
                id: location.state.id,
                name: pokemonName,
                image: location.state.image,
              };

              client.writeQuery({
                query: MY_POKEMON_LIST,
                data: {
                  pokemons: [...oldData.pokemons, pokemon],
                },
              });
              history.push({
                pathname: '/my-pokemon',
                state: {
                  name: p.name,
                },
              });
            }
          }
        }}
      >
        CATCH
      </Button>
      {/* Profile */}
      <div className="label">
        <span>Profile</span>
      </div>
      <div className="section">
        <div className="monster-profile">
          <strong>Height: </strong> <span>{p.height}</span>
          <strong style={{ textAlign: 'right' }}>Weight: </strong>{' '}
          <span style={{ textAlign: 'right' }}>{p.weight}</span>
        </div>
        <div className="monster-profile">
          <strong>Abilities: </strong>{' '}
          <div className="ability">
            {p.abilities.map((ab) => {
              return <span>{ab.ability.name}</span>;
            })}
          </div>
          <strong style={{ textAlign: 'right' }}>Remain </strong>{' '}
          <span style={{ textAlign: 'right' }}>{p.base_experience}</span>
        </div>
      </div>
      {/* Moves */}
      <div className="label">
        <span>Moves</span>
      </div>
      <div className="monster-move">
        {p.moves.map((move) => {
          return <span>{move.move.name}</span>;
        })}
      </div>
    </PokemonDetail>
  );
}

export default PokemonDetailPage;
