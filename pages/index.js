import Head from 'next/head';
import Home from './home/Home'
import {Fragment} from "react";

const Index = () => {
	return (
		<Fragment>
			<Head>
				<title>Home | </title>
			</Head>
			<Home/>
		</Fragment>
	);
};

export default Index;
