import { FC } from 'react';
import useFetchPhotos from '../../hooks/useFetchPhotos';
import PlaceCard from '../PlaceCard/PlaceCard';
import PlaceCards from '../PlaceCards/PlaceCards';
import Spinner from '../Spinner/Spinner';

const Main:FC<{searchField:string}> = ({searchField}) => {


 const {data:{photos,loading}} = useFetchPhotos(searchField);


  return (
    <main className='px-4 py-6 xl:overflow-x-hidden'>
        <Results searchField={searchField}/>
        <PlaceCards>
          {loading?<Spinner />:
          photos.map( ({id ,urls:url}) => <PlaceCard key={id} id={id} url={url.full} /> )}
        </PlaceCards>
    </main>
  )

}


const Results:FC<{searchField:string}> = ({searchField}) => {
    return (
      <div className=''>
        <h3 className='text-gray-900 text-xl'>{searchField}</h3>
        <p className='text-gray-600'>Live like the stars in these luxurios Sourthen California states.</p>
      </div>
    )
}

export default Main