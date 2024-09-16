import { Card, CardContent } from "@/components/ui/card"
import { INFORMATION } from "@/data/information"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown } from "lucide-react"
import BlurFade from "./magicui/blur-fade"

export function Information() {
	return (
		<section
			className="sm:flex sm:min-h-screen sm:flex-col sm:items-center sm:justify-center"
			id="information"
		>
			<BlurFade delay={0.25 * 3}>
				<div className="flex flex-col items-center justify-center">
					<p className="text-center text-2xl font-semibold text-neutral-700">
						Encuentra <span className="text-[#70b22d]">información relevante</span> sobre el
						tecnólogo aquí.
					</p>
					<ChevronDown className="mb-2 mt-2 animate-bounce text-center" />
				</div>
			</BlurFade>
			<BlurFade delay={0.25 * 4}>
				<Tabs defaultValue="info" className="sm:min-w-[60rem] sm:max-w-[60rem]">
					<TabsList className="grid w-full grid-cols-3">
						<TabsTrigger value="info">Información</TabsTrigger>
						<TabsTrigger value="desc">Descripción</TabsTrigger>
						<TabsTrigger value="req">Requisitos</TabsTrigger>
					</TabsList>
					<TabsContent value="info">
						<Card className="sm:h-[170px]">
							<CardContent className="flex flex-col flex-wrap items-center justify-around gap-6 p-5 sm:flex-row">
								<p className="flex w-fit flex-col items-center text-neutral-500">
									<strong className="text-lg font-semibold text-neutral-700">
										Tipo de Programa
									</strong>
									{INFORMATION.program_type}
								</p>
								<p className="flex w-fit flex-col items-center text-neutral-500">
									<strong className="text-lg font-semibold text-neutral-700">Ciudad</strong>
									{INFORMATION.city}
								</p>
								<p className="flex w-fit flex-col items-center text-neutral-500">
									<strong className="text-lg font-semibold text-neutral-700">Modalidad</strong>
									{INFORMATION.modality}
								</p>
								<p className="flex w-fit flex-col items-center text-neutral-500">
									<strong className="text-lg font-semibold text-neutral-700">Línea o Área</strong>
									{INFORMATION.area}
								</p>
								<p className="flex w-fit flex-col items-center text-neutral-500">
									<strong className="text-lg font-semibold text-neutral-700">Cupo Máximo</strong>
									{INFORMATION.max_capacity}
								</p>
								<p className="flex w-fit flex-col items-center text-balance text-neutral-500 max-sm:text-center">
									<strong className="text-lg font-semibold text-neutral-700">
										Lugar de Realización
									</strong>
									{INFORMATION.realization_place}
								</p>
							</CardContent>
						</Card>
					</TabsContent>
					<TabsContent value="desc">
						<Card className="sm:h-[170px]">
							<CardContent className="p-6">
								<p className="text-pretty text-neutral-700 sm:text-lg">{INFORMATION.description}</p>
							</CardContent>
						</Card>
					</TabsContent>
					<TabsContent value="req">
						<Card className="sm:h-[170px]">
							<CardContent className="p-6">
								<p className="text-balance text-neutral-700 sm:text-lg">
									{INFORMATION.extra_requirements}
								</p>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</BlurFade>
		</section>
	)
}
