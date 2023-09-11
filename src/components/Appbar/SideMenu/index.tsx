import { useSession } from "next-auth/react"


const SideMenu = ({ showSideMenu }: { showSideMenu: boolean }) => {
    const { data: session } = useSession()

    return (
        <main className={`absolute right-0 z-10 bg-orange-700 transition-[width] ease-in h-[calc(100vh-56px)] ${showSideMenu ? 'w-[100vw]' : 'w-0'}`}>
            <p>
                {session?.user?.name}
            </p>
        </main>
    )
}

export default SideMenu