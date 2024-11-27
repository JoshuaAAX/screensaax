import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function CaseStudies() {
  return (
    <section className="py-12 bg-gradient-to-br from-azul-pastel/10 to-naranja-pastel/10">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-azul-pastel">Historias de Éxito de Clientes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubre cómo las marcas líderes están logrando resultados extraordinarios con la publicidad digital de ScreensAAX.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/50 backdrop-blur-sm">
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Logo de la empresa"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-azul-pastel">RetailCo</h3>
                    <p className="text-sm text-muted-foreground">Cadena Minorista</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  ScreensAAX nos ayudó a aumentar el tráfico peatonal en un 25% en nuestras tiendas con publicidad digital dirigida.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <p className="text-2xl font-bold text-naranja-pastel">25%</p>
                  <p className="text-sm text-muted-foreground">Aumento de tráfico peatonal</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-naranja-pastel">2.5x</p>
                  <p className="text-sm text-muted-foreground">ROI en gasto publicitario</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/50 backdrop-blur-sm">
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Logo de la empresa"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-azul-pastel">TechStart</h3>
                    <p className="text-sm text-muted-foreground">Startup Tecnológica</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                La publicidad en pantallas digitales nos ayudó a lanzar nuestra marca con máxima visibilidad en ubicaciones clave.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <p className="text-2xl font-bold text-naranja-pastel">1M+</p>
                <p className="text-sm text-muted-foreground">Impresiones</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-naranja-pastel">40%</p>
                <p className="text-sm text-muted-foreground">Aumento en reconocimiento de marca</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
)
}