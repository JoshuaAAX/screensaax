import { Facebook, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-azul-pastel/20 bg-gradient-to-b from-azul-pastel/5 to-naranja-pastel/5">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-azul-pastel">ScreensAAX</h3>
            <p className="text-sm text-muted-foreground">
              La plataforma líder en publicidad en pantallas digitales a nivel mundial.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-azul-pastel">Explorar</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/ubicaciones" className="text-muted-foreground hover:text-naranja-pastel">
                  Ubicaciones de Pantallas
                </Link>
              </li>
              <li>
                <Link href="/precios" className="text-muted-foreground hover:text-naranja-pastel">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="/casos-de-exito" className="text-muted-foreground hover:text-naranja-pastel">
                  Casos de Éxito
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-azul-pastel">Empresa</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/nosotros" className="text-muted-foreground hover:text-naranja-pastel">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-naranja-pastel">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/carreras" className="text-muted-foreground hover:text-naranja-pastel">
                  Carreras
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-azul-pastel">Conecta</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-naranja-pastel">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-naranja-pastel">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-naranja-pastel">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-azul-pastel/20 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 ScreensAAX. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

