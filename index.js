

const dogbreed = "https://dog.ceo/api/breeds/list/all";
let dog = "https://dog.ceo/api/breed/hound/images/random";
const m = document.getElementById('main');


const addogo = () => {
    b.disabled=true;
    const select = document.createElement('select');

    fetch(dogbreed)
        .then(response => response.json())
        .then(response => {


            for (const property in response.message) {
                if (response.message[property] != '') {
                    console.log(`${property}: ${response.message[property]}`);
                    const opt = document.createElement('option');
                    select.name = property;
                    opt.textContent = property;
                    select.appendChild(opt);
                    m.appendChild(select);

                }
            }

        });
        const div= document.createElement('ul');
        div.classList.add('flex-img');

    
     select.addEventListener('change',e=>{



         dog = `https://dog.ceo/api/breed/${e.target.value}/images/random`;
         fetch(dog)
         .then(response=>response.json())
         .then(res=>{
            const li=document.createElement('li');

            const image=document.createElement('img');
            li.appendChild(image);
            div.appendChild(li);
            image.src=res.message;
            image.alt='dog picture';
            m.appendChild(div);

           
         });

     })

}

console.log("Loading....");
const b= document.querySelector(".b")
b.addEventListener('click', addogo);
