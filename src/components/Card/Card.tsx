import {FC} from 'react';
import {StarIcon} from '@heroicons/react/solid';


const Card:FC<{id:string, url:string}> = ({id, url}) => {

  
  return (
    <div 
    className='mt-5 sm:max-w-xs sm:w-full sm:flex-shrink-0
     sm:px-2 sm:snap-center'>
      <PosterImage id={id} url={url} />
      <InfoPlace />
    </div>
  )
}

const InfoPlace:FC = () => {
  return (
    <div className='px-4 -mt-16 relative'>
      <div className='bg-white rounded-lg px-4 py-4 shadow-lg'>
          <Specs />
          <Descrition desc='Modern home in city center' />
          <Price price={1400}/>
          <Reviews reviews = {34}/>
      </div>
    </div>
  )
}

const Reviews:FC<{n?:number,reviews:number}> = ({n=5,reviews}) => {
  return (
    <div className='mt-2 flex items-center text-sm text-gray-600'>
      {
        Array.from(Array(n)).map((n,i) => <StarIcon key={i} className='h-4 w-4 fill-current text-teal-600'/>)
      }
      <span className='ml-2'>{reviews} reviews</span>
   </div>
  )
}

const Price:FC<{price:number}> = ({price}) => {
  return (
    <div className='mt-1'>
      <span className='text-gray-900 '>${price}</span> <span className='ml-1 text-sm text-gray-600'>/wk</span>
    </div>
  )
}

const Descrition:FC<{desc:string}> = ({desc}) => {
  return (
    <h4 className='mt-1 text-gray-900 font-semibold text-lg'>{desc}</h4>
  )
}

const Specs:FC = () => {
  return (
    <div className=''>
      <span className='inline-block px-2 py-1 leading-none bg-teal-100 
      text-teal-800 rounded-full font-semibold uppercase
       tracking-wide text-xs'>Plus</span>
      <span className='ml-3 text-xs text-gray-600 font-semibold 
      uppercase tracking-wide'>3 beds &bull; 2 baths</span>
    </div>
  )
}

const PosterImage:FC<{url:string, id:string | number}> = ({url, id}) => {
  return (
    <div className='relative pb-5/6'>
      <img className='absolute inset-0 h-full object-cover 
      rounded-lg shadow-md' src={url} alt={id.toString()} />
    </div>
  )
}


export default Card;