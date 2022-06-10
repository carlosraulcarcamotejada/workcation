import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { motion, AnimatePresence } from 'framer-motion';

const Header:FC = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className='bg-gray-900 '>
      <div className='flex justify-between items-center px-4 py-3 '>
        <LogoHeader />
        <MenuButton setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
      <MenuPanel isOpen={isOpen}/>
    </header>
  );
};

const LogoHeader:FC = () => {
  return (
      <img className='h-8 w-auto' 
      src={'/assets/logoWorkcation.svg'} alt='logoWorkcation' />
  );
};

const MenuButton:FC<{setIsOpen:(isOpen:boolean)=>void,isOpen:boolean}> = ({setIsOpen,isOpen}) => {
  return (
    <div className="flex">
      <button type='button' onClick={ () => setIsOpen(!isOpen)} 
      className='px-2 text-gray-500 hover:text-white 
                 focus:outline-none focus:text-white'>
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
    <motion.div 
      animate={{
      height: isOpen ? "100%" : "0",
    }}>
    
    <AnimatePresence>
      {isOpen && (
        <motion.div> 
          <SitePageLinks />
          <UserPanel />
        </motion.div>
      )}
    </AnimatePresence>
    </motion.div>
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
    <motion.div className={`px-2 pt-2 pb-5 border-b border-gray-800 relative`} >
      {
        links.map( ({id,link}) => <Link key={id} className='mt-1 block px-3 py-1 rounded first:mt-0 font-semibold text-white hover:bg-gray-800 '  to={"#"}>{link}</Link>)
      }
    </motion.div>
  )
}


const UserPanel:FC = () => {
  return (
    <motion.div className={`px-5 py-5 `}>
      <UserAvatar />
      <UserOptions />
    </motion.div>
  )
}

const UserAvatar:FC = () => {
  return (
    <div className='flex items-center'>
      <img className='h-10 w-10 object-cover rounded-full border-2 border-gray-600' src='https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80' alt='' />
      <span className='ml-4 font-semibold text-gray-200'>Isla Schoger</span>
    </div>
  )
}
const UserOptions:FC = () => {

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
    <div className='mt-5 '>
      {
        ProfileLinks.map( ({id,link}) =>  <Link className='block mt-3 first:mt-0 text-gray-400 hover:text-white' key={link} to={"#"}>{link}</Link>)
      }
    </div>
  )
}



export default Header;
