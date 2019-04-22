import React from "react";
import cx from "classnames";
import styles from "./Button.module.scss";

const Button = ({ title, className = "", onClick, action = false, disabled = false }) => (
	<button className={cx(styles.button,
		{ [styles.action]: action, [styles.disabled]: disabled })}
	        onClick={onClick}
			disabled={disabled}>
		{title}
	</button>
);

export default Button;