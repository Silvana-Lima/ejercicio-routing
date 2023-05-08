import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const AppLayout = ({ children }) => {
  return (
    <header>
      <Breadcrumb
        bg={'pink'}
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
      </Breadcrumb>
      {children}
    </header>
  )
}
