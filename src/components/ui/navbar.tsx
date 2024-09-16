import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import PulsatingButton from "../magicui/pulsating-button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./dropdown-menu"

export default function Navbar() {
	return (
		<nav className="sticky top-0 z-50 w-full border-b bg-white shadow-sm transition-all duration-300 sm:fixed">
			<div className="mx-auto max-w-5xl px-6 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<div className="">
						<img src="/logo.png" alt="SENA Logo" width={50} height={50} />
					</div>

					<div className="hidden flex-grow justify-center md:flex">
						<div className="flex items-baseline space-x-4">
							<a
								href="#home"
								className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#70b22d]"
							>
								Inicio
							</a>
							<a
								href="#information"
								className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#70b22d]"
							>
								Información
							</a>
							<a
								href="#skills"
								className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#70b22d]"
							>
								Habilidades
							</a>
						</div>
					</div>

					<div className="hidden md:block">
						<a href="/offers">
							<PulsatingButton
								pulseColor="#88d736"
								className="rounded-md bg-[#70b22d] px-4 py-2 text-sm font-medium text-white"
							>
								Ver ofertas
							</PulsatingButton>
						</a>
					</div>

					<div className="flex w-full items-center md:hidden">
						<a href="/offers" className="mx-auto">
							<PulsatingButton
								pulseColor="#88d736"
								className="rounded-md bg-[#70b22d] text-sm font-medium text-white"
							>
								Ver ofertas
							</PulsatingButton>
						</a>

						<DropdownMenu>
							<DropdownMenuTrigger>
								<Menu className="block h-6 w-6" aria-hidden="true" />
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuItem>
									<a
										href="#home"
										className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:text-[#70b22d]"
									>
										Inicio
									</a>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<a
										href="#information"
										className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:text-[#70b22d]"
									>
										Información
									</a>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<a
										href="#skills"
										className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:text-[#70b22d]"
									>
										Habilidades
									</a>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>
			</div>
		</nav>
	)
}
