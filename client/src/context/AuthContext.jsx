import { useState, useEffect, createContext } from 'react'

export const AuthContext = createContext({
    user: {},
    setUser: () => { },
    accessToken: null,
    refreshToken: null,
    csrftoken: null,
    setAccessToken: () => { },
    setRefreshToken: () => { },
    setCSRFToken: () => { },
    isLoggedIn: false,
    setIsLoggedIn: () => { },
    subscriptions: [],
    setSubscriptions: () => { },
    ethereumBalance: null,
    setEthereumBalance: () => {},
})

export function AuthContextProvider(props) {

    const [user, setUser] = useState({})
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [csrftoken, setCSRFToken] = useState()
    const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem('isLoggedIn')) || false)
    const [subscriptions, setSubscriptions] = useState([])
    const [ethereumBalance, setEthereumBalance] = useState()

    useEffect(() => {
        localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn))
    }, [isLoggedIn])

    return (
        <AuthContext.Provider value={{
            user, setUser,
            accessToken, setAccessToken,
            refreshToken, setRefreshToken,
            csrftoken, setCSRFToken,
            isLoggedIn, setIsLoggedIn,
            subscriptions, setSubscriptions,
            ethereumBalance, setEthereumBalance,
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext
