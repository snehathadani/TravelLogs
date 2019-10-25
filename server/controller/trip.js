const {saveLocation} = require('../db')

module.exports = function(server) {
    server.post("/api/triplog", async (req, res, next) =>  {
        try {
            const user_id = 1; //TODO fix after auth get from req object
            const {locationName: location_name, lat, lng, country} = req.body
            console.log({location_name, lat, lng, country})
            saveLocation({location_name, lat, lng, country, user_id})
            res.status(200).json({locationName: location_name, lat, lng, country})   
        } catch (e) {
            next(e)
        }
    });
}