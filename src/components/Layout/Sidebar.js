import React from 'react';
import MenuItem from './MenuItem';
import { AiFillHome } from 'react-icons/ai';
import { FaFileAlt } from 'react-icons/fa';
import { RiGalleryFill } from 'react-icons/ri';
import { MdViewHeadline } from 'react-icons/md';

function Index() {
	const SidebarMenu = [
		{
			url: '#',
			label: 'About Me',
			Icon: AiFillHome,
		},
		{
			url: '#',
			label: 'Portfolio',
			Icon: RiGalleryFill,
		},
		{
			url: '#',
			label: 'Resume',
			Icon: FaFileAlt,
		},
		{
			url: '#',
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
				</ul>
			</div>
		</>
	);
}

export default Index;
