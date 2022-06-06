import { FC } from 'react'

const PlaceCards:FC<{children:JSX.Element[] | JSX.Element}> = ({children}) => {
  return (
    <div className=''>
     {children}
    </div>
  )
}

export default PlaceCards;