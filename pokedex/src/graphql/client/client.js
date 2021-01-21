import { ApolloClient, InMemoryCache } from '@apollo/client';
import Config from '../../constant/config';

const client = new ApolloClient({
	uri: Config.API_ENDPOINT,
	cache: new InMemoryCache(),
});

export default client;
