'use client'

import Spinner from '@components/Spinner'
import { ButtonHTMLAttributes, ReactNode, useEffect, useState } from 'react'

type ButtonProps = {
    children: ReactNode
    action: Function
    type?: 'primary' | 'secondary' | 'confirm' | 'reject'
} & ButtonHTMLAttributes<HTMLButtonElement>

const baseStyle: Array<string> = [
    'flex gap-2.5 items-center justify-center',
    'w-36 h-10',
    'bg-red-500 color-white',
    'px-5 py-2.5',
    'rounded'
]


const Button = ({ children, action, type, ...defaultButtonProps }: ButtonProps) => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {

    }, [])

    async function handleAction() {
        setLoading(true)
        action().then(() => setLoading(false))
    }

    return (
        <button onClick={handleAction} disabled={loading}
            className={baseStyle.join(' ')} {...defaultButtonProps}>
            {loading ? <Spinner /> : children}
        </button>
    )
}

export default Button


{/* <span class="" role="status" aria-label="loading">
    <span class="sr-only">Loading...</span>
  </span> */}
