import { motion } from 'framer-motion'
import LoginForm from './LoginForm'
import Logo from './Logo'

function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 min-h-screen flex items-center justify-center p-6 md:p-12">
        <motion.div 
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <Logo />
          </div>
          <h1 className="text-3xl font-semibold text-white mb-2">Bienvenido de nuevo</h1>
          <p className="text-gray-400 mb-8">Por favor, ingresa tus datos para iniciar sesión</p>
          <LoginForm />
        </motion.div>
      </div>
      
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-secondary-dark via-background to-primary-dark items-center justify-center p-12">
        <div className="text-center text-white max-w-md">
          <h2 className="text-3xl font-bold mb-4">Sistema de Firmas Electrónicas</h2>
          <p className="text-gray-300">
            Tu plataforma segura para la gestión de firmas electrónicas. Únete a miles de profesionales que confían en nosotros.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage