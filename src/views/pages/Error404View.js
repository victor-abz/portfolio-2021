import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export default function Error404View() {
	return (
		<div className="w-screen h-screen flex flex-col items-center justify-center bg-stars bg-opacity-20">
			<div className="text-8xl font-bold">404</div>
			<div>Page Not Found</div>
			<div className="mt-10">
				<RouterLink
					// component={RouterLink}
					to="/"
					className="btn-primary"
				>
					Take me Home
				</RouterLink>
			</div>
		</div>
	);
}
