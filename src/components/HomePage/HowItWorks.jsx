import Section from '../Section'
import setupWallet from '../../assets/images/setup_wallet.svg'
import createCollection from '../../assets/images/create_collection.svg'
import startEarning from '../../assets/images/start_earning.svg'

function HowItWorks() {
    const steps = [
        {
            icon: setupWallet,
            heading: 'Setup Your Wallet',
            desc: 'Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.'
        },
        {
            icon: createCollection,
            heading: 'Create Collection',
            desc: 'Upload your work and setup your collection. Add a description, social links and floor price.'
        },
        {
            icon: startEarning,
            heading: 'Start Earning',
            desc: 'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.'
        }
    ];
  return (
    <Section>
        <h3 className='text-white text-4xl max-xl:text-[28px] leading-[120%] max-xl:leading-[140%] font-semibold'>Hows It Works</h3>
        <p className='text-white text-[22px] max-xl:text-base leading-[160%] max-md:leading-[140%]'>Find out how to get started</p>
        <div className='mt-10 xl:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7 xl:gap-10'>
            {
                steps.map(({icon, heading, desc}) => (
                    <div key={heading} className='bg-[#3b3b3b] rounded-20 max-md:p-5 md:px-10 md:pb-7 md:pt-2.5'>
                        <div className='flex md:flex-col justify-center items-center gap-5'>
                            <img src={icon} alt={heading} className='w-24 md:w-40 xl:w-64' />
                            <div className='text-white text-center'>
                                <h5 className='text-base xl:text-[22px] leading-[140%] font-semibold'>{heading}</h5>
                                <p className='text-xs xl:text-base leading-[140%] mt-2.5'>{desc}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
            
        </div>
    </Section>
  )
}

export default HowItWorks