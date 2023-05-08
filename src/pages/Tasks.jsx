import {
  Button,
  ButtonGroup,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const Tasks = ({ data }) => {
  return (
    <VStack>
      <Heading as={'h2'} fontSize="3xl" m={5}>
        Lista de tareas
      </Heading>
      {data &&
        data.map((d) => (
          <HStack
            w="500px"
            borderWidth="1px"
            borderRadius="lg"
            bg={'pink.300'}
            p={3}
            justifyContent={'space-between'}
            key={d.id}
            m={3}
          >
            <Text fontWeight={'bold'}>{d.title} </Text>
            <ButtonGroup>
              <Button as={Link} to={`/detalles/${d.id}`} data={data}>
                Detalles
              </Button>
            </ButtonGroup>
          </HStack>
        ))}
    </VStack>
  )
}
