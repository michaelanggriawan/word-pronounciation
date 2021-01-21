import { useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { toCamelCase } from '../utils/globalFunction';
import client from '../graphql/client/client';
import { POKEMON_LIST, MY_POKEMON_LIST } from '../graphql/query/pokemons';

import { Loading, Card, ContainerCard } from '../styles/styles';

function PokemonListPage() {
  const history = useHistory();
  const { loading, data, error } = useQuery(POKEMON_LIST, {
    variables: {
      limit: 200,
      offset: 1,
    },
  });

  const ownedTotal = (id) => {
    const owned = client.readQuery({ query: MY_POKEMON_LIST });
    if (owned === null) return 0;
    
    return owned.pokemons.filter((mp) => mp.id === id).length;
  };

  if (loading) return <Loading />;

  return (
    <ContainerCard>
      {data.pokemons.results.map((pokemon, index) => {
        return (
          <Card
            onClick={() =>
              history.push({
                pathname: `/pokemon-detail/${pokemon.name}`,
                state: {
                  image: pokemon.image,
                  id: index,
                },
              })
            }
          >
            <img src={pokemon.image} />
            <h3>{toCamelCase(pokemon.name)}</h3>
            <span>owned: {ownedTotal(index)}</span>
          </Card>
        );
      })}
    </ContainerCard>
  );
}

export default PokemonListPage;
