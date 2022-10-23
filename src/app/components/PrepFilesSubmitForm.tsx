import { useDropzone } from 'react-dropzone'
import { Box, Button } from '@chakra-ui/react'
import * as Api from '../openapi'
import { albumStore, prepFilesStore } from '../stores'
import { PrepFiles } from './'

const PrepFilesSubmitForm = () => {
  const handleOnDrop = (items: File[]) => {
    prepFilesStore.addItems(items)
  }

  const { getRootProps, getInputProps } = useDropzone({ onDrop: handleOnDrop })

  const handleOnSubmit = (e: any) => {
    e.preventDefault()
    const api = new Api.AlbumCrudRestControllerApi()
    prepFilesStore.items.forEach(item => {
      const xFilename: string = item.name
      api
        .create({ xFilename, contentType: item.type, body: item })
        .then(image => albumStore.addItem(image))
        .catch(error => console.error(error))
    })
    prepFilesStore.deleteAllItems()
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <Box
        {...getRootProps()}
        color={'black'}
        fontWeight={'bold'}
        textAlign={'center'}
        border={'2px dashed black'}
        borderRadius={'0.375rem'}
        w={'25rem'}
        h={`12.5rem`}
      >
        <input {...getInputProps()} />
        <Box m={`${12.5 / 2 - 1.5 / 2}rem`}>drag & drop files here.</Box>
      </Box>
      <PrepFiles />
      <Box mt={'0.5rem'}>
        <Button colorScheme={'teal'} variant={'outline'} type={'submit'}>
          submit
        </Button>
      </Box>
    </form>
  )
}

export { PrepFilesSubmitForm }
