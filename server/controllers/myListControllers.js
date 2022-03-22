import bcryptjs from 'bcryptjs';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import Profile from '../models/Profile.js';
import { ObjectID as ObjectId } from 'mongodb';
import MoviesAndSeries from '../models/MoviesAndSeries.js';
//const successMessage = require('../shared/const/success.enums')
//import { str } from 'mongodb';

const getAllFromMyList = async(req, res) => {
       
    try {
        //TODO: Evaluar la lógica para traer myList según el profileId
        } catch (error) {
            console.log(error)
            res.status(500).send('Internal server error')
        }
}

const getMovieAndSeriesToMyList = async(req, res) => {

    const { mediaId, profileId } = req.body
       
    try {
        
        } catch (error) {
            console.log(error)
            res.status(500).send('Internal server error')
        }
}

const postMovieAndSeriesToMyList = async(req,res) => {

    const { title, genre, director, audienceClasification, type , _id} = req.body

    //   let id = ObjectId(_id)
    //   id.toString()
    //   console.log(id)
    try {
   
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server error')
    }
}


    
    
export { postMovieAndSeriesToMyList, getMovieAndSeriesToMyList, getAllFromMyList };