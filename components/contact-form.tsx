import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  return (
    <section className="py-12">
      <div className="container max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-azul-pastel">Contáctanos</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-azul-pastel mb-1">
                Nombre
              </label>
              <Input id="nombre" placeholder="Tu nombre" className="bg-white/50 backdrop-blur-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-azul-pastel mb-1">
                Email
              </label>
              <Input id="email" type="email" placeholder="tu@email.com" className="bg-white/50 backdrop-blur-sm" />
            </div>
          </div>
          <div>
            <label htmlFor="asunto" className="block text-sm font-medium text-azul-pastel mb-1">
              Asunto
            </label>
            <Input id="asunto" placeholder="Asunto del mensaje" className="bg-white/50 backdrop-blur-sm" />
          </div>
          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium text-azul-pastel mb-1">
              Mensaje
            </label>
            <Textarea id="mensaje" placeholder="Tu mensaje" rows={4} className="bg-white/50 backdrop-blur-sm" />
          </div>
          <Button type="submit" className="w-full bg-naranjoso text-white hover:bg-naranja-pastel/90">
            Enviar Mensaje
          </Button>
        </form>
      </div>
    </section>
  )
}

