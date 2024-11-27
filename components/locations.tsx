import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

const locations = [
  {
    title: "Cali",
    image: "https://www.targetcolombia.com.co/wp-content/uploads/2021/04/Av-Roosevelt-con-34-Cali.jpg",
    link: "/ubicaciones/centros-comerciales",
  },
  {
    title: "Medellin",
    image: "https://images.unsplash.com/photo-1512250431446-d0b4b57b27ec?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8JTIzbWVkZWxsaW4lMjBwYWlzYWplJTIwdXJiYW5vfGVufDB8fDB8fHww",
    link: "/ubicaciones/estaciones",
  },
  {
    title: "Bogotá",
    image: "https://media.istockphoto.com/id/1453256961/es/foto/vista-a%C3%A9rea-del-paisaje-urbano-moderno-de-bogot%C3%A1-en-colombia-por-la-tarde.jpg?s=612x612&w=0&k=20&c=qYSb6v0CH9MDDePZJZdlD0qT850vGDCzS3KlJsLiVVE=",
    link: "/ubicaciones/centros-urbanos",
  },
]

export function Locations() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-azul-pastel">Ubicaciones de Pantallas</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location) => (
            <Link key={location.title} href={location.link}>
              <Card className="overflow-hidden transition-shadow hover:shadow-lg bg-white/50 backdrop-blur-sm">
                <Image
                  src={location.image}
                  alt={location.title}
                  width={300}
                  height={200}
                  className="w-full h-[267px] object-cover"
                />
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-azul-pastel">{location.title}</h3>
                    <ArrowRight className="h-4 w-4 text-naranja-pastel" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

