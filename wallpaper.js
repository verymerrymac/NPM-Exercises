
const axios = require('axios');
const wallpaper = require('wallpaper');
const download = require('download-file')
const fs = require('fs');

(async () => {
    try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        const imageDownload = response.data.message
        var options = {
            directory: "./",
            filename: "dog.jpg"
        }
        download(imageDownload, options, function(err){
            if (err) throw err
            console.log("bark")
            console.log(options.directory + options.filename)
            wallpaper.set(options.filename)
            
        })
    } catch (e) {
        console.log(e)
    }
    await wallpaper.get();
 })();

 
// axios.get('https://dog.ceo/api/breeds/image/random')
// .then(function(response){
//     var options = {
//         directory: "./",
//         filename: ""
//     }
//     var image = response.data.message
//     console.log(image)

//     download(image, options, function(err){
//         if (err) throw err
//         wallpaper.set(options.filename)
//         wallpaper.get()
//     })
// })