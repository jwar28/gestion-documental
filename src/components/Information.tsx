import { Card, CardContent } from "@/components/ui/card";
import { INFORMATION } from "@/data/information";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown } from 'lucide-react';
import BlurFade from "./magicui/blur-fade";

export function Information() {
    return (
        <section>
            <BlurFade delay={0.25 * 6}>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-xl font-bold text-center">Encuentra <span className="text-[#70b22d]">información relevante</span> sobre el tecnólogo aquí.</p>
                    <ChevronDown className="text-center animate-bounce mt-2 mb-2" />
                </div>
            </BlurFade>
            <BlurFade delay={0.25 * 7}>
                <Tabs defaultValue="info" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="info">Información</TabsTrigger>
                        <TabsTrigger value="desc">Descripción</TabsTrigger>
                        <TabsTrigger value="req">Requisitos</TabsTrigger>
                    </TabsList>
                    <TabsContent value="info">
                        <Card>
                            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                                <div>
                                    <p className="text-gray-700">
                                        <strong className="text-gray-900">Ciudad: </strong>{
                                            INFORMATION.city
                                        }
                                    </p>
                                    <p className="text-gray-700 text-balance">
                                        <strong className="text-gray-900">Lugar de Realización: </strong>
                                        {INFORMATION.realization_place}
                                    </p>
                                    <p className="text-gray-700">
                                        <strong className="text-gray-900">Modalidad: </strong>{
                                            INFORMATION.modality
                                        }
                                    </p>
                                    <p className="text-gray-700">
                                        <strong className="text-gray-900">Cupo Máximo: </strong>
                                        {INFORMATION.max_capacity}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-gray-700">
                                        <strong className="text-gray-900">Tipo de Programa: </strong>{INFORMATION.program_type}
                                    </p>
                                    <p className="text-gray-700">
                                        <strong className="text-gray-900">Perfil de Entrada: </strong>{INFORMATION.entry_profile}
                                    </p>
                                    <p className="text-gray-700">
                                        <strong className="text-gray-900">Línea o Área: </strong>{
                                            INFORMATION.area
                                        }
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="desc">
                        <Card>
                            <CardContent className="p-6">
                                <p className="text-gray-700 text-pretty md:text-lg">
                                    {INFORMATION.description}
                                </p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="req">
                        <Card>
                            <CardContent className="p-6">
                                <p className="text-gray-700 text-balance md:text-lg">
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
