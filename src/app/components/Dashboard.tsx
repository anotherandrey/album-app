import { useEffect } from 'react'
import { observer } from 'mobx-react'
import { Flex } from '@chakra-ui/react'
import * as Api from '../openapi'
import { albumStore } from '../stores'
import { ImageCard } from './'

type DashboardProps = {
  page: number
  pageSize: number
  sortBy: SortBy
  sortDirection: SortDirection
}

const Dashboard = observer((props: DashboardProps) => {
  useEffect(() => {
    const api = new Api.AlbumPageableRestControllerApi()
    api
      .getImages({ ...props })
      .then(imageDtoArray => {
        albumStore.totalPages = imageDtoArray.totalPages ?? 0
        albumStore.items = imageDtoArray.items ?? []
      })
      .catch(error => console.error(error))
  }, [props])

  return (
    <Flex justifyContent={'center'} flexFlow={'row wrap'} gap={1}>
      {albumStore.items.map((item, key) => (
        <div key={key}>
          <ImageCard item={item} />
        </div>
      ))}
    </Flex>
  )
})

export { Dashboard }
