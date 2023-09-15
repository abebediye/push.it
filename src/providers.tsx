'use client'

import { NextUIProvider } from '@nextui-org/react'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

type ProvidersProps = {
    children: ReactNode
    session: any
}

export default function Providers({ children, session }: ProvidersProps) {
    return (<SessionProvider session={session}>
        <NextUIProvider>
            <NextThemeProvider attribute='class' defaultTheme='dark'>
                {children}
            </NextThemeProvider>
        </NextUIProvider>
    </SessionProvider>)
} 