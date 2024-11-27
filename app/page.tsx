import { CaseStudies } from "@/components/case-studies"
import { ContactForm } from "@/components/contact-form"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Locations } from "@/components/locations"
import { Nav } from "@/components/nav"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-azul-pastel/5 to-naranja-pastel/5">
      <Nav />
      <main>
        <Hero />
        <Features />
        <Locations />
       
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

