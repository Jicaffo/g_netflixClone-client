import { createContext, useState } from 'react'

const UserDataContext = createContext({});

export const UserDataProvider = ({ children }) => {
    const initialProfile = { // Hardcodeado temporalmente, debería ser null
        "_id": "629528a593fc5c50a6f475a5",
        "name": "Usuario Inicial Hardcodeado",
        "img": "https://randomuser.me/api/portraits/lego/1.jpg",
        "language": "spanish",
        "lists": [
            {
                "name": "myList",
                "items": [
                    "623ba68812028cc08244e506",
                    "623ba6edd75924fe983efd20",
                    "623bc65c51c5b3d06ca18902",
                    "623ba792d75924fe983efd27"
                ],
                "_id": "629528a593fc5c50a6f475a6"
            }
        ],
        "automaticReproduction": {
          "nextEpisode": true,
          "trailers": true
        },
    }

    const [currentProfile, setCurrentProfile] = useState(null);
    const [allUserProfiles, setAllUserProfiles] = useState(null);

    const data = {
        currentProfile, // Deberían consumirlo las páginas EditProfile y Browse. A futuro Header para mostrar perfil activo.
        setCurrentProfile, // Debería setearlo UserProfiles al hacer click en algún perfil. A futuro Header para poder cambiar de perfil.
    }

    return (
        <UserDataContext.Provider value={data}>
            {children}
        </UserDataContext.Provider>
    )
}

export default UserDataContext;