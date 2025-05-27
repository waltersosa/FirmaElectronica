import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function InputField({ type, name, label, value, onChange, error, autoComplete }) {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  
  useEffect(() => {
    setIsFilled(value !== '')
  }, [value])
  
  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)
  
  return (
    <div className="relative">
      <div className={`input-group ${isFilled ? 'input-filled' : ''} mb-1`}>
        <input
          type={type}
          id={name}
          name={name}
          className="form-input"
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete={autoComplete}
          aria-describedby={error ? `${name}-error` : undefined}
        />
        <label 
          htmlFor={name} 
          className={`input-label ${(isFocused || isFilled) ? 'text-xs -translate-y-5' : ''} 
            ${isFocused ? 'text-primary' : 'text-gray-400'}`}
        >
          {label}
        </label>
      </div>
      
      {error && (
        <motion.div
          id={`${name}-error`}
          className="text-red-500 text-xs mt-1"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {error}
        </motion.div>
      )}
    </div>
  )
}

export default InputField