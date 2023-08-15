import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import PageNotFound from './Components/PageNotFound';
import Contact from './Components/Contact';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <PageNotFound />,
		children: [
			{
				path: 'contacts/:contactId',
				element: <Contact />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
