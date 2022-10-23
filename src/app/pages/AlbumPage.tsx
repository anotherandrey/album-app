import { useState } from 'react'
import { Stack } from '@chakra-ui/react'
import { PrepFilesSubmitForm, Dashboard } from '../components'

const AlbumPage = () => {
  const [page, setPage] = useState<number>(0)
  const [pageSize, setPageSize] = useState<number>(999)
  const [sortBy, setSortBy] = useState<SortBy>('createdAt')
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc')

  return (
    <Stack m={'0.5rem'}>
      <div style={{ margin: 'auto' }}>
        <PrepFilesSubmitForm />
      </div>
      <Dashboard
        page={page}
        pageSize={pageSize}
        sortBy={sortBy}
        sortDirection={sortDirection}
      />
    </Stack>
  )
}

export { AlbumPage }
