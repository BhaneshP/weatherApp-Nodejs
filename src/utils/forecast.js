const request=require('request')

const forecast=(latitude,longitude,callback)=>{
    const url='https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&'+'lon='+longitude+'&units=metric&appid=e440c61c173da1b344e7a55adf21cd2f'
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to weather service',undefined)
        }else if(body.message){
            callback('Unable to find that location.Try another search',undefined)
        }else{
            callback(undefined,'It is currently '+body.main.temp+' degrees out there. '+body.weather[0].main)
        }
    })
}

module.exports=forecast