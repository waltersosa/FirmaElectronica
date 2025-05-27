import { motion } from 'framer-motion'
import RegisterForm from './RegisterForm'
import Logo from './Logo'

function RegisterPage() {
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
          <h1 className="text-3xl font-semibold text-white mb-2">Crear Cuenta</h1>
          <p className="text-gray-400 mb-8">Únete a nuestra plataforma de firmas electrónicas</p>
          <RegisterForm />
        </motion.div>
      </div>
      
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-secondary-dark via-background to-primary-dark items-center justify-center p-12">
        <div className="text-center text-white max-w-md">
          <h2 className="text-3xl font-bold mb-4">Bienvenido a Digital Sign</h2>
          <p className="text-gray-300">
            Tu plataforma de confianza para firmas electrónicas seguras. Únete a miles de profesionales que confían en nosotros para sus necesidades de documentación digital.
          </p>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage