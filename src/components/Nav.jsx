import logo from '../assets/icons/logo.svg'
import user from '../assets/icons/user.svg'
import burgerMenu from '../assets/icons/burger_menu.svg'
import Button from './Button';

function Nav() {

    const navItems = [
        'Marketplace',
        'Rankings',
        'Connect a wallet'
    ];
  return (
    <nav >
        <div className='w-full h-24 flex items-center px-12 py-5 justify-between' >
            <img src={logo} alt="logo" />
            <div className='flex-1 mr-8 max-lg:hidden'>
                <ul className='flex justify-end gap-12'>
                    {
                        navItems.map((item) => (
                            <li className='text-white font-display text-base font-semibold' key={item}>{item}</li>
                        ))
                    }
                </ul>
            </div>
            <div className='max-lg:hidden' >
                <Button icon={user} label='Sign Up' />
            </div>
            <div className='lg:hidden' >
                <img src={burgerMenu} alt='Menu'/>
            </div>
        </div>
    </nav>
  )
}

export default Nav