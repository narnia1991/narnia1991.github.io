import "./App.css";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { default as App2023 } from "./2023/App";
import { default as App2024 } from "./2024/App";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { FC, ReactNode } from "react";
import lightTheme from "./2024/atoms/colors";

const VersionMenu: FC<{ items: string[] }> = ({ items }) => {
  return (
    <Menu>
      <MenuButton className="data-[focus]:bg-blue-100">Version</MenuButton>
      <MenuItems anchor="bottom">
        {items.map((item: string) => (
          <MenuItem key={item}>
            <Link className="block data-[focus]:bg-blue-100 p-2" to={item}>
              {item}
            </Link>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

const Layout: FC<{ items: string[] }> = ({ items }) => {
  return (
    <div
      className="flex flex-col relative h-screen w-screen py-4 overflow-hidden lg:p-4 lg:w-full"
      style={{ backgroundColor: lightTheme[0].backgroundColor }}
    >
      <div className="flex justify-start">
        <VersionMenu items={items} />
      </div>

      <Outlet />

      <div className="w-screen">©{new Date().getFullYear()} narnia1991</div>
    </div>
  );
};

function App() {
  const versionComponents: Record<string, () => JSX.Element> = {
    "2023": App2023,
    "2024": App2024,
  };

  const versionKeys = Object.keys(versionComponents);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout items={versionKeys} />}>
          {Object.entries(versionComponents).map(
            ([version, Component]: [string, () => ReactNode]) => {
              return (
                <Route path={version} key={version} element={<Component />} />
              );
            }
          )}
          <Route index element={<App2024 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
