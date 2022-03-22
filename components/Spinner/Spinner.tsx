import React from 'react'

const Spinner = () => (
  <svg
    className='w-6 h-6'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 100 100'
    width='3rem'
    height='3rem'>
    <path d='M73 50c0-12.7-10.3-23-23-23S27 37.3 27 50m3.9 0c0-10.5 8.5-19.1 19.1-19.1S69.1 39.5 69.1 50'>
      <animateTransform
        attributeName='transform'
        attributeType='XML'
        type='rotate'
        dur='1s'
        from='0 50 50'
        to='360 50 50'
        repeatCount='indefinite'
      />
    </path>
  </svg>
)

export default Spinner