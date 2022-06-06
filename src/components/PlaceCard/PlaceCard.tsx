import {FC} from 'react';

const PlaceCard:FC<{id:string | number, url:string}> = ({id, url}) => {

  
  return (
    <div className='mt-5'>
      <PosterImage id={id} url={url} />
      <div className='px-4 -mt-16 relative'>
        <div className='bg-white rounded-lg px-4 py-4 shadow-lg'>
          <Specs />
          <Descrition desc='Modern home in city center' />
          <Price price={1400}/>
          <Stars n={5} reviews = {34}/>
        </div>
      </div>
    </div>
  )
}

const Stars:FC<{n:number,reviews:number}> = ({n,reviews}) => {
  return (
    <div className='mt-2 flex items-center text-sm text-gray-600'>
      <svg className="h-4 w-4 fill-current text-teal-600"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"/></svg>
      <svg className="h-4 w-4 fill-current text-teal-600"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"/></svg>
      <svg className="h-4 w-4 fill-current text-teal-600"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"/></svg>
      <svg className="h-4 w-4 fill-current text-teal-600"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"/></svg>
      <svg className="h-4 w-4 fill-current text-teal-600"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"/></svg>
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
      <span className='inline-block px-2 py-1 leading-none bg-teal-100 text-teal-800 rounded-full font-semibold uppercase tracking-wide text-xs'>Plus</span>
      <span className='ml-3 text-xs text-gray-600 font-semibold uppercase tracking-wide'>3 beds &bull; 2 baths</span>
    </div>
  )
}

const PosterImage:FC<{url:string, id:string | number}> = ({url, id}) => {
  return (
    <div className=''>
      <img className='rounded-lg shadow-md h-64' src={url} alt={id.toString()} />
    </div>
  )
}


export default PlaceCard;