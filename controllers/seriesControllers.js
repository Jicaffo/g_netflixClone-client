const MoviesAndSeries = require('../models/MoviesAndSeries')
const successMessage = require('../shared/const/success.enums')

//This function will get everything from moviesAndSeries collection.

exports.getSeries = async(req,res) => {

    

    try {
        
        
        const series = await MoviesAndSeries.find({type: 'serie'})
  
       
        res.json({series})
        //res.status(200).send(successMessage.sendSeries)



    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server error')
    }
}

