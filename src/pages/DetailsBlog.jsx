import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Link, useParams } from 'react-router-dom'

import { arrayBlogs } from '../utils/arrayBlog'

export const DetailsBlog = () => {
  const { id } = useParams()

  const blog = arrayBlogs.find((b) => b.id === id)

  console.log(blog)

  return (
    <VStack p={10}>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
        w={'500px'}
      >
        <Image
          objectFit="cover"
          maxW={{ base: '100%', sm: '200px' }}
          src={blog.img}
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">{blog.title}</Heading>
            <Text>{blog.content}</Text>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="blue" as={Link} to="/">
              Volver
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </VStack>
  )
}
