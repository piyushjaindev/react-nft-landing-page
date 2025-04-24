import Section from '../Section'
import Button from '../buttons/Button'
import astronaut from '../../assets/images/astronaut.png'
import email from '../../assets/icons/email.svg'

function Newsletter() {
  return (
    <Section classNames='mt-10'>
        <div className='md:bg-[#3b3b3b] rounded-20 xl:p-16 md:px-10 md:py-7'>
            <div className='flex max-md:flex-col justify-center items-center gap-[30px] xl:gap-[80px]'>
                <img src={astronaut} alt="astronaut" className='w-[300px] xl:w-[425px]'/>
                <div className='w-full max-w-[425px]'>
                    <h3 className='text-[28px] xl:text-[38px] text-white leading-[140%] xl:leading-[120%] font-semibold'>Join our weekly digest</h3>
                    <p className='mt-2.5 text-white text-base xl:text-[22px] leading-[140%] xl:leading-[160%]'>Get exclusive promotions & updates straight to your inbox.</p>
                    <div className='flex max-xl:flex-col bg-white rounded-20 mt-10'>
                        <input type='email' placeholder='Enter your email here' className='xl:flex-1 m-2 max-xl:h-[46px] outline-none'/>
                        <Button label='Subscribe' icon={email} classes='max-xl:hidden'/>
                    </div>
                    <Button label='Subscribe' icon={email} classes='xl:hidden mt-4 w-full'/>
                </div>
            </div>
        </div>
    </Section>
  )
}

export default Newsletter