import React from 'react'

const ShoeCard = ({ imgURL, changeMoneyImage, img }) => {

  const handleClick = () => {
    if (img !== imgURL.moneyImage) {
      changeMoneyImage(imgURL.moneyImage)
    }
  }
  return (
    <div className={`border-2 rounded-xl 
    ${img === imgURL.moneyImage
        ? 'border-coral-red'
        : 'border-transparent'
      } cursor-pointer max-sm:flex-1`} onClick={handleClick}>
      <div className='flex items-center justify-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <img
          src={imgURL.thumbnail}
          alt='small money colection'
          width={127}
          height={103}
          className='object-contain' 
        />
      </div>
    </div>
  )
}
export default ShoeCard