import { auth } from "@/firebase/firebase.config"
import { useAuthState } from "react-firebase-hooks/auth"
import { Navigate } from "react-router-dom"

const PrivateRoutes = ({children}:{children: React.ReactNode}) => {
  const [user, loading] = useAuthState(auth)
  if (loading) {
    return <p>Loading...</p>
  }
  if (!user) {
    return <Navigate to='/login'/>
  }
  return children
}
export default PrivateRoutes