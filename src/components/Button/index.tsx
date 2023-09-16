'use client'

import { Button } from '@nextui-org/button'
import { Spinner } from '@nextui-org/spinner'
import { ReactNode, useState } from 'react'

type ButtonProps = {
    children: ReactNode
    action: Function
    color: "primary" | "danger" | "default" | "secondary" | "success" | "warning" | undefined
}

const ActionButton = ({ children, action, color }: ButtonProps) => {
    const [loading, setLoading] = useState(false)

    async function handleAction() {
        setLoading(true)
        action().then(() => setLoading(false))
    }

    return (
        <Button
            onPress={handleAction}
            disabled={loading}
            variant={loading ? "bordered" : "ghost"}
            color={color}
        >
            {loading
                ? <Spinner color='secondary' size='sm' />
                : children}
        </Button>
    )
}

export default ActionButton


{/* <span class="" role="status" aria-label="loading">
    <span class="sr-only">Loading...</span>
  </span> */}
