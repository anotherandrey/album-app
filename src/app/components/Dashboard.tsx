import { useState, useEffect } from 'react'
import { observer } from 'mobx-react'
import { Flex } from '@chakra-ui/react'
import * as Api from '../openapi'
import { imagesStore } from '../stores'
import { ImageCard } from './'
import { DashboardSettings } from './DashboardSettings'

const PAGE_SIZE = 9
const SORT_BY = 'createdAt'

const Dashboard = observer(() => {
  const [page, setPage] = useState<number>(0)
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc')

  useEffect(() => {
    const api = new Api.ImagesPageableRestControllerApi()
    api
      .getImages({ page, pageSize: PAGE_SIZE, sortBy: SORT_BY, sortDirection })
      .then(pageableImageDto => {
        imagesStore.totalPages = pageableImageDto.totalPages ?? 0
        imagesStore.items = pageableImageDto.images ?? []
      })
      .catch(error => console.error(error))
  }, [page, sortDirection])

  return (
    <>
      <Flex justifyContent={'center'} flexWrap={'wrap'} gap={1}>
        {imagesStore.items.map((item, key) => (
          <div key={key}>
            <ImageCard item={item} />
          </div>
        ))}
      </Flex>
      <DashboardSettings
        page={page}
        setPage={setPage}
        sortDirection={sortDirection}
        setSortDirection={setSortDirection}
      />
    </>
  )
})

export { Dashboard }
