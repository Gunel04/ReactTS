import { createContext } from 'react';


export const BaseUrlContext = createContext();
export const BaseUrlProvider = ({ children }) => {
    const baseUrl = "http://localhost:3010";
    const header = {
        headers: {
            "matrix-access": "3fa3afc2aa0e5e2c1c17ee83f4c8fc76"
        }
    }
    return <BaseUrlContext.Provider value={[baseUrl, header]}>{children}</BaseUrlContext.Provider>
}