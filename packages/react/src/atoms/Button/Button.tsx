import React from "react";
import '@ds.mhp/scss/lib/button.css';

interface ButtonProps {
	title: string;
	children: React.ReactNode;
	onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, children, onClick }) => {
	return (
		<button className="btn btn-primary" title={title} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
