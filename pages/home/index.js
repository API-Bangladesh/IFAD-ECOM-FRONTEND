import React, {Fragment, useEffect, useState} from 'react';
import BannerSection from '../../components/home/BannerSection';

// Brands
import BrandSection from '../../components/home/BrandSection'
import ScrollToTopButton from '../../components/common/ScrollToTopButton'
import {fetchCategories} from "../../services/CategoryServices";
import CategoryProductScroll from "../../components/home/CategoryProductScroll";
import CategoryShowcase from "../../components/home/CategoryShowcase";
import FeatureSection from "../../components/home/FeatureSection";
import DiscountedProductScroll from "../../components/home/DiscountedProductScroll";
import {fetchHomeBanners} from "../../services/CommonServices";
import AddBanner from "../../components/common/AddBanner";

const HomePage = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetchCategories({
			paginate: 'no'
		}).then((response) => {
			if (response?.data) {
				setCategories(response.data);
			}
		});
	}, []);

	const [banners, setBanners] = useState([]);

	// fetch
	useEffect(() => {
		fetchHomeBanners().then((response) => {
			if (response?.data) {
				setBanners(response.data[0]?.content_item);
			}
		});
	}, []);

	return (
		<Fragment>
			<BannerSection/>
			<CategoryShowcase/>

			<DiscountedProductScroll
				title="Discounted Product"
			/>

			<AddBanner imagePath={banners[0]?.item_image} />

			{categories.map((category, key) => {
				return (
					<CategoryProductScroll
						key={key}
						title={category.name}
						categoryId={category.id}
					/>
				)
			})}

			<AddBanner imagePath={banners[1]?.item_image} />

			<BrandSection/>
			<FeatureSection/>

			<ScrollToTopButton/>
		</Fragment>
	);
};

export default HomePage;