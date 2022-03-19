// import { aggregate } from '../models/MoviesAndSeries.js';
// import bcryptjs from 'bcryptjs';
// import { validationResult } from 'express-validator';
// import jwt from 'jsonwebtoken';


// //This function will get everything from moviesAndSeries collection.

// const findRecommendations = async(req,res) => {

  
//     const { genre, type, audienceClasification, director } = req.body

//     try {

//         const recommend = await aggregate ({
//             $project: { highmarks: { $filter: { input: "$marks", as: "marks", cond: { $gt: [ "$$marks", 10 ] } } } } 
        
//         } )


       
//         // console.log(genre)
//         // console.log(type)

//         // const moviesByGenre = await MoviesAndSeries.find({
//         //     type,
//         //     genre
        
//         // })
 
//          res.json({'right': 'okay'})
   



//     } catch (error) {
//         console.log(error)
//         res.status(500).send('Internal server error')
//     }
// }


// export { findRecommendations };