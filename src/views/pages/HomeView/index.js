import React from 'react';

export default function HomeView() {
	return (
		<section className="text-gray-600 body-font w-full  flex justify-center items-center">
			<div className="container mx-auto flex py-6 md:flex-row flex-col items-center">
				<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<h1 className="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-900">
						Design. Build. Improve
					</h1>
					<p className="mb-8 leading-10 text-4xl">
						I <span className="font-bold">develop softwares</span>{' '}
						that will{' '}
						<span className="font-bold"> raise revenue </span> or{' '}
						<span className="font-bold">reduce costs</span> for your
						business
					</p>

					<div className="flex justify-center">
						<button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
							Make it happen
						</button>
					</div>
				</div>
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
					<img
						className="object-cover object-center rounded"
						alt="hero"
						src="https://dummyimage.com/720x600"
					/>
				</div>
			</div>
		</section>
	);
}
