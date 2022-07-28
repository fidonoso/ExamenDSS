const jwt = require('jsonwebtoken')

const authenticate = (request,response,next) =>{
    //Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkFudG9uaW8iLCJsYXN0bmFtZSI6IlNhbGluYXMiLCJwYXNzd29yZCI6Ik1USXpORFUyIiwiZW1haWwiOiJhbnRvbmlvQHNhbGluYXMuY2wiLCJ3ZWJfcGFnZSI6Imh0dHA6Ly93d3cuYW50b25pb3NhbGluYXMuY2wiLCJjcmVhdGVkQXQiOiIyMDIyLTA2LTExVDAzOjUxOjQ3LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIyLTA2LTExVDAzOjUxOjQ3LjAwMFoiLCJpYXQiOjE2NTYxNjg2ODV9.T8rWbv5Kk7a_UETi8juy3QrwiFEugpkBFH2B-vSDgwY
    try{
        if(request.headers['authorization'] == undefined){
            return response.sendStatus(401)
        }
        const authHeader = request.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if(token == null){
            return response.sendStatus(401)
        }
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=> {
            if (err) return response.sendStatus(401)
            next()
        }) 
         
    }catch(err){
        return response.sendStatus(401)
    }
}

module.exports = {authenticate}
