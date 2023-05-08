import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import { AppLayout } from './layout/AppLayout'
import { Details } from './pages/Details'
import { EditTask } from './pages/EditTaks'
import { Tasks } from './pages/Tasks'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  return (
    <>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Tasks data={data} />} />
          <Route path="/detalles/:id" element={<Details data={data} />} />
          <Route path="/editar/:id" element={<EditTask data={data} />} />
          <Route path="*" element={<h4>ERROR</h4>} />
        </Routes>
      </AppLayout>
    </>
  )
}

export default App
