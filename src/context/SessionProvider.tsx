'use client'

import { SessionProvider as Provider } from 'next-auth/react'
import { ReactNode } from 'react'

const SessionProvider = ({ children, session }: { children: ReactNode, session: any }) =>
    <Provider session={session}>{children}</Provider>

export default SessionProvider