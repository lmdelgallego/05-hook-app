import { useRef } from "react"

export const FocusScreen = () => {

  const inputRef = useRef()
  console.log(inputRef)

  const onClick = () => {
    // document.querySelector('#text').select()
    // console.log(inputRef)
    inputRef.current.select()
  }

  return (
    <>
      <h1>FocusScreen</h1>
      <hr />
      <input type="text" name="text" id="text" placeholder="Ingrese su nombre" className="form-control" ref={inputRef} />
      <button className="btn btn-outline-primary mt-3" onClick={onClick}>Focus</button>
    </>
  )
}
