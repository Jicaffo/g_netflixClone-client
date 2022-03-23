import MoviesAndSeries from '../models/Media.js';
import bcryptjs from 'bcryptjs';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
//const successMessage = require('../shared/const/success.enums')

//This function will get only movies from moviesAndSeries collection.

const getSearchByType = async (req,res) => {

const { type } = req.body

try {
    const search = await MoviesAndSeries.find({type})

        res.json({search})
        console.log(search)

        //res.status(200).send(successMessage.sendMovies)
        //Ver de retornar un array con strings para que no se rompa el front

    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server error')
    }
}

export { getSearchByType };