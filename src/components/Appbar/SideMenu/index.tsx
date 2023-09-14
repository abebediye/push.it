import Button from "@components/Button"
import routes from '@constants/routes'
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"

const SideMenu = ({ showSideMenu }: { showSideMenu: boolean }) => {
    const { data: session } = useSession()

    function handleSignout() {
        signOut()
    }

    return (
        <main className={`absolute right-0 z-10 bg-sky-900 transition-[width] ease-in h-[calc(100vh-56px)] ${showSideMenu ? 'w-[100vw]' : 'w-0'}`}>
            {showSideMenu &&
                <section className={'relative flex flex-col p-5 bg-purple-500 gap-10'} >
                    <section>
                        <h1>{session?.user?.name}</h1>
                        <Link href={'/profile'}>Profile</Link>
                    </section>
                    <section className="flex flex-col gap-4 bg-green-500">
                        {routes.map(route => (<Link key={route.title} href={route.endpoint}>{route.title}</Link>))}
                    </section>

                    <section>
                        <Button action={handleSignout}>Sign out</Button>
                    </section>
                </section>
            }
        </main>
    )
}

export default SideMenu