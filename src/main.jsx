import React from 'react'
import ReactDOM from 'react-dom/client'
// import { FocusScreen } from './04-useRef/FocusScreen'

import './index.css'
// import { Layout } from './05-LayoutEffect/Layout'
// import { Memorize } from './06-memo/Memorize'
// import { MemoHook } from './06-memo/MemoHook'
import { CallbackHook } from './06-memo/CallbackHook'
import { Padre } from './07-tarea-memo/Padre'
import './08-useReducer/intro-reducer'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Padre />,
  // </React.StrictMode>,
)
