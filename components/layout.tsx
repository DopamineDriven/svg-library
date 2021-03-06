import Alert from './alert';
import Footer from './footer';
import Meta from './meta';
import { ReactNode } from 'react';

type Props = {
	preview?: boolean;
	children: ReactNode;
};

const Layout = ({ preview, children }: Props) => {
	return (
		<>
			<Meta />
			<div className='min-h-screen transition duration-1000'>
				<main>{children}</main>
			</div>
			<Alert preview={preview} />
			<Footer />
		</>
	);
};

export default Layout;
