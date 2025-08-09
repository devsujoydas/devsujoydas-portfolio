import React from 'react'

const GridBackground = () => {
    return (
        <div className="fixed -z-10  bottom-0 left-0 right-0 top-0 ">
            <div className="relative h-full w-full bg-[#000000]">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#c7c7c72e_1px,transparent_1px),linear-gradient(to_bottom,#c7c7c72e_1px,transparent_1px)] bg-[size:14px_24px] "></div>
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(125%_125%_at_30%_10%,rgba(0,0,0,0)_20%,rgba(0,0,0,1)_100%)]"></div>
            </div>
        </div>
    )
}

export default GridBackground