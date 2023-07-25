import React from "react";
import DividerBanner from "../../../public/slidertwo.png"
import Image from "next/image"
import {IMAGE_STORAGE_URL} from "../../../utils/constants";

const AddBanner = ({imagePath}) => {
	return (
		<>
			<section>
				<div className="container p-0">
					<div className="">
						{/* <Image src={DividerBanner} className="img-fluid mt-2 mb-4 small-banner" alt="..." /> */}
						<img src={`${IMAGE_STORAGE_URL}/${imagePath}`} className="img-fluid mt-2 mb-4 small-banner" alt="..." />
					</div>
				</div>
			</section>
		</>
	);
};

export default AddBanner;
