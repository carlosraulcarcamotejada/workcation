import { useState, FC } from 'react';
import { SearchIcon, AdjustmentsIcon } from '@heroicons/react/solid';


const SearchBar:FC = () => {


  const [isOpen, setisOpen] = useState<boolean>(false);
  
  return (
    <section className='bg-gray-800 '>
      <div className='flex justify-between px-4 py-3'>
        <InputSearch />
        <ButtonFilter isOpen={isOpen} setisOpen={setisOpen} />
      </div>
      <FilterPanel isOpen={isOpen} />
    </section>
  )
}


const InputSearch:FC = () => {
  return (
    <div className='relative'>
    <div className='absolute inset-y-0 left-0 flex items-center pl-2'>
      <div className="h-6 w-6 fill-current text-gray-600" > <SearchIcon /> </div>
    </div>
    <input className='mt-0 bg-gray-900 focus:outline-none focus:bg-gray-200 focus:text-gray-900 text-white rounded-lg pl-10' type="text" placeholder='Search by keywords' />
  </div>
  )
}

const ButtonFilter:FC<{isOpen:boolean,setisOpen:Function}> = ({isOpen,setisOpen}) => {
  return (
    <div className='flex items-center'>
    <button 
    className={`${isOpen?'bg-gray-900':'bg-gray-700'} inline-flex text-gray-500  
                          hover:bg-gray-600 focus:outline-none  
                            rounded-lg shadow pl-2 pr-4 ml-4 py-2 hover:text-white`} 
                            type='button' 
                            onClick={()=> setisOpen(!isOpen)} 
    >
                 
      <div  className="h-6 w-6 fill-current "> <AdjustmentsIcon /> </div>
      <span className='ml-1 text-white font-medium'>Filters</span>
    </button>
  </div>
  )
}

const FilterPanel:FC<{isOpen:boolean}> = ({isOpen}) => {

  const selectOptions = [
    {id:1, option:'Bedrooms', range:[1,2,3,4] },
    {id:2, option:'Bathrooms',range:[1,2,3]},
  ];

  const propertyOptions = [
    {id:1,option:'House'},
    {id:2,option:'Apartment'},
    {id:3,option:'Loft'},
    {id:4,option:'Townhouse'},
  ];


  const checkboxOptions = [
    {id:1,option:'Balcony'},
    {id:2,option:'Air Conditioning'},
    {id:3,option:'Beach'},
    {id:4,option:'Pet friendly'},
    {id:5,option:'Kid friendly'},
    {id:6,option:'Townhouse'},
  ]


  return (
    <div className={`${!isOpen&&'hidden'}`}>
      <fieldset className='px-4 py-4 border-t border-gray-900'>
        <div className='flex -mx-2'>
          {
            selectOptions.map( ({id,option,range}) => {return ( 
              <div className='block w-1/2 px-2' key={id}>
              <label className='text-sm font-semibold text-gray-500' key={id} htmlFor={option}>{option}</label>
              <select className='' name={option} id={option}>
                {
                  range.map( sltOpt => <option key={sltOpt} value="4">{sltOpt}</option> )
                }
              </select>
              </div>

            )}) 
          }
        </div>
        
        <div className='block mt-4'>
          <label className='text-sm font-semibold text-gray-500 block'  htmlFor="priceRange">Price Range</label>
            <select className='' name='priceRange' id='priceRange'>
            <option value="2000">{'$2,000 /wk'}</option>
            <option value="3000">{'$3,000 /wk'}</option>
            <option value="4000">{'$4,000 /wk'}</option>
            <option value="5000">{'$5,000 /wk'}</option>
          </select>
        </div>

      </fieldset>

      <fieldset className='px-4 py-4 border-t border-gray-900'>
        <span className='block text-sm font-semibold text-gray-500'>Property Type</span>
        {
          propertyOptions.map( ({id,option}) => {return (
            <div className='flex items-center ' key={id}>
              <input  type="radio" name='propertyT' id={option} value={option}/>
              <label className='mt-3 ml-2 text-white' key={option} htmlFor='propertyT'>{option}</label>
            </div>
          )})
        }
      </fieldset>

      <fieldset className='px-4 py-4 border-t border-gray-900'>
        <span className='block text-sm font-semibold text-gray-500'>Amenities</span>
        {
          checkboxOptions.map( ({option}) => {return (
            <div className='flex items-center'  key={option}>
              <input  type="checkbox" name="balcony" id={option} value={option} />
              <label className="mt-3 ml-2 text-white">{option}</label>
            </div>
          )})
        }
      </fieldset>

      <div className='bg-gray-900 px-4 py-4'>
        <button className='bg-indigo-500 hover:bg-indigo-400 font-semibold text-white px-4 py-2 rounded-lg w-full'>Update results</button>
      </div>
    </div>
  )
} 





export default SearchBar