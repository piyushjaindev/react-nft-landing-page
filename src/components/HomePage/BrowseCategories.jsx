import Section from '../Section'
import nft from '../../assets/images/hero_nft.png'
import art from '../../assets/icons/art.svg'
import collectibles from '../../assets/icons/collectibles.svg'
import music from '../../assets/icons/music.svg'
import photography from '../../assets/icons/photography.svg'
import video from '../../assets/icons/video.svg'
import utility from '../../assets/icons/art.svg'
import sport from '../../assets/icons/sport.svg'
import planet from '../../assets/icons/planet.svg'

function BrowseCategories() {
    const categories = [
        {name: 'Art', icon: art},
        {name: 'Collectibles', icon: collectibles},
        {name: 'Music', icon: music},
        {name: 'Photography', icon: photography},
        {name: 'Video', icon: video},
        {name: 'Utility', icon: utility},
        {name: 'Sport', icon: sport},
        {name: 'Virtual Worlds', icon: planet},
    ];

  return (
    <Section>
        <h3 className='text-white text-4xl max-xl:text-[28px] leading-[120%] max-xl:leading-[140%] font-semibold'>Browse Categories</h3>
        <div className='mt-10 xl:mt-14 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-[30px]'>
        {
            categories.map((category) => (
                <div key={category.name} className='bg-[#3b3b3b] rounded-20 overflow-hidden'>
                    <div className='grid'>
                        <img src={nft} alt="Hero Nft" className='col-start-1 row-start-1'/>
                        <div className='col-start-1 row-start-1 flex justify-center items-center bg-[rgba(255,255,255,0.1)] backdrop-blur-[4px]'>
                            <img src={category.icon} alt={category.name} className='w-[80px] xl:w-[100px]'/>
                        </div>
                    </div>
                    <div className="py-5 px-5 xl:px-7">
                        <h5 className="text-base xl:text-[22px] leading-[140%] font-semibold text-white">{category.name}</h5>
                    </div>
                </div>
            ))
        }
        </div>
    </Section>
  )
}

export default BrowseCategories