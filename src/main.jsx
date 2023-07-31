import React from 'react'
import ReactDOM from 'react-dom/client'
// import { FocusScreen } from './04-useRef/FocusScreen'

import './index.css'
// import { Layout } from './05-LayoutEffect/Layout'
// import { Memorize } from './06-memo/Memorize'
import { MemoHook } from './06-memo/MemoHook'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <MemoHook />,
  // </React.StrictMode>,
)
