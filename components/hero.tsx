import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-azul-pastel">
            Publicidad Digital Simplificada
          </h1>
          <p className="text-xl text-muted-foreground">
            Haz que tu marca destaque en pantallas digitales  en las principales ubicaciones de Cali.
          </p>
          <div className="flex gap-4">
            <Link href="/crear-campana">
              <Button size="lg" className="bg-naranjoso text-white hover:bg-naranja-pastel/80">Crear tu campaña</Button>
            </Link>
            <Link href="/ubicaciones">
              <Button  size="lg" className="bg-azul-pastel text-white border-azul-pastel hover:bg-azul-pastel/50">
                Explorar Ubicaciones
              </Button>
            </Link>
          </div>
        </div>
         <div className="flex-1 relative w-full h-[500px] mt-8 lg:mt-0">
            <Image
              src="https://s0.smartresize.com/wallpaper/659/801/HD-wallpaper-cali-es-cali-city-colombia.jpg"
              fill
              alt="Times Square de noche con pantallas digitales"
              className="object-contain rounded-2xl"
            />
            <div className="absolute -top-4 -left-4 w-40 h-40">
              <Image
                src="https://seeblindspot.com/wp-content/uploads/2021/07/ny-6-min.png"
                fill
                alt="Pantallas publicitarias en la ciudad"
                className="object-cover rounded-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48">
              <Image
                src="https://publik.co/wp-content/uploads/2023/08/Conservatorio-Cali.webp"
                fill
                alt="Pantalla digital en ambiente urbano"
                className="object-cover rounded-xl"
              />
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-azul-pastel">
                ubicación
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

