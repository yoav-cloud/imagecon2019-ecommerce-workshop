/* eslint-disable */
import React, { useLayoutEffect, useRef } from "react";
import Button from "../../Button/Button";
import request from "../../../services/api";
import styles from "./MediaLibraryButton.module.scss";

// mlcreate :: create the media library widget

const MediaLibraryButton = () => {
	const mlRef = useRef();

	useLayoutEffect(() => {

		//mlinit :: initialize the media library widget

	}, []);

	return (
		<Button title="Media Library"
		        id="mlButton"
		        className={styles.mlButton}
		        onClick={() => {
			        // mlshow :: show the media library widget
		        }}/>
	);
};

export default MediaLibraryButton;
