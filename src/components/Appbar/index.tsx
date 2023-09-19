'use client'
import routes from '@constants/routes'
import { Link, Listbox, ListboxItem, ListboxSection, Navbar, NavbarContent, NavbarMenu, NavbarMenuToggle, User } from '@nextui-org/react'
import { useSession } from 'next-auth/react'


const AppBar = () => {
    const { data: session } = useSession()

    return (
        <Navbar isBlurred={false}>
            <NavbarContent className='sm:hidden' justify='end'>
                <NavbarMenuToggle />
            </NavbarContent>
            <NavbarMenu>
                <Listbox>
                    <ListboxItem key="user">
                        <User
                            name={session?.user?.name}
                            description="@admin"
                            avatarProps={{ src: session?.user?.image ?? undefined }}
                        />
                    </ListboxItem>
                    <ListboxSection title='navigation' showDivider>
                        {routes.map(route => <ListboxItem key={route.title}>
                            <Link color='foreground' href={route.endpoint}>
                                {route.title}
                            </Link>
                        </ListboxItem>)}
                    </ListboxSection>
                    <ListboxSection title={'edit'} showDivider>
                        <ListboxItem key={'edit-profile'}>
                            <Link href='/profile' color='foreground'>Profile</Link>
                        </ListboxItem>
                        <ListboxItem key={'edit-settings'}>
                            <Link href='/settings' color='foreground'>Settings</Link>
                        </ListboxItem>
                    </ListboxSection>
                    <ListboxSection>
                        <ListboxItem key={'signout'} className="text-danger" color="danger" >
                            <Link color="danger" href='/api/auth/signout'>Signout</Link>
                        </ListboxItem>
                    </ListboxSection>
                </Listbox>
            </NavbarMenu>
        </Navbar>
    )
}
export default AppBar