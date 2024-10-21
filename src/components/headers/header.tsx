

import { Phone, Mail, Clock } from 'lucide-react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6'
export const Header = () => {

    return (
        <header className="grid">
            <nav className="grid grid-cols-12 place-items-center gap-8 bg-green-400 p-3 text-white text-xs lg:text-base">
                <div className="col-span-4 lg:col-span-3 flex items-center gap-3">
                    <Phone className='h-4 w-4 lg:h-5 lg:w-5'/>
                    <p >+92 330 14556561</p>
                </div>
                <div className="col-span-4 lg:col-span-3 flex items-center gap-3">
                    <Mail className='h-4 w-4 lg:h-5 lg:w-5'/>
                    <p>na6288009@gmail.com</p>
                </div>
                <div className="col-span-4 lg:col-span-3 flex items-center gap-3">
                    <Clock className='h-4 w-4 lg:h-5 lg:w-5'/>
                    <p>Mon to Friday: 9am - 5pm</p>
                </div>
                <div className='col-span-12 lg:col-span-3 flex gap-2'>
                    <div className='bg-white p-2 text-black rounded-full hover:bg-blue-600 hover:text-white'>
                        <FaFacebook />
                    </div>
                    <div className='bg-white p-2 text-black rounded-full hover:bg-red-400 hover:text-white'>
                        <FaInstagram />
                    </div>
                    <div className='bg-white p-2 text-black rounded-full hover:bg-blue-400 hover:text-white'>
                        <FaTwitter />
                    </div>
                    <div className='bg-white p-2 text-black rounded-full hover:bg-blue-900 hover:text-white'>
                        <FaLinkedin />
                    </div>

                </div>
            </nav>
            <div>
                <div>

                </div>
                <div>

                </div>
                <div>
                    
                </div>
            </div>
        </header>
    )
}