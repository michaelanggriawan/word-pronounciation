import { gql } from '@apollo/client';

export const POKEMON_LIST = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`;

export const POKEMON_MOVE = gql`
	query move($move: String!) {
		move(move: $move) {
			response
		}
	}
`;

export const POKEMON_DETAIL = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      base_experience
      abilities {
        ability {
          url
          name
        }
      }
      name
      height
      weight
      status
      stats {
        base_stat
        effort
        stat {
          url
          name
        }
      }
      moves {
        move {
          name
          url
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`;

export const MY_POKEMON_LIST = gql`
  query MyPokemon {
    pokemons {
      id
      name
      image
    }
  }
`;
