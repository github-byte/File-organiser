const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname);

fs.readdir(directoryPath, function (err, files) {

    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 

    files.forEach(function (file) {      
        const name=file.split(".")
    
            if(name[1]!=undefined){
                if(name[1]==='mp3'){
                    console.log("Text: "+file)

                    const pathToFile=directoryPath+"/"+file;
                    
                    fs.mkdir(path.join(__dirname,"music"),function(err){
                        if(err){
                            console.log(err)
                        }
                    
                    })

                    const pathToNewDestination=directoryPath+"/music"+"/"+file

                fs.rename(pathToFile, pathToNewDestination, function (err) {
                    if (err) throw err
                    console.log('Successfully moved!')
                  })
                 
                }
                if(name[1]==='html'||name[1]==="css"||name[1]==="python"||name[1]==="java"){
                  
                            const pathToFile=directoryPath+"/"+file;
                            fs.mkdir(path.join(__dirname,"code"),function(err){
                                if(err){
                                    console.log(err)
                                }
                            
                            })
        
                            const pathToNewDestination=directoryPath+"/code"+"/"+file
        
                        fs.rename(pathToFile, pathToNewDestination, function (err) {
                            if (err) throw err
                            console.log('Successfully moved!')
                          })
                  
                
                        }
                    }
                    if(name[1]==='docx'||name[1]==='doc'){
                  
                        const pathToFile=directoryPath+"/"+file;
                        fs.mkdir(path.join(__dirname,"docs"),function(err){
                            if(err){
                                console.log(err)
                            }
                        
                        })
    
                        const pathToNewDestination=directoryPath+"/docs"+"/"+file
    
                    fs.rename(pathToFile, pathToNewDestination, function (err) {
                        if (err) throw err
                        console.log('Successfully moved!')
                      })
              
            
                    }
                    if(name[1]==='gif'){
                  
                        const pathToFile=directoryPath+"/"+file;
                        fs.mkdir(path.join(__dirname,"gifs"),function(err){
                            if(err){
                                console.log(err)
                            }
                        
                        })

                        const pathToNewDestination=directoryPath+"/gifs"+"/"+file
    
                    fs.rename(pathToFile, pathToNewDestination, function (err) {
                        if (err) throw err
                        console.log('Successfully moved!')
                      })
              
            
                    }
                    if(name[1]==='jpeg'||name[1]==='PNG'||name[1]==='png'){
                  
                        const pathToFile=directoryPath+"/"+file;
                        fs.mkdir(path.join(__dirname,"images"),function(err){
                            if(err){
                                console.log(err)
                            }
                        
                        })
    
                        const pathToNewDestination=directoryPath+"/images"+"/"+file
    
                    fs.rename(pathToFile, pathToNewDestination, function (err) {
                        if (err) throw err
                        console.log('Successfully moved images!')
                      })
              
            
                    }
                    if(name[1]==='zip'){
                  
                        const pathToFile=directoryPath+"/"+file;
                        fs.mkdir(path.join(__dirname,"zipped"),function(err){
                            if(err){
                                console.log(err)
                            }
                        
                        })
    
                        
                        const pathToNewDestination=directoryPath+"/zipped"+"/"+file
    
                    fs.rename(pathToFile, pathToNewDestination, function (err) {
                        if (err) throw err
                        console.log('Successfully moved zipped file!')
                      })
              
            
                    }
                
                    if(name[1]==='mp4'){
                  
                        const pathToFile=directoryPath+"/"+file;
                        fs.mkdir(path.join(__dirname,"videos"),function(err){
                            if(err){
                                console.log(err)
                            }
                        
                        })
    
                        const pathToNewDestination=directoryPath+"/videos"+"/"+file
    
                    fs.rename(pathToFile, pathToNewDestination, function (err) {
                        if (err) throw err
                        console.log('Successfully moved video file!')
                      })
              
            
                    }
                
            
    
    });
});