import React from "react";

export default () => <section className="section" style={{padding: "0px"}}>
	<div className="container">
		<div className="home-slider">
			<div className="image-gallery " aria-live="polite">
				<div className="image-gallery-content">
					<div className="image-gallery-slide-wrapper bottom">
						<div className="image-gallery-swipe">
							<div className="image-gallery-slides">
								<div className="image-gallery-slide center"
								     style={{ transform: "translate3d(0%, 0px, 0px)" }}>
									<div className="image-gallery-image"><img
										src="images/slide8.jpg"
										alt="THE FRESH FOAM CRUZ"/>
										<div className="caption" style={{color: "rgb(255, 255, 255)"}}>
											<div className="caption-title">THE FRESH FOAM CRUZ</div>
											<div className="caption-description">COMFORT. SPORT.
												STYLE.
											</div>
										</div>
									</div>
								</div>
								<div className="image-gallery-slide right"
								     style={{ transform: "translate3d(100%, 0px, 0px)" }}>
									<div className="image-gallery-image"><img
										src="images/slide9.jpg" alt="slide9.jpg"/>
										<div className="caption" style={{color: "rgb(255, 255, 255)"}}>
											<div className="caption-title"></div>
											<div className="caption-description"></div>
										</div>
									</div>
								</div>
								<div className="image-gallery-slide left"
								     style={{ transform: "translate3d(-100%, 0px, 0px)" }}>
									<div className="image-gallery-image"><img
										src="images/slide7.jpg" alt="slide7.jpg"/>
										<div className="caption" style={{color: "rgb(255, 255, 255)"}}>
											<div className="caption-title"></div>
											<div className="caption-description"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="image-gallery-bullets">
							<div className="image-gallery-bullets-container" role="navigation"
							     aria-label="Bullet Navigation">
								<button type="button" className="image-gallery-bullet active "
								        aria-pressed="true" aria-label="Go to Slide 1"></button>
								<button type="button" className="image-gallery-bullet  "
								        aria-pressed="false"
								        aria-label="Go to Slide 2"></button>
								<button type="button" className="image-gallery-bullet  "
								        aria-pressed="false"
								        aria-label="Go to Slide 3"></button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>;