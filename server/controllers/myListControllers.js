import bcryptjs from 'bcryptjs';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { ObjectID as ObjectId } from 'mongodb';
//const successMessage = require('../shared/const/success.enums')
//import { str } from 'mongodb';


const postMovieAndSeriesToMyList = async(req,res) => {

    const { title, genre, director, audienceClasification, type , _id} = req.body

    //   let id = ObjectId(_id)
    //   id.toString()
    //   console.log(id)
    try {
   
        const search = await User.findById({_id})

        res.json({search})
        console.log(search.myList)

        search.myList.push({
            title: title
        })
       
        const userSaved = await search.save();

        if (!userSaved) {
            return res.status(401).send('Error to add new movie')
        }

        //res.status(200).send(successMessage.sendMovies)
        //Ver de retornar un array con strings para que no se rompa el front

    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server error')
    }
}

const getMovieAndSeriesToMyList = async(req,res) => {

    const { _id } = req.body
       
    try {
       
        const search = await User.findById({_id})
    
        const myList = search.myList
            res.json({myList})
           console.log(search.myList)
    
            //res.status(200).send(successMessage.sendMovies)
            //Ver de retornar un array con strings para que no se rompa el front
    
        } catch (error) {
            console.log(error)
            res.status(500).send('Internal server error')
        }
}
    
    

    //TEST 

    // "_id": "622688d1f74a99351141bf64"
    // "_id": "622938f3bc1698dc1415e886" (nuevo)
    // {
    //     "_id": "6216a6c9fecf58ea23428723",
    //     "title": "Scream"
    //     }

export { postMovieAndSeriesToMyList, getMovieAndSeriesToMyList };