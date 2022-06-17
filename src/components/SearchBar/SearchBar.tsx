import { FC, useState } from 'react';
import { AdjustmentsIcon } from '@heroicons/react/solid';
import InputSearch from '../InputSearch/InputSearch';



const SearchBar:FC<{handleInputChange:(e:React.ChangeEvent<HTMLInputElement>)=>void, inputSearch:string, handleReset:()=>void }> = ({inputSearch,handleInputChange,handleReset}) => {

  const [isOpen, setisOpen] = useState<boolean>(false);
  
  return (
    <section className='bg-gray-800 xl:w-72'>
      <div className='flex justify-between px-4 py-3 xl:hidden'>
        <div className='relative max-w-xs w-full xl:hidden'>
          <InputSearch handleInputChange={handleInputChange} inputSearch={inputSearch} handleReset={handleReset} />
        </div>
        <ButtonFilter isOpen={isOpen} setisOpen={setisOpen} />
      </div>
      <FilterPanel isOpen={isOpen} />
    </section>
  )
}




const ButtonFilter:FC<{isOpen:boolean,setisOpen:(isOpen:boolean) => void}> = ({isOpen,setisOpen}) => {
  return (
    <button 
      className={`${isOpen?'bg-gray-600':'bg-gray-700'} ml-4 inline-flex items-center 
      hover:bg-gray-600 focus:outline-none focus:shadow-outline rounded-lg shadow pl-3 pr-4`} 
      type='button' 
      onClick={()=> setisOpen(!isOpen)} 
    >
                 
      <div className="h-6 w-6 fill-current text-gray-500"> <AdjustmentsIcon /> </div>
      <span className='ml-1 text-white font-medium'>Filters</span>
    </button>
  )
}

const FilterPanel:FC<{isOpen:boolean}> = ({isOpen}) => {

  return ( 
      <div className={`${isOpen?'block ':'hidden'} xl:h-full xl:flex xl:flex-col xl:justify-between xl:w-72`}>
        <div className='lg:flex xl:block xl:overflow-y-auto'>
          <SelectOptions />

          <RadioButtons />

          <CheckBoxes />
        </div>

        <UpdateResultsButton />
    </div>
  )
} 


const SelectOptions:FC = () => {
  const selectOptions = [
    {id:1, option:'Bedrooms', range:[1,2,3,4] },
    {id:2, option:'Bathrooms',range:[1,2,3]},
  ]
  const priceRangeOptions = [
    {
      id:'1',
      priceRange:'$2,000 /wk'
    },
    {
      id:'2',
      priceRange:'$2,500 /wk'
    },
    {
      id:'3',
      priceRange:'$3,000 /wk'
    },
    {
      id:'4',
      priceRange:'$3,500 /wk'
    },
  ]
  return (
    <div className='px-4 py-4 border-t border-gray-900 lg:w-1/3 xl:border-t-0 xl:w-full'>
      <div className='flex flex-wrap -mx-2'>
        {
          selectOptions.map( ({id,option,range}) =>  ( 
            <div className='block w-1/2 px-2 sm:w-1/4 lg:w-1/2' key={id}>
              <label className='text-sm font-semibold text-gray-500' key={id} 
                htmlFor={option}>{option}
              </label>
              <select name={option} id={option}>
                {
                  range.map( sltOpt => <option key={sltOpt} value={sltOpt}>{sltOpt}</option> )
                }
              </select>
            </div>
            )) 
        }

        <div className='mt-4 block w-full px-2 sm:mt-0 sm:w-1/2 lg:mt-4 lg:w-full'>
          <label className='text-sm font-semibold text-gray-500'  
          htmlFor="priceRange">Price Range</label>
          <select name='priceRange' id='priceRange'>
            {
              priceRangeOptions.map( ({id,priceRange}) => <option key={id} 
              value={priceRange}>{priceRange}</option> )
            }
          </select>
        </div>
      </div>
    </div>
  )
}


const RadioButtons:FC = () => {
  const propertyOptions = [
    {id:1,option:'House'},
    {id:2,option:'Apartment'},
    {id:3,option:'Loft'},
    {id:4,option:'Townhouse'},
  ];
  return (
    <div className='px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l xl:w-full'>
      <span className='block text-sm font-semibold text-gray-500'>Property Type</span>
      <div className='sm:flex sm:-mx-2 lg:block lg:mx-0'>
        {
          propertyOptions.map( ({id,option}) => { return (
            <div key={id} className='mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0'>
              <input type="radio" name='propertyT' id={option} value={option}/>
              <label className='ml-2 text-white' key={option} htmlFor='propertyT'>{option}</label>
            </div>
          )})
        }
      </div>
    </div>
  )
}


const CheckBoxes:FC = () => {
  const checkboxOptions = [
    {id:1,option:'Balcony'},
    {id:2,option:'Air Conditioning'},
    {id:3,option:'Pool'},
    {id:4,option:'Beach'},
    {id:5,option:'Pet friendly'},
    {id:6,option:'Kid friendly'},
    {id:7,option:'Parking'},
  ]

  return (
    <div className='px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l xl:w-full'>
      <span className='block text-sm font-semibold text-gray-500'>Amenities</span>
      <div className='sm:flex sm:-mx-2 sm:flex-wrap'>
        {
          checkboxOptions.map( ({id,option}) => { return (
            <div className='mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full' key={id}>
              <input type="checkbox" name="balcony" id={option} value={option} />
              <label className="ml-2 text-white">{option}</label>
            </div>
          )}) 
        }
      </div>
  </div>
  )
}



const UpdateResultsButton:FC = () => {
  return (
    <div className='bg-gray-900 px-4 py-4 sm:text-left'>
      <button type='submit' className='block w-full sm:w-auto sm:inline-block bg-indigo-500 hover:bg-indigo-400 
      font-semibold text-white px-4 py-2 rounded-lg xl:block xl:w-full'>Update results</button>
    </div>
  )
} 



export default SearchBar