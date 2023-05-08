import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react'

export const NuevaPublicacion = () => {
  return (
    <VStack m={10}>
      <FormControl display={'flex'} flexDirection={'column'} gap={5} w={600}>
        <Heading as={'h3'} fontSize={'2xl'}>
          Nueva Publicación
        </Heading>
        <FormLabel htmlFor="title">Título</FormLabel>
        <Input type="text" name="title" />
        <FormLabel htmlFor="content">Contenido</FormLabel>
        <Textarea
          placeholder="Ingrese aquí el contenido de su publicación"
          name="content"
        />
        <FormLabel htmlFor="image">Seleccionar imagen</FormLabel>
        <Input type="file" name="image" />
        <Button type="submit">Crear</Button>
      </FormControl>
    </VStack>
  )
}
