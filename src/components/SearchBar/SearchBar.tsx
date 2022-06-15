import { FC, useState, useRef } from 'react';
import { SearchIcon, AdjustmentsIcon, XCircleIcon } from '@heroicons/react/solid';
import useForm from '../../hooks/useForm';



const SearchBar:FC<{setSearchField:(searchField:string)=>void}> = ({setSearchField}) => {

  const [isOpen, setisOpen] = useState<boolean>(false);

  
  
  return (
    <section className='bg-gray-800 xl:w-72 '>
      <div className='flex justify-between px-4 py-3 xl:hidden'>
        <InputSearch setSearchField={setSearchField} />
        <ButtonFilter isOpen={isOpen} setisOpen={setisOpen} />
      </div>
      <FilterPanel isOpen={isOpen} />
    </section>
  )
}


const InputSearch:FC<{setSearchField:(searchField:string)=>void}> = ({setSearchField}) => {

  const {form:{inputSearch},handleInputChange,handleReset} = useForm();
  const inputSearchReference = useRef<HTMLInputElement>(null);

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    setSearchField(inputSearch);
    handleReset();
  };

  return (
    <div className='relative sm:w-1/2 lg:w-2/5 '>
      <div className='absolute inset-y-0 left-0 flex items-center p-2'>
        <div className="h-6 w-6 fill-current text-gray-600" > <SearchIcon /> </div>
      </div>
      <div className={`${(inputSearch.length === 0)&&'hidden '} 
      absolute inset-y-0 right-0 flex items-center p-2`}>
        <button type='button' onClick={()=>{handleReset();
        inputSearchReference.current?.focus();
        }} className={`h-6 w-6 fill-current text-gray-600`} > <XCircleIcon /> </button>
      </div>
    <form onSubmit={e => handleSubmit(e)}>
      <input 
      name='inputSearch'
      id='inputSearch'
      onChange={e=>handleInputChange(e)}
      value={inputSearch}
      className='mt-0 bg-gray-900 focus:outline-none 
            focus:bg-gray-200 focus:text-gray-900 
            text-white rounded-lg pl-9 pr-8 ' 
      type="text"
      ref={inputSearchReference}
      placeholder='Search' />
    </form>
  </div>
  )
}

const ButtonFilter:FC<{isOpen:boolean,setisOpen:(isOpen:boolean) => void}> = ({isOpen,setisOpen}) => {
  return (
    <div className='flex items-center'>
    <button 
    className={`${isOpen?'bg-gray-900':'bg-gray-700'} inline-flex text-gray-500  
                          hover:bg-gray-600 focus:outline-none  
                            rounded-lg  pl-2 pr-4 ml-4 py-2 hover:text-white`} 
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

  return ( 
      <section className={`${!isOpen&&'hidden'} 
      xl:flex xl:flex-col xl:h-full xl:justify-between xl:w-72 `}>
        <div className='lg:flex xl:block '> 

          <SelectOptions />

           <RadioButtons />

          <CheckBoxes />

        </div>

        <UpdateResultsButton />
    </section>
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
    <fieldset className='px-4 py-4 border-t border-gray-900 sm:flex 
    lg:w-2/5 lg:flex-wrap lg:content-start xl:w-full'>
       <div className='flex sm:w-1/2 lg:w-full'>
          {
            selectOptions.map( ({id,option,range}) =>  ( 
                <div className='block w-1/2 pr-4 last:pr-0 lg:w-1/2' key={id}>
                  <label className='text-sm font-semibold text-gray-500' key={id} 
                  htmlFor={option}>{option}</label>
                  <select name={option} id={option}>
                    {
                      range.map( sltOpt => <option key={sltOpt} value={sltOpt}>{sltOpt}</option> )
                    }
                  </select>
                </div>
                )) 
         }
      </div>
        
      <div className='mt-4 sm:mt-1 sm:w-1/2 sm:pl-4 lg:pl-0 lg:w-full lg:pt-5'>
        <label className='text-sm font-semibold text-gray-500 block'  
        htmlFor="priceRange">Price Range</label>
        <select className='' name='priceRange' id='priceRange'>
          {
            priceRangeOptions.map( ({id,priceRange}) => <option key={id} 
            value={priceRange}>{priceRange}</option> )
          }
        </select>
      </div>
    </fieldset>
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
    <fieldset className='px-4 py-4 border-t border-gray-900 lg:w-1/4 lg:pb-12
    lg:border-l lg:border-gray-900 '>
      <span className='block text-sm font-semibold text-gray-500'>Property Type</span>
      <div className='sm:flex sm:-mx-2 lg:block lg:mx-0'>
        {
          propertyOptions.map( ({id,option}) => { return (
            <div key={id} className='flex items-center sm:w-1/4 sm:px-2 lg:px-0 lg:first:mt-1 lg:mt-3'>
              <input className=''  type="radio" name='propertyT' id={option} value={option}/>
              <label className='mt-3 ml-2 text-white  ' key={option} htmlFor='propertyT'>{option}</label>
            </div>
          )})
        }
      </div>
    </fieldset>
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
    <fieldset className='px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l lg:border-gray-900'>
      <span className='block text-sm font-semibold text-gray-500'>Amenities</span>
      <div className='sm:flex sm:flex-wrap lg:-mt-2 xl:flex-col'>
        {
          checkboxOptions.map( ({id,option}) => { return (
            <div className='flex items-center sm:w-1/4 sm:pt-3 sm:mt-4 sm:pr-2 lg:w-1/2 lg:mt-0' key={id}>
              <input  type="checkbox" name="balcony" id={option} value={option} />
              <label className="mt-3 ml-2 text-white lg:whitespace-nowrap">{option}</label>
            </div>
          )}) 
        }
      </div>
  </fieldset>
  )
}



const UpdateResultsButton:FC = () => {
  return (
    <div className='bg-gray-900 px-4 py-4 sm:text-left'>
      <button className='bg-indigo-500 hover:bg-indigo-400 font-semibold 
      text-white px-4 py-2 rounded-lg w-full sm:w-1/4 xl:w-full'>Update results</button>
    </div>
  )
} 



export default SearchBar