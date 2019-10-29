const db = require('../db')

module.exports = function(server) {
    server.post("/api/triplog/trip", async (req, res, next) =>  {
        try {
            const user_id = 3; //TODO fix after auth get from req object
            const {locationName: location_name, lat, lng, country, description} = req.body
            console.log({location_name, lat, lng, country, description})
            await db.saveLocation({location_name, lat, lng, country, user_id, description})
            res.status(200).json({locationName: location_name, lat, lng, country})   
        } catch (e) {
            next(e)
        }
    });

    server.get("/api/triplog", async (req, res, next) => {
        try {
            const user_id = 3; //TODO fix after auth get from req object
            const response = await db.getTripsForUser(user_id);
            console.log(response);
            res.status(200).json(response)
        } catch (e) {
            next(e)
        }
    })

    server.get("/api/triplog/tripsFor", async(req, res, next) => {
        try {
            const user_id = 3; //TODO fix after auth get from req object
            console.log(req.query)
            const response = await db.getTripDetailsByLocation(req.query.lat, req.query.lng);
            return res.status(200).json(response);
        } catch (e) {
            next(e);
        }
    })
}