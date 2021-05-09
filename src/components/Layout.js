// import React from 'react';
// import Header from './Header';
// import Footer from './Footer';

// export default function Layout({ children }) {
// 	return (
// 		<div className="flex flex-col min-h-screen">
// 			<Header />
// 			<main className="flex-grow flex items-stretch justify-center">
// 				{children}
// 			</main>
// 			<footer className="text-gray-600 body-font bottom-0 bg-opacity-25 w-full z-40">
// 				<Footer />
// 			</footer>
// 		</div>
// 	);
// }
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
	return (
		<div className="flex flex-row min-h-screen bg-gray-100 dark:bg-black text-gray-800">
			<aside className="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in dark:bg-black">
				<Sidebar />
			</aside>
			<main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
				<header className="header  py-4 px-10">
					<Header />
				</header>
				<div className="main-content flex flex-col flex-grow p-4 px-10">
					<div className="flex flex-col flex-grow  rounded mt-4">
						{children}
					</div>
				</div>
				<footer className="footer px-10 py-6">
					<Footer />
				</footer>
			</main>
		</div>
	);
}
