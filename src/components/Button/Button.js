import React from "react";
import cx from "classnames";
import styles from "./Button.module.scss";

const Button = ({ title, className = "", onClick, action = false }) => (
	<button className={cx(styles.button, { [styles.action]: action })} onClick={onClick}>
		{title}
	</button>
);

export default Button;