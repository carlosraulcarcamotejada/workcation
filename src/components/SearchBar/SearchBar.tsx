import { useState, FC } from 'react';

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
      <svg className="h-6 w-6 fill-current text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
    </div>
    <input className='bg-gray-900 focus:outline-none focus:bg-gray-200 focus:text-gray-900 text-white rounded-lg pl-10 py-2' type="text" placeholder='Search by keywords' />
  </div>
  )
}

const ButtonFilter:FC<{isOpen:boolean,setisOpen:Function}> = ({isOpen,setisOpen}) => {
  return (
    <div className='flex items-center'>
    <button onClick={()=> setisOpen(!isOpen)} className='inline-flex hover:bg-gray-600 focus:outline-none bg-slate-700 rounded-lg shadow pl-2 pr-4 py-2 hover:text-white ' type='button'>
      <svg className="h-6 w-6 fill-current text-gray-500 " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm3 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1zm4 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4z"/></svg>
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
          propertyOptions.map( ({option}) => {return (
            <label className='flex items-center' key={option} htmlFor="">
            <input className='block' type="radio" name={option.toUpperCase()} id={option.toUpperCase()} value={option}/>
            <span className='ml-2 text-white'>{option}</span>
          </label>
          )})
        }

      </fieldset>

      <fieldset className='px-4 py-4 border-t border-gray-900'>
        <span className='block text-sm font-semibold text-gray-500'>Amenities</span>

        {
          checkboxOptions.map( ({option}) => {return (
            <label className='block' key={option} htmlFor="">
            <input className='' type="checkbox" name="balcony" id="balcony" />
            <span className='ml-2 text-white'>{option}</span>
          </label>
          )})
        }


      </fieldset>
      <div>
        <button className='mx-2 px-10 w-full bg-blue-400 text-white m-auto' >Update results</button>
      </div>
    </div>
  )
} 

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}



export default SearchBar