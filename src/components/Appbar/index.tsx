'use client'
import SideMenu from '@components/Appbar/SideMenu'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { SiPerforce } from 'react-icons/si'

const AppBar = () => {
    const [showSideMenu, setShowSideMenu] = useState<boolean>(false)
    const pathname = usePathname()

    useEffect(() => {
        setShowSideMenu(false)
    }, [pathname])

    const handleSetShowSideMenuToggled = () => {
        setShowSideMenu(!showSideMenu)
    }

    return (
        <main className='relative text-amber-500 bg-emerald-900'>
            <nav data-testid={'appbar'} className={'flex justify-between items-center px-5 py-3 '}>
                <SiPerforce data-testid={'logo'} size={32} />
                <button data-testid={'showMenuToggleButton'} onClick={handleSetShowSideMenuToggled}>
                    {showSideMenu ? <HiX size={32} /> : <HiMenu size={32} />}
                </button>
            </nav>

            <SideMenu showSideMenu={showSideMenu} />
        </main>
    )
}
export default AppBar