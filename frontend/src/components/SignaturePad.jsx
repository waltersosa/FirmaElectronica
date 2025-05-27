import { useRef } from 'react'
import SignatureCanvas from 'react-signature-canvas'
import { motion } from 'framer-motion'

function SignaturePad({ onSave }) {
  const sigPad = useRef(null)

  const clear = () => {
    sigPad.current.clear()
  }

  const save = () => {
    if (!sigPad.current.isEmpty()) {
      const signatureData = sigPad.current.toDataURL()
      onSave(signatureData)
    }
  }

  return (
    <motion.div 
      className="w-full max-w-md bg-background-light p-4 rounded-lg border-2 border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white rounded-lg mb-4">
        <SignatureCanvas
          ref={sigPad}
          canvasProps={{
            className: "w-full h-48 rounded-lg",
            style: { background: 'white' }
          }}
          backgroundColor="rgb(255, 255, 255)"
        />
      </div>
      
      <div className="flex space-x-4">
        <button
          onClick={clear}
          className="secondary-button flex-1 py-2 px-4 rounded-lg border border-gray-700"
        >
          Clear
        </button>
        <button
          onClick={save}
          className="primary-button flex-1"
        >
          Save Signature
        </button>
      </div>
    </motion.div>
  )
}

export default SignaturePad