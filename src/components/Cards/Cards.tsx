import { FC } from 'react';

const Cards:FC<{children:JSX.Element[] | JSX.Element}> = ({children}) => {
  return (
    <div className='sm:flex sm:-mx-2 sm:snap-x sm:overflow-x-auto sm:pb-8'>
     {children}
    </div>
  )
}

export default Cards;