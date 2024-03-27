import React,{createContext, useState, useEffect, useCallback} from 'react';
import { baseUrl, getRequest, postRequest } from '../services/services';

export const AuthContext = createContext();


export const AuthContextProvider = ({children}) => {


    const [user, setUser] = useState(null)
    const [isRegistrationLoading, setIsRegistrationLoading] = useState(false)
    const [RegistrationError, setRegistrationError] = useState(null)
    const [RegistrationInfo, setRegistrationInfo] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        passwordConfirmation: "",
        
    })

    //! Login info
    const [isLoginLoading, setIsLoginLoading] = useState(false)
    const [loginError, setLoginError] = useState(null)
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: "",
        
    })

    useEffect(() => {
      const user = localStorage.getItem("user")

      setUser(JSON.parse(user))

     
    }, [])

    
    const updateRegistrationInfo = useCallback(
        (info) => {
            setRegistrationInfo(info)
        },
        [],
      )

          
    const updateLoginInfo = useCallback(
      (info) => {
          setLoginInfo(info)
      },
      [],
    )


      const registerUser = useCallback(
       async (e) => {
        e.preventDefault()
        setIsRegistrationLoading(true)
        setRegistrationError(null)

        const response = await postRequest(`${baseUrl}users`, RegistrationInfo)
        // const response = await postRequest(`${baseUrl}users`, JSON.stringify(RegistrationInfo))

        setIsRegistrationLoading(false)

        if (response.error) {
            setRegistrationError(response)
            return;
        }

        localStorage.setItem("user", JSON.stringify(response.message))
        setUser(response.message)

        },
        [RegistrationInfo],
      )
      

      const loginUser = useCallback(
        async (e) => {
         e.preventDefault()
         setIsLoginLoading(true)
         setLoginError(null)
 
         const response = await postRequest(`${baseUrl}auth`, loginInfo)
         // const response = await postRequest(`${baseUrl}users`, JSON.stringify(RegistrationInfo))
 
         setIsLoginLoading(false)
 
         if (response.error) {
             setLoginError(response)
             return;
         }
 
         localStorage.setItem("user", JSON.stringify(response.message))
         setUser(response.message)
 
         },
         [loginInfo],
       )
    




  return (
    <AuthContext.Provider 
    value={{ 
        user,
        isRegistrationLoading,
        RegistrationError,
        registerUser,
        RegistrationInfo,
        updateRegistrationInfo,

        isLoginLoading,
        loginError,
        loginInfo,
        updateLoginInfo,
        loginUser
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}
