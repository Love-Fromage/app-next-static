"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Logo from "public/thirteen.svg";
import Image from "next/image";

const Header = () => {
	const url = usePathname();

	return (
		<>
			<div className="header">
				<div className="flex items-center">
					<Image src={Logo} />
				</div>
			</div>
		</>
	);
};
export default Header;
