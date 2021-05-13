import React, { useState } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
// import { ThemeContext } from '../hooks/useColorMode';
import { ThemeContext } from '../hooks/themeContext';

export default function Header() {
	const { theme, setTheme } = React.useContext(ThemeContext);

	return (
		<div className="header-content flex items-center flex-row">
			<div className="flex ml-auto">
				<div className="transition duration-500 ease-in-out rounded-full p-2">
					{theme === 'dark' ? (
						<HiSun
							onClick={() =>
								setTheme(theme === 'dark' ? 'light' : 'dark')
							}
							className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
						/>
					) : (
						<HiMoon
							onClick={() =>
								setTheme(theme === 'dark' ? 'light' : 'dark')
							}
							className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
						/>
					)}
				</div>
				<button className=" md:ml-auto inline-flex items-center text-white bg-purple-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
					Hire me now!
					<svg
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						className="w-4 h-4 ml-1"
						viewBox="0 0 24 24"
					>
						<path d="M5 12h14M12 5l7 7-7 7"></path>
					</svg>
				</button>
			</div>
		</div>
	);
}
