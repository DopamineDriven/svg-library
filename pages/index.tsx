import Head from 'next/head';
import Header from '../components/header';
import Layout from '../components/layout';
import Container from '../components/container';
import { CLIENT_NAME } from '../lib/constants';
import Icons from '../components/icons';

interface Props {
	props: string | number;
	preview?: boolean;
}

const About = ({ preview }: Props) => {
	return (
		<>
			<Header />
			<Layout preview={preview}>
				<Head>
					<title>{`${CLIENT_NAME} about page`}</title>
				</Head>
				<Container>
					<Icons />
				</Container>
			</Layout>
		</>
	);
};

export default About;
