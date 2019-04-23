/* eslint-disable */
import React, { useLayoutEffect, useRef } from "react";
import Button from "../../Button/Button";
import request from "../../../services/api";
import styles from "./MediaLibraryButton.module.scss";

const initializeMediaLibrary = async () => {
	const serverParams = await request("/signature");

	return self.cloudinary.createMediaLibrary({ ...serverParams }, {
		insertHandler: () => {
		}
	});
};

const MediaLibraryButton = () => {
	const mlRef = useRef();

	useLayoutEffect(() => {
		initializeMediaLibrary()
			.then((ml) => mlRef.current = ml);
	}, []);

	return (
		<Button title="Media Library" id="mlButton" className={styles.mlButton}
		        onClick={() => mlRef.current.show()}/>
	);
};

export default MediaLibraryButton;
