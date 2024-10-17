import './App.css'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { default as App2023 } from './2023/App'
import { default as App2024 } from './2024/App'
import { Outlet, Route, Routes } from 'react-router-dom'
import { FC, ReactNode } from 'react'

const VersionMenu: FC<{ items: string[] }> = ({ items }) => {
    return <Menu>
        <MenuButton>Version</MenuButton>
        <MenuItems anchor="bottom">
            {
                items.map((item: string) =>
                    <MenuItem key={item}>
                        <a className="block data-[focus]:bg-blue-100" href={`/${item}`}>
                            {item}
                        </a>
                    </MenuItem>
                )
            }
        </MenuItems>
    </Menu>
}

const Layout: FC<{ items: string[] }> = ({ items }) => {
    return <>

        <div className='flex justify-start'>
            <VersionMenu items={
                items
            } />
        </div>
        <Outlet />
    </>
}

function App() {
    const cardList = [
        "Work Experience",
        "Mini-Games",
        "Professional Links",
        "Arts",
        "Music",
        "Food"
    ]

    const versionComponents: Record<string, () => JSX.Element> = {
        "2023": App2023,
        "2024": App2024
    }

    const versionKeys = Object.keys(versionComponents)

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout items={versionKeys} />}>
                    {
                        Object.entries(versionComponents).map(([version, Component]: [string, () => ReactNode]) => {
                            console.log(Component)
                            return <Route path={version} key={version} element={<Component />} />
                        })
                    }
                    <Route index element={<div>2024</div>} />
                </Route>
            </Routes>
        </>
    )
}

export default App
