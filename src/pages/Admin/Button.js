import React from "react";
import styles from "./Admin.module.scss";

const Button = ({ title, onClick }) => {
	return (
		<div className={styles.thumbWrapper} onClick={onClick}>
			{title}
		</div>
	);
};

export default Button;