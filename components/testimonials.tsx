"use client"
import type React from "react"
import { useState, useEffect } from "react"
import { db } from "@/lib/firebase"
import { collection, addDoc, getDocs, query, orderBy, serverTimestamp } from "firebase/firestore"
import { Star, CheckCircle2, AlertCircle, X } from "lucide-react"

interface Testimonial {
  id: string
  name: string
  project: string
  rating: number
  comment: string
  date: Date
}

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [name, setName] = useState("")
  const [project, setProject] = useState("")
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [notification, setNotification] = useState<{
    show: boolean
    type: "success" | "error"
    message: string
  }>({ show: false, type: "success", message: "" })

  useEffect(() => {
    loadTestimonials()
  }, [])

  const loadTestimonials = async () => {
    try {
      console.log("🔍 Cargando reseñas...")
      const q = query(collection(db, "testimonials"), orderBy("date", "desc"))
      const querySnapshot = await getDocs(q)
      console.log("📦 Documentos encontrados:", querySnapshot.size)
      
      const testimonialsData = querySnapshot.docs.map((doc) => {
        console.log("📄 Documento:", doc.id, doc.data())
        return {
          id: doc.id,
          ...doc.data(),
          date: doc.data().date?.toDate() || new Date(),
        }
      }) as Testimonial[]
      
      setTestimonials(testimonialsData)
      console.log("✅ Reseñas cargadas:", testimonialsData.length)
    } catch (error) {
      console.error("❌ Error loading testimonials:", error)
      showNotification("error", "Error al cargar las reseñas")
    }
  }

  const showNotification = (type: "success" | "error", message: string) => {
    setNotification({ show: true, type, message })
    setTimeout(() => {
      setNotification({ show: false, type, message: "" })
    }, 5000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    console.log("📝 Intentando enviar reseña...")
    console.log("Datos:", { name, project, rating, comment })

    try {
      const docRef = await addDoc(collection(db, "testimonials"), {
        name,
        project,
        rating,
        comment,
        date: serverTimestamp(),
      })
      
      console.log("✅ Reseña guardada con ID:", docRef.id)
      
      setName("")
      setProject("")
      setRating(5)
      setComment("")
      
      showNotification("success", "¡Tu reseña ha sido publicada exitosamente!")
      
      setTimeout(() => {
        setShowForm(false)
      }, 1500)

      await loadTestimonials()
    } catch (error: any) {
      console.error("❌ Error adding testimonial:", error)
      console.error("Código de error:", error.code)
      console.error("Mensaje:", error.message)
      
      if (error.code === "permission-denied") {
        showNotification("error", "Error de permisos. Verifica las reglas de Firestore.")
      } else {
        showNotification("error", `Error al enviar: ${error.message}`)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Toast Notification */}
      {notification.show && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2 fade-in duration-300">
          <div className={`
            min-w-[320px] max-w-md rounded-xl shadow-2xl backdrop-blur-md border
            ${notification.type === "success" 
              ? "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 border-green-200 dark:border-green-800" 
              : "bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/50 dark:to-orange-950/50 border-red-200 dark:border-red-800"
            }
          `}>
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  {notification.type === "success" ? (
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center animate-in zoom-in duration-500">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center animate-in zoom-in duration-500">
                      <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                    </div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className={`font-semibold text-sm ${
                    notification.type === "success" 
                      ? "text-green-900 dark:text-green-100" 
                      : "text-red-900 dark:text-red-100"
                  }`}>
                    {notification.type === "success" ? "¡Éxito!" : "Error"}
                  </p>
                  <p className={`text-sm mt-1 ${
                    notification.type === "success" 
                      ? "text-green-700 dark:text-green-300" 
                      : "text-red-700 dark:text-red-300"
                  }`}>
                    {notification.message}
                  </p>
                </div>
                
                <button
                  onClick={() => setNotification({ ...notification, show: false })}
                  className={`flex-shrink-0 rounded-lg p-1 transition-colors ${
                    notification.type === "success"
                      ? "hover:bg-green-200 dark:hover:bg-green-900 text-green-600 dark:text-green-400"
                      : "hover:bg-red-200 dark:hover:bg-red-900 text-red-600 dark:text-red-400"
                  }`}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              {/* Progress bar */}
              <div className="mt-3 h-1 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${
                    notification.type === "success" 
                      ? "bg-green-500" 
                      : "bg-red-500"
                  }`}
                  style={{
                    animation: "shrink 5s linear forwards"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes shrink {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>

      <section id="testimonials" className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-3 text-balance">Reseñas de Clientes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Lo que dicen las personas sobre mi trabajo
            </p>
          </div>

          {/* Testimonials Grid */}
          {testimonials.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating ? "fill-accent text-accent" : "text-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 text-pretty leading-relaxed">"{testimonial.comment}"</p>
                  <div className="border-t border-border/50 pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.project}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center mb-12 py-8">
              <p className="text-muted-foreground">Sé el primero en dejar una reseña</p>
            </div>
          )}

          {/* Add Review Button/Form */}
          {!showForm ? (
            <div className="text-center">
              <button
                onClick={() => setShowForm(true)}
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-full font-medium transition-all hover:scale-105 shadow-md"
              >
                Dejar una Reseña
              </button>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto bg-card rounded-2xl p-8 shadow-lg border border-border animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-2xl font-bold text-foreground mb-6">Comparte tu Experiencia</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Tu Nombre *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="Ej: María García"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Proyecto *</label>
                  <input
                    type="text"
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="Ej: E-commerce de Moda"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Calificación *</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent/50 rounded"
                      >
                        <Star
                          className={`w-8 h-8 transition-colors ${
                            star <= rating ? "fill-accent text-accent" : "text-muted-foreground/30"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Tu Reseña *</label>
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                    placeholder="Cuéntanos sobre tu experiencia trabajando conmigo..."
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg disabled:hover:shadow-none"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </span>
                    ) : "Enviar Reseña"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    disabled={isSubmitting}
                    className="px-6 py-3 rounded-lg border border-border hover:bg-secondary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  )
}