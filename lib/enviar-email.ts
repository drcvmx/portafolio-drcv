const FORMSPREE_ENDPOINT = "https://formspree.io/f/xykdnywa"

export interface ContactFormData {
    name: string
    email: string
    subject: string
    message: string
    phone?: string
    company?: string
}

export const enviarEmail = async (formData: ContactFormData) => {
    try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "Nombre": formData.name,
                "Email": formData.email,
                "Asunto": formData.subject,
                "Mensaje": formData.message,
                "Teléfono": formData.phone || "No proporcionado",
                "Empresa": formData.company || "No proporcionado",
                _subject: `${formData.subject} - Mensaje de ${formData.name}`,
            }),
        })

        if (response.ok) {
            return {
                success: true,
                message: "¡Mensaje enviado correctamente! Te responderé pronto.",
            }
        } else {
            const errorData = await response.json()
            throw new Error(errorData.error || "Error en la respuesta del servidor")
        }
    } catch (error) {
        console.error("Error al enviar email:", error)
        return {
            success: false,
            message: "Error al enviar el mensaje. Por favor, intenta de nuevo.",
        }
    }
}
