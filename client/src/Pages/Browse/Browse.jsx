import React from 'react'
import { HighlightedMedia, ListContainer } from '../../Components'

// Array de objetos de ejemplo con un listado de contenido multimedia para pruebas temporales, a obtener del backend.
const exampleMediaListShort = [
    {
      _id:1,
      title:"Emily in Paris",
      img:"https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd4okK-9R6vjvoPkB6Msrd44BUNHa5WZhyZDXeldFOXHinLPDExremWPt334t8zg1SAezDERP4OwERhB5tLEjVB20Wb3g71OJ7OfH-doY16O4zPqfboghX_DaV9h.jpg?r=cd9",
      "trailer": "HvYcfmPPows",
    },
    {
      _id:2,
      title:"Estamos muertos",
      img:"https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeoK2tWCAEVCngkmcH6kC6HZ38st4knkVprMpHqknYoHeQxoVos44chJXxvwoe4LEsvkSxUhXATsZ4YNCtEwSUuoXtVxS_BKF5ZqdCVqwKL_2qJEsVax2Sz4iwFk.jpg?r=f88",
      "trailer": "62jVLZ4JfjM",
    },
    {
      _id:3,
      title:"Fin de semana en Croacia",
      img:"https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABezpQUda_XVtPmmtYQEGK-iR9B3zss0Zsay1wOkR9pBT5ipxtM86IonFuT6tjGbIm3tSh1KP_SsgP1gRaKKjFgOVlciFekWfIusKjSTzxcCcZeiF4nahcingdnm6.jpg?r=4d3",
      "trailer": "WPW0qo5dc-E",
    },
    {
      _id:4,
      title:"The Crown",
      img:"https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWB_KjvPQ6PqGsdyJN55lnNBB_RR2HfB1WaiWDqV0SYoBLojWnYuQKm59gdJQ5qnvvIADXTADlFV5N8tIxZpocOPBKUJUbqVXBaHLrANxAm-NaUmQqLbWHtIiClN.jpg?r=dcd",
      "trailer": "zzBjNG1GKu4",
    },
    {
      _id:5,
      title:"Ouija",
      img:"https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABc9iltqEjIxEL-ACvhEjhdLDXOOEHbgs0z716BT7ToP0xcxS9S61LwNqkrpz60bBWwDf5bApxxWrlbRDOIBUcd8jAoc.webp?r=37b",
      "trailer": "WpKa1CVcAng",
    },
    {
      _id:6,
      title:"Outlander",
      img:"https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfxoE8peGqSCmmldIAPxVlfJ6Vb_nBqPoKP03Zsv15OCtGE8KnhtXNdki8aGYrJ7T5CpIBq2t9k3eHgniBsi8qLagPM.webp?r=c5f",
      "trailer": "PFFKjptRr7Y",
    },
    {
      _id:7,
      title:"Orgullo y prejuicio",
      img:"https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZuJsqGP9XtQLU2SVpU0IngGiXaBV8hz33OPuZE226OwtRiV_eMAwMrgfWUrWuQor-TEqizG0knaVmrioOfZr0Xdx-c.webp?r=314",
      "trailer": "Ov0PdD5c7m0",
    },
    {
      _id:8,
      title:"El rey",
      img:"https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcfzQ5w12eeSxKXL4wb5NA5OsUUEbAP9yoD6iMyBZyU5N4X9v5N5PsFC7tgFrL4H8Y092maH4BaDz3ZQDCub5R69twJ89ZVKJgulatAiCgQGBeqZLuPIEMMJ47eF.jpg?r=63e",
      "trailer": "VkrbZqCJaEk",
    },
    {
      _id:9,
      title:"Vikingos",
      img:"https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVBgaj6Nj7-1SnWCXvNMSZItnzVfNKGT_seNrcQIaABgxgyo4RGbvLgocOcqxeD1qtiM23QWj5I4U002vL8BF3hcgAk.webp?r=e15",
      "trailer": "0DZKZ0qktU4",
    },
    {
      _id:10,
      title:"Versalles",
      img:"https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfe59Ij8cEeFdo1awW7lUSO1D8TZuHrAb7SlzAIpic6gfgmdiypSQyL9ByUU1210i0stcJ_bLQUcWhBfX1RR57s5F4k.webp?r=991",
      "trailer": "ov7MV6V2aa0",
    },
];
const exampleMediaListLong = [
  {
    _id:1,
    "title":"Emily in Paris",
    "img":"https://occ-0-5386-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYbm_s-qPryvSAZT6y6sSbp054hrmjEEdw4xKabBUM-BUGNniw9vYkCSrWOd2-IaVfMr6B7L91JZPhs852JicovS7LmC9KSsBjP-o-ApgPnQWseV8nL130HoJZ3hixeseB9H.jpg?r=8e3",
    "resourceUrl": "",
    "trailer": "HvYcfmPPows",
    "year": "1990",
    "genre": "adventure",
    "type": "serie"
  },
  {
    _id:2,
    "title":"Fin de semana en Croacia",
    "img":"https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABezpQUda_XVtPmmtYQEGK-iR9B3zss0Zsay1wOkR9pBT5ipxtM86IonFuT6tjGbIm3tSh1KP_SsgP1gRaKKjFgOVlciFekWfIusKjSTzxcCcZeiF4nahcingdnm6.jpg?r=4d3",
    "resourceUrl": "",
    "trailer": "WPW0qo5dc-E",
    "year": "2000",
    "genre": "drama",
    "type": "movie"
  },
  {
    _id:3,
    "title":"Estamos muertos",
    "img":"https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeoK2tWCAEVCngkmcH6kC6HZ38st4knkVprMpHqknYoHeQxoVos44chJXxvwoe4LEsvkSxUhXATsZ4YNCtEwSUuoXtVxS_BKF5ZqdCVqwKL_2qJEsVax2Sz4iwFk.jpg?r=f88",
    "resourceUrl": "",
    "trailer": "62jVLZ4JfjM",
    "year": "2010",
    "genre": "comedy",
    "type": "serie"
  },
  {
    _id:4,
    "title":"Ouija",
    "img":"https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABc9iltqEjIxEL-ACvhEjhdLDXOOEHbgs0z716BT7ToP0xcxS9S61LwNqkrpz60bBWwDf5bApxxWrlbRDOIBUcd8jAoc.webp?r=37b",
    "resourceUrl": "",
    "trailer": "WpKa1CVcAng",
    "year": "1990",
    "genre": "adventure",
    "type": "movie"
  },
  {
    _id:5,
    "title":"The Crown",
    "img":"https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWB_KjvPQ6PqGsdyJN55lnNBB_RR2HfB1WaiWDqV0SYoBLojWnYuQKm59gdJQ5qnvvIADXTADlFV5N8tIxZpocOPBKUJUbqVXBaHLrANxAm-NaUmQqLbWHtIiClN.jpg?r=dcd",
    "resourceUrl": "",
    "trailer": "zzBjNG1GKu4",
    "year": "1990",
    "genre": "drama",
    "type": "serie"
  },
  {
    _id:6,
    "title":"Orgullo y prejuicio",
    "img":"https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZuJsqGP9XtQLU2SVpU0IngGiXaBV8hz33OPuZE226OwtRiV_eMAwMrgfWUrWuQor-TEqizG0knaVmrioOfZr0Xdx-c.webp?r=314",
    "resourceUrl": "",
    "trailer": "Ov0PdD5c7m0",
    "year": "1990",
    "genre": "comedy",
    "type": "movie"
  },
  {
    _id:7,
    "title":"Outlander",
    "img":"https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfxoE8peGqSCmmldIAPxVlfJ6Vb_nBqPoKP03Zsv15OCtGE8KnhtXNdki8aGYrJ7T5CpIBq2t9k3eHgniBsi8qLagPM.webp?r=c5f",
    "resourceUrl": "",
    "trailer": "PFFKjptRr7Y",
    "year": "1990",
    "genre": "adventure",
    "type": "serie"
  },
  {
    _id:8,
    "title":"El rey",
    "img":"https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcfzQ5w12eeSxKXL4wb5NA5OsUUEbAP9yoD6iMyBZyU5N4X9v5N5PsFC7tgFrL4H8Y092maH4BaDz3ZQDCub5R69twJ89ZVKJgulatAiCgQGBeqZLuPIEMMJ47eF.jpg?r=63e",
    "resourceUrl": "",
    "trailer": "VkrbZqCJaEk",
    "year": "1990",
    "genre": "drama",
    "type": "movie"
  },
  {
    _id:9,
    "title":"Versalles",
    "img":"https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfe59Ij8cEeFdo1awW7lUSO1D8TZuHrAb7SlzAIpic6gfgmdiypSQyL9ByUU1210i0stcJ_bLQUcWhBfX1RR57s5F4k.webp?r=991",
    "resourceUrl": "",
    "trailer": "ov7MV6V2aa0",
    "year": "1990",
    "genre": "comedy",
    "type": "movie"
  },
  {
    _id:10,
    "title":"Vikingos",
    "img":"https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVBgaj6Nj7-1SnWCXvNMSZItnzVfNKGT_seNrcQIaABgxgyo4RGbvLgocOcqxeD1qtiM23QWj5I4U002vL8BF3hcgAk.webp?r=e15",
    "resourceUrl": "",
    "trailer": "0DZKZ0qktU4",
    "year": "1990",
    "genre": "drama",
    "type": "serie"
  },
];

const exampleMediaList = exampleMediaListLong

// Array de objetos de ejemplo con un listado de listas personalizadas de contenidos multimedia para pruebas temporales
// A obtener desde la ruta GET /api/profile/:id/lists del backend.
const sweeperArray = [
  {
      name: "Mi Lista (hardcodeada)",
      items: exampleMediaListShort,
  },
  {
      name: "Continuar viendo (hardcodeada)",
      items: exampleMediaList,
  },
  {
      name: "Populares en Netflix (hardcodeada)",
      items: exampleMediaListShort,
  },
  {
      name: "Tendencias (hardcodeada)",
      items: exampleMediaList,
  },
  {
      name: "Nuevos Lanzamientos (hardcodeada)",
      items: exampleMediaListShort,
  },
];

// Ejemplos de contenido destacado para utilizar temporalmente.
const highlightedExample1 = {
  backgroundImgUrl: "https://occ-0-5386-185.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABb9zrJZCzWWOWP5CIL2SdDpBx-4JLVaJO0LJ-u8_BDW_sdIxq5b-lKooj4SSP9QwVBtXSkk-EKTaM6flxnHsKq6DMMZw.jpg?r=be2",
  titleImgUrl: "https://occ-0-5386-185.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABZKs5-soLOHmu6m6EyWtdg0guNI5VwLCHQOqn7U7tlAHroNHELlws9qCxOOgf1Xq-6nCkCG-2VjtQ08DzHAsDb545N2vMCdtjzCbNzZzM9zPa1AbCBdEoQfUo4NMj-ZVNhtd5lHVo_ASMH6zcy6BorxtccPuDN1EnZz9OxAz2WHXJA.png?r=05f",
  subtitleText: "Nº2 en Argentina hoy",
  descriptionText: "Cuando un violento ataque en su pueblo saca a la luz amenazas ocultas y secretos mortales, una mujer comienza a descifrar el oscuro pasado de su madre.",
  link: "https://www.netflix.com/watch/81056342?trackId=254015180&tctx=0%2C0%2C45a78b47-5bdd-4b40-a53d-4e39cce5f9ce-235618663%2C30449431-79ca-4fb7-927a-f9fae0dc8c03_49811758X20XX1646873762874%2C30449431-79ca-4fb7-927a-f9fae0dc8c03_ROOT%2C%2C%2C",
};
const highlightedExample2 = {
  backgroundImgUrl: "https://occ-0-5386-185.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABY3-lXaMRMJpy-zdR4inwi82GzFqU8VHTjDKKYQqvBTMx3VWuDj0LEmR1LpDxKud-UpkeIA97EtLktl4leC_pIgq9ReU.jpg?r=6e4",
  titleImgUrl: "https://occ-0-5386-185.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABc81Y9B_WQtmDr8lNhT6lFbxRP-zkf4Tpm1ri7Xc8F55A8sVu4w8LM325LJPw9Zf18mECfUqbz_va2sameo_6B5AzVCx8KDEKGrNNaY76kom-bmOsRIvn7tLp2iEZPMwgRg1n1nu6HwWARdZI2Tp2ytfxDS12Yyp81yS2XsGFPRIIg.png?r=cdb",
  subtitleText: "",
  descriptionText: "Presa de un laboratorio y del tiempo, una pareja confundida elude a intrusos enmascarados mientras protege una nueva fuente de energía que podría salvar a la humanidad",
  link: "https://www.netflix.com/watch/80092885?trackId=254015180&tctx=0%2C0%2C1964f4be-4aa7-4d89-bb01-81ddc0459403-11878621%2C436ba6c5-b475-40c5-bd98-475342f5e49b_7639256X20XX1647292028747%2C436ba6c5-b475-40c5-bd98-475342f5e49b_ROOT%2C%2C%2C",
};

// Para poder cambiar fácilmente entre highlightedExample1 y highlightedExample2 
const highlightedMedia = highlightedExample1;

// TODO: Mejorar responsiveness
const Browse = () => {
  return (
    <>
      <HighlightedMedia media={highlightedMedia}/>
      <ListContainer listArray={sweeperArray} />
    </>
  )
}

export default Browse