# guayerd_netflixClone
Netflix Clone de Guayerd



Recursos y configuración

https://docs.google.com/document/d/1Pw8BIZxwEWb8N4wEI2F38VppArG6X9g27vnW4KgP6hM/edit?usp=sharing


# Rutas Temporales de Perfiles para pruebas iniciales
(validaciones actualmente desactivadas)
## Crear un perfil
```
POST /api/profiles/
"Content-Type": "application/json"

{
    "profile": {
        "name": "Usuaria4",
        "img": "https://randomuser.me/api/portraits/women/56.jpg",
        "language": "Spanish",
        "lists": [
            {
                "name": "myList",
                "items": [
                "623ba68812028cc08244e506",
                "623ba6edd75924fe983efd20",
                "623bc65c51c5b3d06ca18902",
                "623ba792d75924fe983efd27"
                ],
                "_id": "62425aa6f04db154f8001e4d"
            }
        ],
        "automaticReproduction": {
            "nextEpisode": true,
            "trailers": true
        }
    }
}
```
- Ejemplo respuesta 200 OK:
```
{
    msg: 'User has been created correctly'
}
```

## Obtener todos los perfiles
```
GET /api/profiles
```
- Ejemplo de respuesta 200 OK:
```
{
    "profiles": [
        {
            "_id": "62425aa6f04db154f8001e4f",
            "name": "Usuaria4",
            "img": "https://randomuser.me/api/portraits/women/56.jpg",
            "language": "Spanish",
            "lists": [
                {
                    "name": "myList",
                    "items": [
                    "623ba68812028cc08244e506",
                    "623ba6edd75924fe983efd20",
                    "623bc65c51c5b3d06ca18902",
                    "623ba792d75924fe983efd27"
                    ],
                    "_id": "62425aa6f04db154f8001e4d"
                }
            ],
            "automaticReproduction": {
                "nextEpisode": true,
                "trailers": true
            }
        }
    ]
}
```

---

## Obtener un perfil
```
GET /api/profiles/:profileId
```
- Ejemplo de respuesta 200 OK:
```
{
    "profile": {
        "_id": "62425aa6f04db154f8001e4f",
        "name": "Usuaria4",
        "img": "https://randomuser.me/api/portraits/women/56.jpg",
        "language": "Spanish",
        "lists": [
            {
                "name": "myList",
                "items": [
                "623ba68812028cc08244e506",
                "623ba6edd75924fe983efd20",
                "623bc65c51c5b3d06ca18902",
                "623ba792d75924fe983efd27"
                ],
                "_id": "62425aa6f04db154f8001e4d"
            }
        ],
        "automaticReproduction": {
            "nextEpisode": true,
            "trailers": true
        }
    }
}
```

## Actualizar un perfil
```
PATCH /api/profiles/:profileId
"Content-Type": "application/json"

{
    "name": "Usuaria4",
    "img": "https://randomuser.me/api/portraits/women/56.jpg",
    "language": "Spanish",
    "lists": [
        {
            "name": "myList",
            "items": [
            "623ba68812028cc08244e506",
            "623ba6edd75924fe983efd20",
            "623bc65c51c5b3d06ca18902",
            "623ba792d75924fe983efd27"
            ],
            "_id": "62425aa6f04db154f8001e4d"
        }
    ],
    "automaticReproduction": {
        "nextEpisode": true,
        "trailers": true
    }
}
```
- Ejemplo de respuesta 200 OK:
```
{
    msg: 'Profile has been updated correctly.'
}
```

## Borrar un perfil
```
DELETE /api/profiles/:profileId
```
- Ejemplo de respuesta 204 NO CONTENT (OK): Sin payload/body