import React, { useEffect, useState } from 'react'

const useWindowWidth = (width) => {
    const [windowWidth, setWindowWidth] = useState(() => window.innerWidth);

    const cb = () => setWindowWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', cb);

        return () => {
            window.removeEventListener('resize', cb)
        }
    }, [])

    if (width instanceof Function) {
        width = width()
    }

    return width > windowWidth
}

export default useWindowWidth;