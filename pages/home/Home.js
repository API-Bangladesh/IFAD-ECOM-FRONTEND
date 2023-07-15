import React, {Fragment, useEffect, useState} from 'react';
import Banner from '../../components/Modules/banner/Banner';
import Category from '../../components/Modules/category/Category';
import ComboPack from '../../components/Modules/combopack/ComboPack';
// Combo Package
import ComboImgOne from '../../public/alloffers/comboone.png';
import ComboImgTwo from '../../public/alloffers/combo2.png';
import ComboImgThree from '../../public/alloffers/combo3.png';
import ComboOffer from '../../public/offerfour.jpg';
// discount product
import DiscountOne from '../../public/alloffers/discount1.png';
import DiscountTwo from '../../public/alloffers/discount2.png';
import DiscountThree from '../../public/alloffers/discount3.png';
import DiscountBanner from '../../public/offerfive.jpg';
// chips product
import ChipsOne from '../../public/alloffers/chips/chips.png';
import ChipsTwo from '../../public/alloffers/chips/chips2.png';
import ChipsThree from '../../public/alloffers/chips/chips3.png';
import ChipsBanner from '../../public/offerone.jpg';
// biscuit product
import BiscuitOne from '../../public/alloffers/biscuit/biscuit1.png';
import BiscuitTwo from '../../public/alloffers/biscuit/biscuit2.png';
import BiscuitThree from '../../public/alloffers/biscuit/biscuit3.png';
import BiscuitBanner from '../../public/offertwo.jpg';
// grocery product
import GroceryOne from '../../public/alloffers/grocery/one.png';
import GroceryTwo from '../../public/alloffers/grocery/two.png';
import GroceryThree from '../../public/alloffers/grocery/three.png';
import GroceryBanner from '../../public/offerthree.jpg';
// noodle product
import NoodlesOne from '../../public/alloffers/noodles/one.png';
import NoodlesTwo from '../../public/alloffers/noodles/two.png';
import NoodlesThree from '../../public/alloffers/noodles/three.png';
import NoodlesBanner from '../../public/offerfour.jpg';
// snacks product
import SnacksOne from '../../public/alloffers/snacks/one.png';
import SnacksTwo from '../../public/alloffers/snacks/two.png';
import SnacksThree from '../../public/alloffers/snacks/three.png';
import SnacksBanner from '../../public/offerfive.jpg';
// home care product
import HomecareOne from '../../public/alloffers/homecare/one.png';
import HomecareTwo from '../../public/alloffers/homecare/two.png';
import HomecareThree from '../../public/alloffers/homecare/three.png';
import HomecareBanner from '../../public/offerthree.jpg';

import AddBanner from '../../components/Modules/addslider/AddBanner';
// import FeatureProducts from '../../components/Modules/featureProduct/FeatureProducts';

// Brands
import Brands from '../../components/Modules/brands/Brands'
import TopButton from '../../components/Modules/topbutton/TopButton'
import {fetchCategories} from "../../services/CategoryServices";

const Home = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetchCategories({
			paginate: 'no',
			limit: 1
		}).then((response) => {
			if (response?.data) {
				setCategories(response.data);
			}
		});
	}, []);

	return (
		<Fragment>
			<Banner />
			<Category />
			{/*<ComboPack
				title="combo pack"
				image={ComboImgOne}
				image2={ComboImgTwo}
				image3={ComboImgThree}
				producttitle="wavy chips"
				producttitle2="wavy chips"
				producttitle3="pollow chips"
				offerbanner={ComboOffer}
			/>
			<ComboPack
				title="discount products"
				image={DiscountOne}
				image2={DiscountTwo}
				image3={DiscountThree}
				producttitle="wavy chips"
				producttitle2="Safe n Doft "
				producttitle3="Orange Dlight"
				offerbanner={DiscountBanner}
			/>*/}

			{categories.map((category, key) => {
				return (
					<ComboPack
						key={key}
						title={category.name}
						categoryId={category.id}
						categoryImage={category.image}
					/>
				)
			})}

			<AddBanner />

			<AddBanner />

			{/* <FeatureProducts /> */}
			<Brands/>
			<TopButton/>
		</Fragment>
	);
};

export default Home;
