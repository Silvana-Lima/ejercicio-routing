import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  VStack,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { arrayBlogs } from '../utils/ArrayBlog'

export const Blogs = () => {
  return (
    <VStack p={10}>
      {arrayBlogs.map((b) => (
        <Card
          key={b.id}
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          variant="outline"
          w={'500px'}
        >
          <Image
            objectFit="cover"
            maxW={{ base: '100%', sm: '200px' }}
            src={b.img}
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Heading size="md">{b.title}</Heading>
            </CardBody>

            <CardFooter>
              <Button
                variant="solid"
                colorScheme="blue"
                as={Link}
                to={`/detalles/${b.id}`}
              >
                Ver más
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      ))}
    </VStack>
  )
}
