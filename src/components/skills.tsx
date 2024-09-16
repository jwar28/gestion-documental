import { BellIcon, CalendarIcon, FileTextIcon, GlobeIcon, InputIcon } from "@radix-ui/react-icons"
import { AnimatedCard } from "./ui/animated-card"

const features = [
	{
		Icon: FileTextIcon,
		name: "Gestión Documental",
		description: "Gestiona documentos de archivo bajo normativas archivísticas.",
		href: "/",
		cta: "Aprender más",
		background: <img className="absolute -right-20 -top-20 opacity-60" />,
		className: "",
	},
	{
		Icon: InputIcon,
		name: "Investigación",
		description: "Orienta la investigación aplicando referentes técnicos.",
		href: "/",
		cta: "Learn more",
		background: <img className="absolute -right-20 -top-20 opacity-60" />,
		className: "",
	},
	{
		Icon: GlobeIcon,
		name: "Digitalización de Documentos",
		description: "Digitaliza documentos usando tecnologías archivísticas.",
		href: "/",
		cta: "Learn more",
		background: <img className="absolute -right-20 -top-20 opacity-60" />,
		className: "",
	},
	{
		Icon: CalendarIcon,
		name: "Inglés",
		description: "Mejora tu comunicación en inglés en entornos laborales.",
		href: "/",
		cta: "Learn more",
		background: <img className="absolute -right-2 -top-8 opacity-60" />,
		className: "",
	},
	{
		Icon: BellIcon,
		name: "Gestión de Bases de Datos",
		description: "Administra bases de datos conforme a procedimientos técnicos.",
		href: "/",
		cta: "Learn more",
		background: <img className="absolute ml-20 h-40 opacity-60" />,
		className: "",
	},
]

export function Skills() {
	return (
		<section className="pb-10" id="skills">
			<div className="flex flex-wrap justify-evenly gap-4">
				{features.map((feature, idx) => (
					<AnimatedCard key={idx} {...feature} />
				))}
			</div>
		</section>
	)
}
