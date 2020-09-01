
const axios = require('axios')
const secretKey = '6LcsKMYZAAAAAFTtRAOgQ1qHr7dfmIYcHNOlerIW';

const api = axios.create({
    baseURL : ''
})

const verify = async (token) => {
    const data = {
        secret : secretKey,
        response : token,

    }
    
    try{
        const response = await api.post("https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response="+token,{});
        console.log(response.data)
        return response.data.success;
    }
    catch (e) {
        console.log("error in connetion to google")
    }
    
 
};

module.exports = verify;