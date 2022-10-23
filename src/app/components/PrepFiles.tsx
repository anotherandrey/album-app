import { observer } from 'mobx-react'
import { Flex, Box, Button } from '@chakra-ui/react'
import { prepFilesStore } from '../stores'

const PrepFiles = observer(() => {
  const handleOnDelete = (item: File) => {
    prepFilesStore.deleteItem(item)
  }

  return (
    <Flex direction={'column'}>
      {prepFilesStore.items.map((item, key) => (
        <Box key={key}>
          <PrepFile item={item} handleDelete={handleOnDelete} />
        </Box>
      ))}
    </Flex>
  )
})

type PrepFileProps = {
  item: File
  handleDelete: (item: File) => void
}

const PrepFile = ({ item, handleDelete }: PrepFileProps) => {
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} mt={'0.5rem'}>
      <Box color={'#e3e3e3'} fontWeight={'bold'}>
        name:
        <Box color={'black'} display={'inline'} mx={3}>
          {item.name}
        </Box>
        size:
        <Box color={'black'} display={'inline'} mx={3}>
          {item.size} B
        </Box>
      </Box>
      <Button
        colorScheme={'red'}
        variant={'outline'}
        onClick={() => handleDelete(item)}
      >
        delete
      </Button>
    </Flex>
  )
}

export { PrepFiles }
