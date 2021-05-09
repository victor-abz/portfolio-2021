const MenuItem = ({ menu }) => {
	const { name, label, Icon } = menu;
	return (
		<li className="my-px">
			<a
				href="#"
				className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-600  dark:text-gray-300 hover:bg-primary hover:text-white"
			>
				<span className="flex items-center justify-center text-lg text-gray-600 dark:text-gray-300">
					<Icon />
				</span>
				<span className="ml-3">{label}</span>
			</a>
		</li>
	);
};

export default MenuItem;
