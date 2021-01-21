import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import Client from './graphql/client/client';

import PokemonListPage from './pages/PokemonListPage';
import PokemonDetailPage from './pages/PokemonDetailPage';
import MyPokemonDetailPage from './pages/MyPokemonListPage';

import Header from './components/header';
import Footer from './components/footer'

import { Container } from './styles/styles';

function App() {
  return (
    <ApolloProvider client={Client}>
      <Router history={HashRouter}>
        <Container>
          <Header />
          <Switch>
            <Route exact path="/" component={PokemonListPage} />
            <Route path="/pokemon-detail/:name" component={PokemonDetailPage} />
            <Route path="/my-pokemon" component={MyPokemonDetailPage} />
          </Switch>
          <Footer />
        </Container>
      </Router>
    </ApolloProvider>
  );
}

export default App;
