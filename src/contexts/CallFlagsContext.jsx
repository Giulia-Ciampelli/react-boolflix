import { createContext } from "react";

// crea context
const CallFlagsContext = createContext();

export const CallFlagsProvider = ({ children }) => {

    // mappa bandiere
    const languageFlags = {
        en: 'gb',
        ja: 'jp',
        zh: 'cn',
        cs: 'cz',
        ko: 'kr',
        ta: 'in',
    }

    // funzione per altre bandiere
    const flagCode = (langCode) => languageFlags[langCode] || langCode;

    return (
        <CallFlagsContext.Provider value={{ languageFlags, flagCode }}>
            {children}
        </CallFlagsContext.Provider>
    )
}

export default CallFlagsContext;