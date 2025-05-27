import { Link } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import Container from '../components/Container'

function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <LoginForm />
    </div>
  )
}

export default LoginPage 