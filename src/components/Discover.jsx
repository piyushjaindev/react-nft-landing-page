import Section from "./Section"
import eye from '../assets/icons/eye.svg'
import nft from '../assets/images/hero_nft.png'
import dog from '../assets/images/dog.png'
import robot from '../assets/images/robot.png'
import avatar from '../assets/images/avatar.png'


function Discover() {
    const nfts = [{
            image: robot
        }, {image: nft}, {
            image: dog
        }];
  return (
    <Section>
        <div className='flex'>
                    <div className='flex-1'>
                        <h3 className='text-white text-4xl max-xl:text-[28px] leading-[120%] max-xl:leading-[140%] font-semibold'>Discover More NFTs</h3>
                        <p className='text-white text-[22px] max-xl:text-base leading-[160%] max-md:leading-[140%]'>Explore new trending NFTs</p>
                    </div>
                    <button className={`bg-transparent py-5 px-12 rounded-20 flex gap-3 text-white text-base font-semibold border-[#a259ff] border-2 items-center max-md:hidden`}>
                        <img src={eye} alt="eye" height={20} width={20} className='fill-[#a259ff]'/>
                        <p className='text-white text-base font-semibold leading-[140%]'>See All</p>
                    </button>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-7">
            {nfts.map((nft) => (
                <div  className='bg-[#3b3b3b] rounded-20 overflow-hidden'>
                <img src={nft.image} alt="Hero Nft" className="max-h-[267px] w-full" />
                <div className="py-5 px-7">
                    <h5 className="text-[22px] font-semibold text-white font-display leading-[140%]">Distant Galaxy</h5>
                    <div className="flex gap-3 mt-1">
                        <img src={avatar} alt="Avatar" height={24} width={24}/>
                        <p className="text-base text-white font-[Space_Mono]">Animakid</p>
                    </div>
                    <div className="mt-6 flex justify-between">
                        <div>
                            <p className="text-[#858584] text-xs leading-[110%] font-[Space_Mono]">Price</p>
                            <p className="mt-2 text-white text-xs md:text-base font-[Space_Mono] leading-[110%] md:leading-[140%]">1.63 ETH</p>
                        </div>
                        <div>
                            <p className="text-[#858584] text-xs leading-[110%] font-[Space_Mono]">Highest Bid</p>
                            <p className="mt-2 text-white text-xs md:text-base font-[Space_Mono] leading-[110%] md:leading-[140%]">0.63 ETH</p>
                        </div>
                    </div>
                </div>
            </div>
            ))}
            
        </div>
    </Section>
  )
}

export default Discover