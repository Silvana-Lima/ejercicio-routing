import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const AppLayoutBlog = ({ children }) => {
  return (
    <header>
      <Breadcrumb
        bg={'purple.200'}
        p={10}
        display={'flex'}
        justifyContent={'flex-end'}
        fontWeight={'bold'}
      >
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/">
            Inicio
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/nueva-publicacion">
            Nueva Publicación
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      {children}
    </header>
  )
}
