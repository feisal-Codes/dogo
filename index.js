
const cat= "https://dog.ceo/api/breeds/image/random";

function addogo(){
const promise=fetch(cat);
promise
    .then(function(response){
        processingpromise=response.json();
        
        return processingpromise;
    })
    .then(function(processedresponse){
        console.log(processedresponse);
        
        const dog1=document.querySelector(".dog1");
        dog1.src=processedresponse.message;
        dog1.alt='dog photo'
        


        
        
         
    
    });

}
    console.log("Loading....");
    document.querySelector(".b").addEventListener('click', addogo);

    
         
    