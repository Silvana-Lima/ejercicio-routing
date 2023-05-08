import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react'
import { Link, useParams } from 'react-router-dom'

export const Details = ({ data }) => {
  const { id } = useParams()

  const task = data.find((d) => d.id === Number(id))

  return (
    <Card>
      <CardHeader>
        <Heading size="md">Tarea</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Titulo
            </Heading>
            <Text pt="2" fontSize="sm">
              {task.title}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Estado
            </Heading>
            <Text pt="2" fontSize="sm">
              {task.completed ? 'Completa' : 'Incompleta'}
            </Text>
          </Box>
          <Box>
            <Button as={Link} to={`/editar/${task.id}`} data={data}>
              Editar
            </Button>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  )
}
