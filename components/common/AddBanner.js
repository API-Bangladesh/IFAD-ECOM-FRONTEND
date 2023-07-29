import React from "react";
import {getStoragePath} from "../../utils/helpers";

const AddBanner = ({imagePath}) => {
	return (
		<>
			<section>
				<div className="container p-0">
					<div className="">
						<img src={getStoragePath(imagePath)} className="img-fluid mt-2 mb-4 small-banner" alt="..."/>
					</div>
				</div>
			</section>
		</>
	);
};

export default AddBanner;
