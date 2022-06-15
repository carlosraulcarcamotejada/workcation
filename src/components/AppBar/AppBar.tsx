import { FC, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, SearchIcon, XCircleIcon, XIcon } from '@heroicons/react/solid';
import { Menu, Transition } from '@headlessui/react';
import useForm from '../../hooks/useForm';

const AppBar:FC<{setSearchField:(searchField:string)=>void}> = ({setSearchField}) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className='bg-gray-900 sm:flex sm:justify-between xl:flex-shrink-0 xl:bg-white'>
      <div className='flex justify-between px-4 py-3 '>
        <LogoImage />
        <InputSearch setSearchField={setSearchField}/>
        <MenuButton setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
      <MenuPanel isOpen={isOpen}  />
    </header>
  );
};

const InputSearch:FC<{setSearchField:(searchField:string)=>void}> = ({setSearchField}) => {

  const {form:{inputSearch},handleInputChange,handleReset} = useForm();
  const inputSearchReference = useRef<HTMLInputElement>(null);

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    console.log(inputSearch);
    setSearchField(inputSearch);
    handleReset();
  };

  return (
    <div className='relative sm:w-1/2 lg:w-2/5 hidden xl:block xl:w-72 '>
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
            text-white rounded-lg pl-9 pr-8 xl:bg-gray-200' 
      type="text"
      ref={inputSearchReference}
      placeholder='Search' />
    </form>
  </div>
  )
}


const LogoImage:FC = () => {
  return (
    <div className='xl:bg-gray-900 xl:w-72 xl:-ml-4 xl:-my-4 xl:py-5 xl:px-12 xl:mr-2'>
      <Link to={"#"}>      
      <img className='h-8 w-auto ' 
      src={'/assets/logoWorkcation.svg'} alt='logoWorkcation' />
      </Link>
    </div>
  );
};

const MenuButton:FC<{setIsOpen:(isOpen:boolean)=>void,isOpen:boolean}> = ({setIsOpen,isOpen}) => {
  return (
    <div className="flex">
      <button type='button' onClick={ () => setIsOpen(!isOpen)} 
      className='px-2 text-gray-500 hover:text-white 
                 focus:outline-none focus:text-white sm:hidden'>
        <div className="h-6 w-6 fill-current" >
        <MenuIcon className={`${isOpen&&'hidden'}`}/>
        <XIcon className={`${!isOpen&&'hidden'}`} />
        </div>
      </button>
    </div>
  );
};

const MenuPanel:FC<{isOpen:boolean}> = ({isOpen}) => {

  return (
    <div className={`${!isOpen&&'hidden'} sm:flex sm:items-center xl:bg-white`}>
       
      <SitePageLinks />
      <UserPanel/>

    </div>
  );
};

const SitePageLinks:FC = () => {
  const links = [
    {
      id:'1',
      link: 'List your property',
    },
    {
      id:'2',
      link: 'Trip',
    },
    {
      id:'3',
      link: 'Messages',
    },
  ];
  return (
    <nav className={`px-2 pt-2 pb-5 border-b border-gray-800 sm:flex sm:pt-4 sm:border-0 `} >
      {
        links.map( ({id,link}) => 
        <Link key={id} className='mt-1 block px-3 py-1 rounded first:mt-0 font-semibold text-white 
                                hover:bg-gray-800 sm:text-sm sm:mt-0 xl:text-black'
        to={"#"}>{link}</Link>)
      }
    </nav>
  )
}


const UserPanel:FC = () => {
  return (
      <Menu as='div' className={`px-5 py-5 sm:py-0 sm:flex sm:pl-0 sm:relative`}>
        {
          ({open}) => (
            <>
              <UserAvatar user={'Isla Schoger'} />
              <UserOptions open={open}/>
            </>
          )
        }
       
      </Menu>
  )
}

const UserAvatar:FC<{user:string}> = ({user}) => {
  return (
    <>
      <Menu.Button
      type='button'
      className='hidden sm:block 
      sm:rounded-full sm:focus:outline-none sm:focus:ring-2 sm:focus:ring-offset-2
       sm:focus:ring-offset-gray-800 sm:focus:ring-white'
      >
        <div className='flex items-center'>
          <img 
            className='h-10 w-10 object-cover rounded-full border-2 border-gray-600 sm:h-9 sm:w-9' 
            src='/assets/profilePicture.avif' alt='profilePicture' />
          <span className='ml-4 font-semibold text-gray-200 sm:hidden'>{user}</span>
        </div>
      </Menu.Button>
      <div className='flex items-center sm:hidden'>
          <img 
            className='h-10 w-10 object-cover rounded-full border-2 border-gray-600 sm:h-9 sm:w-9' 
            src='./assets/profilePicture.avif' alt='profilePicture' />
          <span className='ml-4 font-semibold text-gray-200 sm:hidden'>{user}</span>
      </div>
    </>
  )
}


const UserOptions:FC<{open:boolean}>= ({open}) => {
  const ProfileLinks = [
    {
      id:'1',
      link: 'Account settings',
    },
    {
      id:'2',
      link: 'Support',
    },
    {
      id:'3',
      link: 'Sign out',
    },
  ];

  return (
    <>   
      <Transition show={open}
        enter='transform transition duration-100 ease-in'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='transform transition duration-75 ease-out'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Menu.Items
        className={`hidden 
        sm:block sm:absolute sm:origin-top-right sm:right-0 sm:w-48 sm:mt-10 sm:rounded-md 
         sm:py-1 sm:ring-1 sm:ring-black sm:ring-opacity-5 sm:focus:outline-none
        sm:border-indigo-300 sm:bg-white `}
        as='div'
        static
        >
          {
            ProfileLinks.map( ({id,link}) => ( 
            <Menu.Item  key={id} as='div' > 
              {
                ({active}) => (
                  <Link className={`sm:hover:bg-indigo-500 sm:font-semibold sm:hover:text-white
                    sm:block sm:px-4 sm:py-2 sm:text-sm sm:text-gray-500 
                    ${active&&'sm:bg-indigo-500 sm:text-white'}`}
                    to={"#"}>{link}
                  </Link> 
                )
                
              }
            </Menu.Item>
            ))
          }
        </Menu.Items>
      </Transition>

      <div className='mt-5 block sm:hidden'>
        {
        ProfileLinks.map( ({id,link}) => ( 
          <Link key={id} className={`mt-3 block first:mt-0 text-gray-200 hover:text-gray-700`}
          to={"#"}>{link}
          </Link> 
        ))
      }
      </div>
    </>
  )
}



export default AppBar;
