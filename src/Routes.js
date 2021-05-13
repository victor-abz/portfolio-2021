import React, { lazy, Suspense, Fragment } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import HomeView from './views/pages/HomeView/index';
import Layout from './components/Layout/Layout';

const routesConfig = [
	{
		exact: true,
		path: '/404',
		component: lazy(() => import('./views/pages/Error404View')),
	},
	{
		path: '/',
		// guard: AuthGuard,
		layout: Layout,
		routes: [
			{
				exact: true,
				path: '/',
				component: HomeView,
			},
			{
				component: () => <Redirect to="/404" />,
			},
		],
	},
];
const renderRoutes = (routes) =>
	routes ? (
		<Suspense fallback={<LoadingScreen />}>
			<Switch>
				{routes.map((route, i) => {
					const Guard = route.guard || Fragment;
					const Layout = route.layout || Fragment;
					const Component = route.component;

					return (
						<Route
							key={i}
							path={route.path}
							exact={route.exact}
							render={(props) => (
								<Guard>
									<Layout>
										{route.routes ? (
											renderRoutes(route.routes)
										) : (
											<Component {...props} />
										)}
									</Layout>
								</Guard>
							)}
						/>
					);
				})}
			</Switch>
		</Suspense>
	) : null;

function Routes() {
	return renderRoutes(routesConfig);
}

export default Routes;
