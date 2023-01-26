"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Logo from "public/thirteen.svg";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
	const url = usePathname();
	const router = useRouter();

	return (
		<>
			<div className="flex justify-between h-12 bg-gray-800 shadow-lg">
				<div className="flex items-center mx-2">
					<Image
						style={{ filter: "invert(1)" }}
						src={Logo}
						alt="logo 13"
					/>
				</div>
				<nav className="flex items-center">
					<ul className="flex items-center mx-2">
						<li
							className={`mx-2  uppercase hover:text-purple-500 ${
								url === "/" ? "text-purple-500" : ""
							}`}
						>
							<Link href="/">Home</Link>
						</li>
						<li
							className={`mx-2  uppercase hover:text-purple-500 ${
								url === "/about" ? "text-purple-500" : ""
							}`}
						>
							<Link href="../about">About</Link>
						</li>
						<li
							className={`mx-2  uppercase hover:text-purple-500 ${
								url === "/contact" ? "text-purple-500" : ""
							}`}
						>
							<Link href="../contact">Contact</Link>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};
export default Header;
