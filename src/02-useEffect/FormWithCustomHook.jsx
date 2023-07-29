import { useEffect } from "react"
import { useForm } from "../hooks/useForm"
import { Message } from "./Message"

export const FormWithCustomHook = () => {

  const { formState, onInputChange, email, username, password } = useForm({
    username: '',
    email: '',
    password: ''
  });

  // const { username, email, password } = formState;

  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <input type="text" className="form-control mb-2" placeholder="Username" name='username' value={username} onChange={onInputChange}/>
      <input type="email" className="form-control mb-2" placeholder="luismi@google.com" name='email' value={email} onChange={onInputChange}/>
      <input type="password" className="form-control" name='password' value={password} onChange={onInputChange}/>
      { username === 'lmdelgallego' && <Message />}
    </>
  )
}
