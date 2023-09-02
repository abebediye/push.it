'use client'
import React from 'react'
import { HiMenu } from 'react-icons/hi'
import { SiPerforce } from 'react-icons/si'

const AppBar = () => {
    const [showMenu, setShowMenu] = React.useState<boolean>(false)


    const handleMenduToggle = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        console.log("button clicked before", showMenu)
        setShowMenu(prev => !prev)
        console.log("button clicked after", showMenu)
    }

    return (
        <nav data-testid={'appbar'}>
            <SiPerforce data-testid={'logo'} size={32} />
            <button data-testid={'showMenuToggleButton'} onClick={handleMenduToggle}>
                <HiMenu size={32} />
            </button>
        </nav>
    )
}
export default AppBar