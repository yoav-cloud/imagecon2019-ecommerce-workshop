import React, { useLayoutEffect, useRef } from "react";
import Button from "../../Button/Button";
import { init as initMediaLibraryWidget } from "../../../services/mlwidget";

import styles from "./MediaLibraryButton.module.scss";

const MediaLibraryButton = () => {
	const mlRef = useRef();

	useLayoutEffect(() => {
		initMediaLibraryWidget()
			.then((ml)=> mlRef.current = ml);
	}, []);

	return (
		<Button title="Media Library" id="mlButton" className={styles.mlButton}
		        onClick={() => {}}/>
	);
};

export default MediaLibraryButton;
