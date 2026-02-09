// hero-visibility.context.tsx
import { createContext, useContext, useState } from 'react'

type HeroVisibilityContextType = {
    heroVisible: boolean
    setHeroVisible: (value: boolean) => void
}

const HeroVisibilityContext = createContext<HeroVisibilityContextType | null>(null)

export const HeroVisibilityProvider = ({ children }: { children: React.ReactNode }) => {
    const [heroVisible, setHeroVisible] = useState(true)

    return (
        <HeroVisibilityContext.Provider value={{ heroVisible, setHeroVisible }}>
            {children}
        </HeroVisibilityContext.Provider>
    )
}

export const useHeroVisibility = () => {
    const context = useContext(HeroVisibilityContext)
    if (!context) {
        throw new Error('useHeroVisibility must be used within HeroVisibilityProvider')
    }
    return context
}
