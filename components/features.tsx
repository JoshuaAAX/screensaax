import { Clock, DollarSign, Zap } from 'lucide-react'

export function Features() {
  return (
    <section className="py-12 bg-gradient-to-br from-azul-pastel/10 to-naranja-pastel/10">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-azul-pastel">¿Por qué elegir ScreensAAX?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 rounded-full bg-naranja-pastel/20">
              <DollarSign className="h-6 w-6 text-azul-pastel" />
            </div>
            <h3 className="text-xl font-semibold text-azul-pastel">Precios transparentes</h3>
            <p className="text-muted-foreground">
              Costos claros basados en la ubicación de la pantalla, duración y alcance de la audiencia.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 rounded-full bg-naranja-pastel/20">
              <Zap className="h-6 w-6 text-azul-pastel" />
            </div>
            <h3 className="text-xl font-semibold text-azul-pastel">Configuración rápida</h3>
            <p className="text-muted-foreground">
              Pon tus anuncios en pantallas en solo unos sencillos pasos.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 rounded-full bg-naranja-pastel/20">
              <Clock className="h-6 w-6 text-azul-pastel" />
            </div>
            <h3 className="text-xl font-semibold text-azul-pastel">Soporte 24/7</h3>
            <p className="text-muted-foreground">
              Asistencia las 24 horas para tus campañas publicitarias.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

