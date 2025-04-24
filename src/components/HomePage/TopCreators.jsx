import Section from '../Section'
import rocket from '../../assets/icons/rocket.svg'
import avatar from '../../assets/images/avatar.png'

function TopCreators() {

    const creators = new Array(12);
    creators.fill({})

  return (
    <Section>
        <div className='flex'>
            <div className='flex-1'>
                <h3 className='text-white text-4xl max-xl:text-[28px] leading-[120%] max-xl:leading-[140%] font-semibold'>Top Creators</h3>
                <p className='text-white text-[22px] max-xl:text-base leading-[160%] max-md:leading-[140%]'>Checkout Top Rated Creators on the NFT Marketplace</p>
            </div>
            <button className={`max-md:hidden bg-transparent py-5 px-12 rounded-20 flex gap-3 border-[#a259ff] border-2 items-center`}>
               <img src={rocket} alt="rocket" height={20} width={20} className='fill-[#a259ff]'/>
                <p className='text-white text-base font-semibold leading-[140%]'>View Rankings</p>
            </button>
        </div>
        <div className='mt-14 max-xl:mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[30px] max-md:gap-5'>
            {
                creators.map((_, index) => (
                    <div key={index} className='bg-[#3b3b3b] rounded-[20px] p-5 flex xl:flex-col items-center justify-center'>
                        <img src={avatar} alt="Avatar" height={120} width={120} className='max-xl:hidden'/>
                        <img src={avatar} alt="Avatar" height={60} width={60} className='xl:hidden'/>
                        <div className='xl:text-center xl:mt-5 max-xl:ml-5'>
                            <h5 className="text-[22px] text-white leading-[140%] font-semibold ">Animakid</h5>
                            <p className="text-base leading-[140%] text-[#858584]">Total Sales: <span className='text-white font-[Space_Mono]'>34.53 ETH</span></p>
                        </div>
                    </div>
                ))
            }
        </div>
    </Section>
  )
}

export default TopCreators
