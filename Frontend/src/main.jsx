// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// // import App from './App.jsx'
// import UserSignup from './Components/usersignup.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Home/>
//   </StrictMode>,
// )

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import UserSignup from './Components/usersignup.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <UserSignup />
//   </StrictMode>
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import UserSignup from './Components/usersignup.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserSignup />
  </StrictMode>
)