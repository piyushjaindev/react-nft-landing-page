import avatar from '../assets/images/avatar.png'
import eye from '../assets/icons/eye.svg'

function Highlight() {
  return (
    <section>
        <div className='w-full bg-[url(/images/mushroom.png)] h-[640px] bg-cover bg-center bg-no-repeat'>
            <div className="bg-linear-to-b from-[rgba(162,89,255, 0)] to-[#A259FF] w-full h-full" >
                <div className="mx-7 md:mx-20 xl:mx-28 h-full grid items-end">
                    <div className="mb-10 md:mb-16 w-full flex max-md:flex-col items-center justify-center md:items-end">
                        <div className='flex-1'>
                            <div className="w-max flex gap-3 bg-[#3b3b3b] rounded-20 px-5 py-2.5">
                                <img src={avatar} alt="avatar" width={24} height={24} />
                                <p className='text-white text-base leading-[140%]'>Shroomie</p>
                            </div>
                            <h2 className='mt-7 text-white text-4xl xl:text-5xl leading-[120%] xl:leading-[110%] font-semibold'>Magic Mashrooms</h2>
                            <button className='mt-7 bg-white rounded-[20px] flex justify-center gap-3 px-12 py-5 max-md:w-full'>
                                <img src={eye} alt='eye' />
                                <p className='text-base text-black leading-[140%] font-semibold'>See NFT</p>
                            </button>
                       
                        </div>
                        <div className='bg-[rgba(59,59,59,0.50)] rounded-20 p-7 max-md:mt-7'>
                            <p className='text-white text-xs font-[Space_Mono] leading-[110%]'>Auction ends in:</p>
                            <p className='mt-2.5 text-white text-3xl md:text-4xl font-bold font-[Space_Mono] leading-[120%]'>08 : 59 : 43</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Highlight