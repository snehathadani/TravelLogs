const db = require('../db')

module.exports = function(server) {
    server.post("/api/user", async (req, res, next) =>  {
        try {
            const {userName:username, email} =  req.body
            await db.addUser({username, email})
            res.status(200).json({username, email})   
        } catch (e) {
            next(e)
        }
    });
}