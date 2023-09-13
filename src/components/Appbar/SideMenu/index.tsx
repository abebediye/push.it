import Button from "@components/Button"
import { signOut, useSession } from "next-auth/react"


const SideMenu = ({ showSideMenu }: { showSideMenu: boolean }) => {
    const { data: session } = useSession()

    function handleSignout() {
        signOut()
    }

    return (
        <main className={`absolute right-0 z-10 bg-sky-900 transition-[width] ease-in h-[calc(100vh-56px)] ${showSideMenu ? 'w-[100vw]' : 'w-0'}`}>
            <section className={'p-5'} hidden={!showSideMenu}>
                <section>

                    {session?.user?.name}
                </section>
                <Button action={handleSignout}>Sign out</Button>
            </section>
        </main>
    )
}

export default SideMenu