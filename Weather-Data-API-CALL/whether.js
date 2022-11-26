//  let key="890d04f0d6d88c6cf0ed782eeefc7810";
// let key="890d04f0d6d88c6cf0ed782eeefc7810";
// let whether="https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric";
let data;
async function whether(){
    try{
        let city=document.getElementById('city').value;
        console.log("city:",city)
        // let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);

         data = await res.json();
        appendNews(data);
        console.log("data:",data);
    } catch(err){
        console.log('err:',err);
    }
}

let container= document.getElementById("container");

let map=document.querySelector(".gmap_iframe")

function appendNews(data){

        container.innerText=null;

         let name= document.createElement("h1");

             name.innerText= `City-Name:-- ${data.name}`
        let temp = document.createElement("h1")
        
            temp.innerText=`Temp Is:-- ${data.main.temp}`

        let humidity = document.createElement("h1");

            humidity.innerText=`Humidity is:-- ${data.main.humidity}`;

        let presure = document.createElement("h1")

            presure.innerText=`Pressure is:-- ${data.main.pressure}`;

        container.append(name , temp, humidity, presure);
    
        map.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

}

// "https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=pune&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed