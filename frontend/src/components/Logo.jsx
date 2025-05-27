import { motion } from 'framer-motion'

function Logo() {
  return (
    <motion.div 
      className="flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary mr-3">
        <span className="text-white text-xl font-bold">DS</span>
      </div>
      <span className="text-xl font-semibold text-white">Digital<span className="text-primary">Sign</span></span>
    </motion.div>
  )
}

export default Logo