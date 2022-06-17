import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { Menu, Transition } from '@headlessui/react';
import InputSearch from '../InputSearch/InputSearch';

const AppBar:FC<{handleInputChange:(e:React.ChangeEvent<HTMLInputElement>)=>void, inputSearch:string, handleReset:()=>void }> = ({inputSearch,handleInputChange,handleReset}) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className='bg-gray-900 sm:flex sm:items-center sm:justify-between xl:bg-white'>
      <div className='flex justify-between px-4 py-3 xl:w-72 xl:bg-gray-900 xl:justify-center xl:py-5  '>
        <LogoImage />
        <MenuButton setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
      <MenuPanel isOpen={isOpen} handleInputChange={handleInputChange} inputSearch={inputSearch} handleReset={handleReset}/>
    </header>
  );
};


const LogoImage:FC = () => {
  return (
    <div className=''>
      <Link to={"#"}>      
      <img className='h-8 w-full' 
      src={'/assets/logoWorkcation.svg'} alt='logoWorkcation' />
      </Link>
    </div>
  );
};




const MenuButton:FC<{setIsOpen:(isOpen:boolean)=>void,isOpen:boolean}> = ({setIsOpen,isOpen}) => {
  return (
    <div className="flex sm:hidden">
      <button type='button' onClick={ () => setIsOpen(!isOpen)} 
        className='px-2 text-gray-500 hover:text-white focus:outline-none focus:text-white'>
        <div className="h-6 w-6 fill-current" >
          <MenuIcon className={`${isOpen&&'hidden'}`}/>
          <XIcon className={`${!isOpen&&'hidden'}`} />
        </div>
      </button>
    </div>
  );
};

const MenuPanel:FC<{isOpen:boolean,handleInputChange:(e:React.ChangeEvent<HTMLInputElement>)=>void, inputSearch:string, handleReset:()=>void}> = ({isOpen,inputSearch,handleInputChange,handleReset}) => {

  return (
    <nav className={`sm:flex sm:items-center sm:px-4 xl:flex-1 xl:justify-between ${isOpen?'block':'hidden'}`}>
      <div className='hidden xl:block xl:relative xl:max-w-xs xl:w-full '>
        <InputSearchAppBar handleInputChange={handleInputChange} inputSearch={inputSearch} handleReset={handleReset} />
      </div>

      <div className='sm:flex sm:items-center'>
        <SitePageLinks />
        <UserPanel/>
      </div>
    </nav>
  );
};


const InputSearchAppBar:FC<{handleInputChange:(e:React.ChangeEvent<HTMLInputElement>)=>void, inputSearch:string, handleReset:()=>void }> = ({inputSearch,handleInputChange,handleReset}) => {
  return (
    <div className='hidden xl:block'>
      <InputSearch handleInputChange={handleInputChange} inputSearch={inputSearch} handleReset={handleReset}/>
    </div>
  )
}


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
    <div className='px-2 pt-2 pb-5 border-b border-gray-800 sm:flex sm:border-b-0 sm:py-0 sm:px-0' >
      {
        links.map( ({id,link}) => 
        <Link key={id} className='first:mt-0 mt-1 block px-3 py-1 rounded font-semibold text-white hover:bg-gray-800 
                                  sm:mt-0 sm:text-sm sm:px-2 sm:ml-2 xl:text-gray-900 xl:hover:bg-gray-200'
        to={"#"}>{link}</Link>)
      }
    </div>
  )
}


const UserPanel:FC = () => {
  return (
      <Menu as='div' >
        {
          ({open}) => (
            <div className='relative px-5 py-5 sm:py-0 sm:ml-4 sm:px-0 z-40'>
              <UserAvatar user={'Isla Schoger'} />
              <UserOptions open={open}/>
            </div>
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
            className='h-10 w-10 object-cover rounded-full border-2 border-gray-600' 
            src='/assets/profilePicture.avif' alt='profilePicture' />
          <span className='ml-4 font-semibold text-gray-200 sm:hidden'>{user}</span>
        </div>
      </Menu.Button>
      <div className='flex items-center sm:hidden'>
          <img 
            className='h-10 w-10 object-cover rounded-full border-2 border-gray-600' 
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
      <div className='mt-5 sm:hidden'>
        {
          ProfileLinks.map( ({id,link}) => ( 
            <Link key={id} className='first:mt-0 mt-3 block text-gray-400 hover:text-white'
            to={"#"}>{link}
            </Link> 
          ))
        }
      </div>
      <Transition show={open}
        enter='transform transition duration-100 ease-in'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='transform transition duration-75 ease-out'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Menu.Items
        className={`hidden sm:block 
        absolute origin-top-right right-0 w-48 mt-2 rounded-md 
        py-1 ring-1 ring-black ring-opacity-5 focus:outline-none
      border-indigo-300 bg-white z-40`}
        >
          {
            ProfileLinks.map( ({id,link}) => ( 
              <Menu.Item  key={id} as='div' > 
              {
                ({active}) => (
                  <Link className={`block hover:text-white text-gray-800 mt-0 px-4 py-2 hover:bg-indigo-500
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


    </>
  )
}



export default AppBar;
