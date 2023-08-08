import { UserContext } from "./UserContext"

const user = {
  id: 1,
  name: 'Luis Miguel Del Gallego',
  email: 'lmdelgallego@gmail.com'
}

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: 'Mundo',  user }}>
      {children}
    </UserContext.Provider>
  )
}
