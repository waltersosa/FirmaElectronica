import { motion } from 'framer-motion'

function LoginIllustration() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }
  
  return (
    <motion.div 
      className="w-full h-full flex items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="relative">
        {/* Main circle */}
        <motion.div
          className="w-64 h-64 rounded-full bg-secondary/20 backdrop-blur-md flex items-center justify-center"
          variants={itemVariants}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="w-48 h-48 rounded-full bg-primary/30 backdrop-blur-md"
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </motion.div>
        
        {/* Floating elements */}
        <motion.div
          className="absolute -top-12 -right-8 w-24 h-24 rounded-full bg-secondary-light/20 backdrop-blur-md"
          variants={itemVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
        
        <motion.div
          className="absolute -bottom-4 -left-10 w-20 h-20 rounded-full bg-primary-light/30 backdrop-blur-md"
          variants={itemVariants}
          transition={{ duration: 0.5, delay: 0.6 }}
        />
        
        {/* Text overlay */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-white text-center"
          variants={itemVariants}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-2">Secure Login</h2>
          <p className="text-sm text-gray-300 max-w-xs">
            Protected with state-of-the-art encryption and authentication technology
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LoginIllustration