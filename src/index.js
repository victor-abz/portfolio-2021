import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { ThemeProvider } from './components/hooks/themeContext';
import Background from './components/Layout/background';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider>
			<Background>
				<main>
					{/* <div className="absolute right-0 bottom-0 mr-4 mb-4 md:mr-6 md:mb-6">
						<Toggle />
					</div> */}
					<App />
				</main>
			</Background>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
