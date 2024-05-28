import React, { useContext } from 'react'
import logo from '../../public/import-png'
import { StoreContext } from '@/context'
import { useFilm } from '@/swr/useFilm'

type Props = {}

const Nav = (props: Props) => {
    const {count, setOpen} = useContext<any>(StoreContext)
    const {isLoading} = useFilm()
  return (
    <div className='bg-[#fa320a] flex p-6 justify-between items-center'>
        <img className='' width={160} height={50} src={logo.default.src} alt="" />
        <span className='w-1/3'>
            <input className='w-full py-3 pl-5 rounded-lg' type="text" placeholder='Search movies, TV, actors, more...'/>
        </span>
         <ul className='flex gap-8'>
            <li className=' hover:bg-white p-3'>MOVIES</li>
            <li className=' hover:bg-white p-3'>TV SHOWS</li>
            <li className=' hover:bg-white p-3'>SHOP</li>
            <li className=' hover:bg-white p-3'>NEWS</li>
            <li className=' hover:bg-white p-3 font-bold cursor-pointer' onClick={() => setOpen(true)}>Watch list</li>
         </ul>
    </div>
    
  )
}

export default Nav