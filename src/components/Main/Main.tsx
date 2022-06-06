import { FC } from 'react'
//import useFetchPhotos from '../../hooks/useFetchPhotos';
import useFetchPhotosUP from '../../hooks/useFetchPhotosUP';
import Loading from '../Loader/Loading';
import PlaceCard from '../PlaceCard/PlaceCard'
import PlaceCards from '../PlaceCards/PlaceCards'

const Main:FC = () => {


 const {data:{photos,loading}} = useFetchPhotosUP();


  return (
    <main className='px-4 py-6'>
        <SearhResults />
        <PlaceCards>
          {loading?<Loading />:
          photos.map( ({id ,urls:url}) => <PlaceCard key={id} id={id} url={url.small} /> )}
        </PlaceCards>
    </main>
  )

}


const SearhResults:FC = () => {
    return (
      <div className=''>
        <h3 className='text-gray-900 text-xl'>Los angeles</h3>
        <p className='text-gray-600'>Live like the stars in these luxurios Sourthen California states.</p>
      </div>
    )
}

export default Main