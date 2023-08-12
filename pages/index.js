import Head from 'next/head';
import {Fragment} from "react";
import HomePage from "./home";

const Index = () => {
	return (
		<Fragment>
			<Head>
				<title>Home | </title>
			</Head>

			<HomePage/>
		</Fragment>
	);
};

export default Index;
