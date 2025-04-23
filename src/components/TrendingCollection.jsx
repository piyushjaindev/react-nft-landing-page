import Section from './Section'
import nft from '../assets/images/hero_nft.png'
import mushroom from '../assets/images/mushroom.png'
import dog from '../assets/images/dog.png'
import robot from '../assets/images/robot.png'
import avatar from '../assets/images/avatar.png'

function TrendingCollection() {
    const collections = [{
        image: dog
    }, {image: mushroom}, {
        image: robot
    }];
  return (
    <Section>
        <h3 className='text-white text-4xl max-xl:text-[28px] leading-[120%] max-xl:leading-[140%] font-semibold'>Trending Collection</h3>
        <p className='text-white text-[22px] max-xl:text-base leading-[160%] max-md:leading-[140%]'>Checkout our weekly updated trending collection.</p>
        <div className='mt-14 max-xl:mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] max-h-[525px] overflow-hidden'>
            {
                collections.map((collection, index) => (
                    <div key = {index} >
                            <img src={collection.image} alt='nft' className='h-[330px] max-md:h-[315px] w-[360px] max-md:w-[315px] rounded-20 overflow-hidden' />
                            <div className='mt-4 grid grid-cols-3 gap-[15px]'>
                                <img src={nft} alt='nft' className='h-[100px] w-[100px] max-md:h-[95px] max-md:w-[95px] overflow-hidden rounded-20' />
                                <img src={nft} alt='nft' className='h-[100px] w-[100px] max-md:w-[95px] overflow-hidden rounded-20' />
                                <div className='flex items-center justify-center h-[100px] w-[100px] max-md:w-[95px] overflow-hidden bg-[#a259ff] rounded-20 font-[Space_mono] font-bold text-[22px] max-md:text-base leading-[160%] max-md:leading-[140%] text-white'>1025+</div>
                            </div>           
                        
                        <h5 className="text-[22px]  font-semibold text-white font-display mt-4 leading-[140%]">Space Walking</h5>
                        <div className="flex gap-3 mt-2.5">
                            <img src={avatar} alt="Avatar" height={24} width={24}/>
                             <p className="text-base text-white leading-[140%]">Animakid</p>
                        </div>
                    </div>
            ))}
                   
        </div>
    </Section>
  )
}

export default TrendingCollection