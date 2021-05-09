import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MenuItem from './MenuItem';
import { AiFillHome } from 'react-icons/ai';
import { FaFileAlt } from 'react-icons/fa';
import { RiGalleryFill } from 'react-icons/ri';
import { MdViewHeadline } from 'react-icons/md';

function Index() {
	const SidebarMenu = [
		{
			route: '#',
			label: 'About Me',
			Icon: AiFillHome,
		},
		{
			route: '#',
			label: 'Portfolio',
			Icon: RiGalleryFill,
		},
		{
			route: '#',
			label: 'Resume',
			Icon: FaFileAlt,
		},
		{
			route: '#',
			label: 'Blog',
			Icon: MdViewHeadline,
		},
	];
	return (
		<>
			<div className="sidebar-header flex items-center justify-center py-4">
				<div className="inline-flex">
					<a href="#" className="inline-flex flex-col items-center">
						<img
							className="object-cover object-center rounded h-24"
							alt="hero"
							src="/logo192.png"
						/>
						{/* <span className="ml-3 text-xl">Victor-Abz</span> */}

						<span className="leading-10 text-center text-lg font-bold ml-1">
							Victor Abizeyimana
						</span>
					</a>
				</div>
			</div>
			<div className="sidebar-content px-4 py-6">
				<ul className="flex flex-col w-full">
					{SidebarMenu.map((menu) => (
						<MenuItem menu={menu} />
					))}
					{/* <li className="my-px">
						<a
							href="#"
							className="flex flex-row items-center h-10 px-3 rounded-lg text-white bg-primary"
						>
							<span className="flex items-center justify-center text-lg text-white">
								<svg
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="h-6 w-6"
								>
									<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
								</svg>
							</span>
							<span className="ml-3">About Me</span>
						</a>
					</li>
					<li className="my-px">
						<a
							href="#"
							className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-600  dark:text-gray-300 hover:bg-primary hover:text-white"
						>
							<span className="flex items-center justify-center text-lg text-gray-600 dark:text-gray-300">
								<svg
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="h-6 w-6"
								>
									<path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
								</svg>
							</span>
							<span className="ml-3">Portfolio</span>
						</a>
					</li>
					<li className="my-px">
						<a
							href="#"
							className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
						>
							<span className="flex items-center justify-center text-lg text-gray-400">
								<svg
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="h-6 w-6"
								>
									<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
								</svg>
							</span>
							<span className="ml-3">Resume</span>
						</a>
					</li>
					<li className="my-px">
						<a
							href="#"
							className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
						>
							<span className="flex items-center justify-center text-lg text-gray-400">
								<svg
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="h-6 w-6"
								>
									<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
								</svg>
							</span>
							<span className="ml-3">Blog</span>
						</a>
					</li>
					<li className="my-px">
						<a
							href="#"
							className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
						>
							<span className="flex items-center justify-center text-lg text-green-400">
								<svg
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="h-6 w-6"
								>
									<path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</span>
							<span className="ml-3">Add new</span>
						</a>
					</li> */}
				</ul>
			</div>
		</>
	);
}

export default Index;
