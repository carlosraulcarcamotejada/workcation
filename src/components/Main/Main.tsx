import { FC } from 'react';
import useFetchPhotos from '../../hooks/useFetchPhotos';
import Card from '../Card/Card';
import Cards from '../Cards/Cards';
import Spinner from '../Spinner/Spinner';

const Main:FC<{searchField:string}> = ({searchField}) => {


 const {data:{photos,loading}} = useFetchPhotos(searchField);


  return (
    <main className='px-4 py-6 xl:overflow-x-hidden '>
      <Results searchField={searchField} />
      <Cards>
        {loading?<Spinner />:
          photos.map( ({id ,urls:url}) => {return (
          <Card key={id} id={id} url={url.full} /> 
          )}
        )}
      </Cards>
    </main>
  )

}


const Results:FC<{searchField:string}> = ({searchField}) => {
    return (
      <div>
        {
          searchField.length > 0 &&
            <>
              <h3 className='text-gray-900 text-xl'>{searchField}</h3>
              <p className='text-gray-600'>Live like the stars in these luxurios Sourthen {searchField} states.</p>
            </>
        }
      </div>      
    )
}

export default Main;