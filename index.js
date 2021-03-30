const select = document.querySelector("select");
const input = document.querySelector("input")
const title = document.querySelector("#hThree");
const year = document.querySelector("#year");
const plot = document.querySelector("#plot");
const ul = document.querySelector("ul");
const theForm = document.querySelector("form");

async function grabMovies(){
    something = []

 try{
    let response = await axios.get("https://ghibliapi.herokuapp.com/films")
    let results = response.data

        results.forEach((film) => {
         let option = document.createElement("option");
            option.value = film.id
            option.textContent = film.title;
            select.appendChild(option);
           
        })
       
       select.addEventListener("change", (event) => {
        event.preventDefault(); 
        choice = select.value

        results.forEach((film) => { 
            if( choice === film.id ){
        title.textContent = film.title;
        year.textContent = film.release_date;
        plot.textContent = film.description;
            }
        })
       })
      
       theForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const textInput = document.querySelector("#text").value;
            const commentLi = document.createElement("li");
            commentLi.innerHTML = `<strong>${title.textContent}:</strong> ${textInput}`
            ul.appendChild(commentLi)
        
            const input = document.querySelector("input")
            

       })




} catch(error) {
        console.log(error);
    };
}
grabMovies()

