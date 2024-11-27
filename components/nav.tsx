import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Nav() {
  return (
    <header className="fixed top-0 w-full bg-azul-pastel/0 backdrop-blur-md z-50 border-b border-azul-pastel/20">
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold ">ScreensAAX</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/ubicaciones" className="text-sm font-medium hover:text-azul-pastel">
            Explorar Pantallas
          </Link>
          <Link href="/recursos" className="text-sm font-medium hover:text-azul-pastel">
            Recursos
          </Link>
          <Link href="/nosotros" className="text-sm font-medium hover:text-azul-pastel">
            Nosotros
          </Link>
          <Link href="/contacto" className="text-sm font-medium hover:text-azul-pastel">
            Contacto
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/iniciar-sesion">
            <Button variant="outline" className="text-naranjoso border-naranjoso hover:text-naranjoso hover:bg-azul-pastel/10">Iniciar Sesión</Button>
          </Link>
          <Link href="/comenzar">
            <Button className="bg-naranjoso text-white hover:bg-naranjoso/70">Comenzar Gratis</Button>
          </Link>
        </div>
      </nav>
    </header>
  )
}

