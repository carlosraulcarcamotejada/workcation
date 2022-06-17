import { SearchIcon, XCircleIcon } from '@heroicons/react/solid';
import {FC, useRef} from 'react';


const InputSearch:FC<{handleInputChange:(e:React.ChangeEvent<HTMLInputElement>)=>void, inputSearch:string,handleReset:()=>void}> = ({inputSearch,handleInputChange,handleReset}) => {

  const inputSearchReference = useRef<HTMLInputElement>(null);

 


    return (
      <>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3'>
          <div className="h-6 w-6 fill-current text-gray-600 py-1" > <SearchIcon /> </div>
        </div>
        <div className={`${(inputSearch.length === 0)&&'hidden '} absolute inset-y-0 right-0 flex items-center p-2 `}>
          <button type='button' 
            onClick={()=>{inputSearchReference.current?.focus();
              handleReset();
            }} 
            className={`h-6 w-6 fill-current text-gray-600`}>
            <XCircleIcon />
          </button>
        </div>
  
        <input 
          name='inputSearch'
          id='inputSearch'
          onChange={e=>handleInputChange(e)}
          value={inputSearch}
          className=' block w-full bg-gray-900 focus:outline-none 
          focus:bg-white focus:text-gray-900 text-white rounded-lg pl-10
          pr-4 py-2 xl:bg-gray-200' 
          type="text"
          ref={inputSearchReference}
          placeholder='Search' />

    </>
    )
  }

export default InputSearch