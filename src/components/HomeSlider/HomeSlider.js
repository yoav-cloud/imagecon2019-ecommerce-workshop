import React, { useLayoutEffect } from "react";
import cx from "classnames";
import styles from "./HomeSlider.module.scss";
//impvid :: import video player

const HomeSlider = () => {

	useLayoutEffect(() => {

		//vidplay :: initialize video player

		//vidsrc :: set the video source and transformations

	}, []);

	return (
		<section className={cx("section", styles.section)}>
			<div className="container">
				<div className={cx("home-slider", styles.homeSlider)}>
					{/*rendervid :: render video element */}
					<img src="https://res.cloudinary.com/ecomm40/image/upload/v1556563365/banner-still.png" alt="banner"/>

					<span className={styles.bannerText}>Cloudinary's Store</span>
				</div>
			</div>
		</section>);
};

export default HomeSlider;