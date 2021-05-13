import React, { useEffect } from 'react';
import NProgress from 'nprogress';

function LoadingScreen() {
	useEffect(() => {
		NProgress.start();

		return () => {
			NProgress.done();
		};
	}, []);

	return (
		<div className="w-screen h-screen flex justify-center items-center">
			<p>loading</p>
		</div>
	);
}

export default LoadingScreen;
