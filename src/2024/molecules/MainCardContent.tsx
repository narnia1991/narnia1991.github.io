import { FC, ReactNode } from "react"

const MainCardContent: FC<{ contentImage: ReactNode, contentLabel: ReactNode }> = ({
    contentImage,
    contentLabel
}) => {
    return <div className="flex flex-col h-full">
        <div className="h-1/2 w-full m-auto">{contentImage}</div>
        <div className="h-1/4 w-full m-auto">{contentLabel}</div>

    </div>
}

export default MainCardContent