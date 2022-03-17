import MoviesAndSeries from '../models/MoviesAndSeries.js';
import bcryptjs from 'bcryptjs';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';


//This function will get everything by an especific genre from moviesAndSeries collection.

const getSearchByGenre = async (req,res) => {

    // console.log(req)
    // console.log(res)
    // {
    //     "genre": "drama",
    //     "type": "serie"
    // }

    const { genre, type } = req.body

    try {

        console.log(genre)
        console.log(type)

        const moviesByGenre = await MoviesAndSeries.find({
            type,
            genre
        })
 
         res.json({moviesByGenre})
         res.status(200).send('movies or series have been sendend correctly')
         console.log(moviesByGenre)

    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server error')
    }
}


export { getSearchByGenre }