import Image from 'next/image'
import serviceBg from '/public/images/grid.jpg'

function ServiceBg() {
  return (
    <div className='relative w-full flex justify-center'>
      <Image src={serviceBg} alt='' className='w-1/2'/>
      <div></div>
    </div>
  )
}

export default ServiceBg