import { ContainerCard, Card } from '../styles/styles';
import client from '../graphql/client/client';
import { toCamelCase } from '../utils/globalFunction';
import { MY_POKEMON_LIST } from '../graphql/query/pokemons';

function MyPokemonListPage() {
  const data = client.readQuery({ query: MY_POKEMON_LIST });

  if (data === null) {
    return (
      <h2 style={{ color: '#f15a29', textAlign: 'center', marginTop: '70px' }}>
        You don't have a pokemon yet.
      </h2>
    );
  }

  return (
    <ContainerCard>
      {data.pokemons.map((pokemon) => {
        return (
          <Card>
            <img src={pokemon.image} />
            <h3>{toCamelCase(pokemon.name)}</h3>
          </Card>
        );
      })}
    </ContainerCard>
  );
}

export default MyPokemonListPage;
