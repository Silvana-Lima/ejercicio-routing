import { Button, FormControl, FormLabel, Input, Switch } from '@chakra-ui/react'

export const EditTask = () => {
  return (
    <FormControl maxW={'sm'} p={10}>
      <FormLabel>Tarea</FormLabel>
      <Input type="text" mb={5} />
      <FormLabel>Estado </FormLabel>
      <span>Incompleta</span> <Switch mb={5} id="email-alerts" />{' '}
      <span>Completa</span>
      <hr />
      <Button mt={5}>Guardar</Button>
    </FormControl>
  )
}
