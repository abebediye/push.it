'use client'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { SiPerforce } from 'react-icons/si'

const AppBar = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const handleSetShowMenuToggled = () => {
        setShowMenu(prevState => !prevState)
    }

    return (
        <main className='relative text-amber-500 bg-emerald-900'>
            <nav data-testid={'appbar'} className={'flex justify-between items-center px-5 py-3 '}>
                <SiPerforce data-testid={'logo'} size={32} />
                <button data-testid={'showMenuToggleButton'} onClick={handleSetShowMenuToggled}>
                    {showMenu ? <HiX size={32} /> : <HiMenu size={32} />}
                </button>
            </nav>

            <menu className={'absolute right-0 z-10 bg-sky-700 w-full transition-[width] ease-in h-[calc(100vh-56px)] ' + `${showMenu ? 'w-[100vw]' : 'w-0'}`}>
            </menu>
        </main>
    )
}
export default AppBar