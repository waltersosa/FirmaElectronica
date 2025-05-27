import { useNavigate } from 'react-router-dom'

function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-8">¡Bienvenido a la Página de Inicio!</h1>
      <p className="text-xl mb-8">Has iniciado sesión correctamente.</p>
      <button
        onClick={() => navigate('/login')}
        className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-primary/90 transition-colors"
      >
        Cerrar Sesión (Sin persistencia)
      </button>
    </div>
  )
}

export default HomePage 