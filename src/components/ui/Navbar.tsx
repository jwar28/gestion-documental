import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import PulsatingButton from "../magicui/pulsating-button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./dropdown-menu";

export default function Navbar() {
	const [isSticky, setIsSticky] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsSticky(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav className="w-full fixed top-0 shadow-sm border-b bg-white z-50 transition-all duration-300">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex-shrink-0">
						<img src="/logo.png" alt="SENA Logo" width={50} height={50} />
					</div>

					<div className="hidden md:flex flex-grow justify-center">
						<div className="flex items-baseline space-x-4">
							<a
								href="#home"
								className="text-gray-600 hover:text-[#70b22d] px-3 py-2 rounded-md text-sm font-medium"
							>
								Inicio
							</a>
							<a
								href="#information"
								className="text-gray-600 hover:text-[#70b22d] px-3 py-2 rounded-md text-sm font-medium"
							>
								Información
							</a>
							<a
								href="#"
								className="text-gray-600 hover:text-[#70b22d] px-3 py-2 rounded-md text-sm font-medium"
							>
								Habilidades
							</a>
							<a
								href="#"
								className="text-gray-600 hover:text-[#70b22d] px-3 py-2 rounded-md text-sm font-medium"
							>
								Temas
							</a>
						</div>
					</div>

					<div className="hidden md:block">
						<PulsatingButton
							pulseColor="#88d736"
							className="bg-[#70b22d] text-white px-4 py-2 rounded-md text-sm font-medium"
						>
							Ver ofertas
						</PulsatingButton>
					</div>

					<div className="md:hidden flex items-center w-full">
						<PulsatingButton
							pulseColor="#88d736"
							className="bg-[#70b22d] text-white px-4 py-2 rounded-md text-sm font-medium mx-auto"
						>
							Ver ofertas
						</PulsatingButton>
						<DropdownMenu>
							<DropdownMenuTrigger>
								<Menu className="block h-6 w-6" aria-hidden="true" />
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuItem>
									<a
										href="#"
										className="text-gray-600 hover:text-[#70b22d] block px-3 py-2 rounded-md text-base font-medium"
									>
										Inicio
									</a>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<a
										href="#"
										className="text-gray-600 hover:text-[#70b22d] block px-3 py-2 rounded-md text-base font-medium"
									>
										Información
									</a>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<a
										href="#"
										className="text-gray-600 hover:text-[#70b22d] block px-3 py-2 rounded-md text-base font-medium"
									>
										Habilidades
									</a>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<a
										href="#"
										className="text-gray-600 hover:text-[#70b22d] block px-3 py-2 rounded-md text-base font-medium"
									>
										Temas
									</a>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>
			</div>

			{isMobileMenuOpen && (
				<div className="md:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3"></div>
				</div>
			)}
		</nav>
	);
}
