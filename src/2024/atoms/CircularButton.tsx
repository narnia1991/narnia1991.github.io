import { CSSProperties, FC, ReactNode } from "react"

const CircularButton: FC<{ customStyles?: CSSProperties, onClick?: VoidFunction, children: ReactNode }> = ({ customStyles, onClick, children }) => {
    return <button className="rounded-full" style={{ ...customStyles }} onClick={onClick}>{children}</button>
}

export default CircularButton