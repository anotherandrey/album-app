import { Stack } from '@chakra-ui/react'
import { PrepFilesSubmitForm, Dashboard } from '../components'

const AlbumPage = () => {
  return (
    <Stack m={'0.5rem'}>
      <div style={{ margin: 'auto' }}>
        <PrepFilesSubmitForm />
      </div>
      <Dashboard />
    </Stack>
  )
}

export { AlbumPage }
