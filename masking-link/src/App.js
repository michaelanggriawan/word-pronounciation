import { BrowserRouter as Router, Switch, HashRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import NotFound from './pages/notfound';

function App() {
	return (
		<Router history={HashRouter}>
			<Switch>
				<Route exact path='/:slug' component={Home} />
				<Route path='*' component={NotFound} />
			</Switch>
		</Router>
	);
}

export default App;
