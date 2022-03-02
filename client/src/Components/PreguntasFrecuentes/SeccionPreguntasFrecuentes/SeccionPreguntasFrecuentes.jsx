import React from 'react'
import DropdownPreguntasFrecuentes from '../DropdownPreguntasFrecuentes/DropdownPreguntasFrecuentes'
import MailLogin from "../../MailLogin/MailLogin"

const SeccionPreguntasFrecuentes = () => {
    const props = {
        tituloQueEs: "¿Qué es Netflix?",
        parrafoQueEs: "Netflix es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet. Todo lo que quieras ver, sin límites ni comerciales, a un costo muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!",
        tituloCosto: "¿Cuánto cuesta Netflix?",
        parrafoCosto: "Disfruta Netflix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, todo por una tarifa plana mensual. Planes desde $ 379 hasta $ 939 al mes (sin impuestos incluidos). Sin costos adicionales ni contratos.",
        tituloDondeVer: "¿Dónde puedo ver Netflix?",
        parrafoDondeVer: "Disfruta donde quieras, cuando quieras. Inicia sesión en tu cuenta de Netflix para ver contenido al instante a través de netflix.com desde tu computadora personal o en cualquier dispositivo con conexión a internet que cuente con la app de Netflix, como smart TV, smartphones, tablets, reproductores multimedia y consolas de juegos. Además, puedes descargar tus series favoritas con iOS, Android o la app para Windows 10. Con la función de descarga, puedes ver donde vayas y sin conexión a internet. Lleva Netflix contigo adonde sea.",
        tituloCancelacion: "¿Cómo cancelo?",
        parrafoCancelacion: "Netflix es flexible. Sin contratos molestos ni compromisos. Cancela la membresía online con solo dos clics. No hay cargos por cancelación. Empieza y termina cuando quieras.",
        tituloQuePuedoVer: "¿Qué puedo ver en Netflix?",
        parrafoQuePuedoVer: "Netflix tiene un amplio catálogo de películas, series, documentales, animes, originales premiados y más. Todo lo que quieras ver, cuando quieras.",
        tituloNinos: "¿Es bueno Nerflix para niños?",
        parrafoNinos: "La experiencia de Netflix para niños está incluida en la membresía para que los padres tengan el control mientras los peques disfrutan series y películas familiares en su propio espacio. Los perfiles para niños incluyen controles parentales protegidos por PIN que te permiten restringir el contenido que pueden ver los niños en función de la clasificación por edad y bloquear determinados títulos que no quieras que los niños vean.",

    }

    return (
        <>
            <DropdownPreguntasFrecuentes titulo={props.tituloQueEs} parrafo={props.parrafoQueEs}/>
            <DropdownPreguntasFrecuentes titulo={props.tituloCosto} parrafo={props.parrafoCosto}/>
            <DropdownPreguntasFrecuentes titulo={props. tituloDondeVer} parrafo={props.parrafoDondeVer}/>
            <DropdownPreguntasFrecuentes titulo={props.tituloCancelacion} parrafo={props.parrafoCancelacion}/>
            <DropdownPreguntasFrecuentes titulo={props.tituloQuePuedoVer} parrafo={props.parrafoQuePuedoVer}/>
            <DropdownPreguntasFrecuentes titulo={props.tituloNinos} parrafo={props.parrafoNinos}/>
            <MailLogin/>
        </>
    )
}

export default SeccionPreguntasFrecuentes