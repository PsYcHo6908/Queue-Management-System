import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Page_1 from './Page/Page_1'
import Page_2 from './Page/Page_2'
import Question_1 from './Page/Question_1'
import Question_2 from './Page/Question_2'
import Question_3 from './Page/Question_3'
import Question_4 from './Page/Question_4'
import Question_5 from './Page/Question_5'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Page_1 />}></Route>
          <Route path='/customer' element={<Page_2/>}></Route>
          <Route path='/q1' element={<Question_1/>}></Route>
          <Route path='/q2' element={<Question_2/>}></Route>
          <Route path='/q3' element={<Question_3/>}></Route>
          <Route path='/q4' element={<Question_4/>}></Route>
          <Route path='/q5' element={<Question_5/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
