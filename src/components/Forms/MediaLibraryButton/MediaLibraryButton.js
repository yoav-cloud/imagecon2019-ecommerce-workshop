import React, { useLayoutEffect, useRef } from "react";
import Button from "../../Button/Button";

import styles from "./MediaLibraryButton.module.scss";

const MediaLibraryButton = () => {
	const mlRef = useRef();

	useLayoutEffect(() => {

	}, []);

	return (
		<Button title="Media Library" id="mlButton" className={styles.mlButton}
		        onClick={() => {}}/>
	);
};

export default MediaLibraryButton;
