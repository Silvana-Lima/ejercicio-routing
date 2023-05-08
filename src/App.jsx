import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import { AppLayout } from './layout/AppLayout'
import { AppLayoutBlog } from './layout/AppLoyoutBlog'
import { Blogs } from './pages/Blogs'
import { Details } from './pages/Details'
import { DetailsBlog } from './pages/DetailsBlog'
import { EditTask } from './pages/EditTaks'
import { NuevaPublicacion } from './pages/NuevaPublicacion'
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
      {/* <AppLayout>
        <Routes>
          <Route path="/" element={<Tasks data={data} />} />
          <Route path="/detalles/:id" element={<Details data={data} />} />
          <Route path="/editar/:id" element={<EditTask data={data} />} />
          <Route path="*" element={<h4>ERROR</h4>} />
        </Routes>
      </AppLayout> */}

      <AppLayoutBlog>
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/detalles/:id" element={<DetailsBlog />} />
          <Route path="/nueva-publicacion" element={<NuevaPublicacion />} />
          <Route path="*" element={<h4>ERROR</h4>} />
        </Routes>
      </AppLayoutBlog>
    </>
  )
}

export default App
