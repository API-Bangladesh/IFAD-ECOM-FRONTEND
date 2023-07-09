import React from 'react';
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

const Home = () => {
	return (
		<>
			<Banner />
			<Category />
			<ComboPack
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
			/>
			<ComboPack
				title="chips"
				image={ChipsOne}
				image2={ChipsTwo}
				image3={ChipsThree}
				producttitle="Wavy Chips"
				producttitle2="BBQ Wavy Chips"
				producttitle3="pillow chips"
				offerbanner={ChipsBanner}
			/>
			<ComboPack
				title="Biscuit & Bakery"
				image={BiscuitOne}
				image2={BiscuitTwo}
				image3={BiscuitThree}
				producttitle="Butter Delight"
				producttitle2="Choco Delight"
				producttitle3="Orange Delight"
				offerbanner={BiscuitBanner}
			/>
			<ComboPack
				title="grocery"
				image={GroceryOne}
				image2={GroceryTwo}
				image3={GroceryThree}
				producttitle="Ifad atta"
				producttitle2="Ifad moida"
				producttitle3="Ifad suji"
				offerbanner={GroceryBanner}
			/>
			<AddBanner />
			<ComboPack
				title="Noodles"
				image={NoodlesOne}
				image2={NoodlesTwo}
				image3={NoodlesThree}
				producttitle="Eggy Noodles"
				producttitle2="Eggy instant Noodles"
				producttitle3="chicken Noodles"
				offerbanner={NoodlesBanner}
			/>
			<ComboPack
				title="snacks"
				image={SnacksOne}
				image2={SnacksTwo}
				image3={SnacksThree}
				producttitle="Strawberry Muffin"
				producttitle2="Vanilla Muffin"
				producttitle3="Jhal Chanachur"
				offerbanner={SnacksBanner}
			/>
			<ComboPack
				title="home care"
				image={HomecareOne}
				image2={HomecareTwo}
				image3={HomecareThree}
				producttitle="Dishoom "
				producttitle2="Safe n Soft"
				producttitle3="Uniq"
				offerbanner={HomecareBanner}
			/>
			<AddBanner />
			{/* <FeatureProducts /> */}
			<Brands/>
			<TopButton/>
		</>
	);
};

export default Home;
