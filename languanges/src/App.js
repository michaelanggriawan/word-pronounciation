import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/styles';
import Home from './pages/home';
import Kategori from './pages/kategori';
import Latihan from './pages/latihan';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        {/* <Route exact path="/" component={Home} />
        <Route path="/kategori/:bahasa" component={Kategori} /> */}
        <Route path="/" component={Latihan} />
      </Switch>
    </Router>
  );
}

export default App;
