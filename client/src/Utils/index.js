import image1 from '../Assets/Images/user_1.png';
import image2 from '../Assets/Images/user_2.png'
import image3 from '../Assets/Images/user_3.png'


export const handleResponsive = (isResponsive, setIsResponsive) => {
    setIsResponsive(!isResponsive)      
}

export const itemList = [
    {
        name: 'Inicio',
        route: '/',
        id: 1
    },
    {
        name: 'Series',
        route: '/browse/genre/83',
        id: 2
    },
    {
        name: 'Peliculas',
        route: '/browse/genre/34399',
        id: 3
    },
    {
        name: 'Novedades populares',
        route: '/latest',
        id: 4
    },
    {
        name: 'Mi lista',
        route: '/browse/my-list',
        id: 5
    }
]

export const itemsSecondaryNavigation = [
    {
        name: 'FaSearch',
        id: 1
    },
    {   
        name: 'IoMdArrowDropdown',
        id: 2
    }
]


export const USERS_MOCKED = [
    {
        name: 'User 1',
        role: 'user',
        id: 1,
        image: image1
    },
    {
        name: 'User 2',
        role: 'user',
        id: 2,
        image: image2
    },
    {
        name: 'User 3',
        role: 'admin',
        id: 3,
        image: image3
    }
]