import React, { useLayoutEffect } from "react";
import cx from "classnames";
import styles from "./HomeSlider.module.scss";
import { videoPlayer } from "../../services/cloudinary";

const HomeSlider = () => {

	useLayoutEffect(() => {

		const player = videoPlayer(
			"banner-player",
			{
				loop: true,
				controls: false,
				autoplay: true,
			});

		player.source(
			"banner-video", {
				transformation: [{
					width: 1344,
					height: 320,
					crop: "fill",
					y: 200,
					quality: 70,
					videoCodec: "auto",
					audioCodec: "none",
				}]
			});

	}, []);

	return (
		<section className={cx("section", styles.section)}>
			<div className="container">
				<div className={cx("home-slider", styles.homeSlider)}>
					<video
						id="banner-player"
						className="cld-video-player">
					</video>
					<span className={styles.bannerText}>Cloudinary's Store</span>
				</div>
			</div>
		</section>);
};

export default HomeSlider;