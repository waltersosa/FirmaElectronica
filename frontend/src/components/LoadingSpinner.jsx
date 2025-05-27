function LoadingSpinner({ className = "h-4 w-4" }) {
  return (
    <div 
      className={`inline-block rounded-full border-2 border-current border-t-transparent animate-spin ${className}`}
      role="status"
      aria-label="loading"
    />
  )
}

export default LoadingSpinner 