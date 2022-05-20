import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react';
import styles from './button.module.css';


const Button = ({ children, onClick, btnColor = 'red', labelColor, disabled, type, style, ...props }) => {
	const shoot = (a) => {
		alert(a);
	  }
	const [
		hover,
		setHover
	] = useState(false);
	const toggleHover = () => {
		setHover(!hover);
	};
	const commonStyles = {
		backgroundColor : btnColor,
		color           : labelColor || 'white'
	};
	const otherStyles = {
		backgroundColor : 'white',
		color           : labelColor || 'white'
	};
	
	let btnStyle;
	switch (type) {
		case 'other':
			btnStyle = otherStyles;
			break;
		default:

			btnStyle = {
				backgroundColor : btnColor,
				color           : labelColor || 'white'
			};
			break;
	}
	return (
		<button
			style={

					disabled ? { ...commonStyles, ...otherStyles, ...btnStyle, ...style } :
					{ ...commonStyles, ...otherStyles, ...btnStyle, ...style }
			}
			onMouseEnter={toggleHover}
			onMouseLeave={toggleHover}
			{...props}
			type="button"
			onClick={
				
					disabled ? onClick :
					() => {window.scrollTo(0,document.body.scrollHeight); }
			}
			className={styles.btn}
		>
			{children || 'button'}
		</button>
	);
};

export default Button;
