import { Router } from 'react-router';
import Routes from './Routes';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from './components/hooks/themeContext';
import Background from './components/Layout/background';

const history = createBrowserHistory();

function App() {
	return (
		<ThemeProvider>
			<Background>
				<Router history={history}>
					<Routes />
				</Router>
			</Background>
		</ThemeProvider>
	);
}

export default App;
