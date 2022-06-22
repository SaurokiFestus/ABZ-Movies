// const charactersList = document.getElementById("actorsList")

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'bca6673c95msh4df52853157fdb8p15edc9jsn35733bab5fb7',
// 		'X-RapidAPI-Host': 'movie-details1.p.rapidapi.com'
// 	}
// };

// function fetchData() {
// 	fetch('https://movie-details1.p.rapidapi.com/imdb_api/actor?id=nm0000138', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// }
	// .catch(err => console.error(err));
// 	let keyCharacters = await res.json()
// 	dispCharacters(keyCharacters)
// 	console.log(keyCharacters)
// 	} catch (err){
// 	console.log(err)
// 	}
// }
    
const userCardTemplate = document.querySelector("[data-user-template]")
const actorCardContainer = document.querySelector("[data-actor-cards-container]")
const search = document.querySelector("[data-search]")


let users = []

search.addEventListener("input", (event) =>{
	const val = event.target.value.toLowerCase()
	users.forEach(user =>{
		const isHidden = user.name.toLowerCase().includes(val)
		user.element.classList.toggle("hide", !isHidden)
	})
	
})


fetch("https://www.breakingbadapi.com/api/characters")
.then(res => res.json())
.then(data => {
	users = data.map(user =>{
		const card = userCardTemplate.content.cloneNode(true).children[0]
		const header = card.querySelector("[data-header]")
		const body = card.querySelector("[data-body]")
		const images = card.querySelectorAll("[data-image]")
		header.textContent = user.name
		body.textContent = user.occupation
		images.textContent = user.img
		actorCardContainer.append(card)
		return{name: user.name, email: user.img, element: card}
	})

})



// fetchData();

const links = document.querySelectorAll(".scrollTo")
links.forEach((item)=>{
    item.addEventListener("click", () =>{
        const element = document.getElementById(item.getAttribute("data-link"));
        element.scrollIntoView({behavior: "smooth", block:"center"})
    } )
})

// let keyCharacters = []
// const search = document.getElementById("search")
// search.addEventListener("keyup", (e)=>{
// 	const searchBar = e.target.value
// 	const filteredChar = keyCharacters.filter (character => {
// 		return (
// 			character.name.contains(searchBar)
// 			)
// 	})
// 	dispCharacters(filteredChar)
// })

// console.log(search)

// const dispCharacters = (characters) => {
// 	const htmlString = characters 
// 	.map((character) =>{
// 		return `
// 		<li class="character">
// 			<h2>${character.name}</h2>
// 		</li?
// 		`
// 	})
// 	.join("")
// 	actorsList.innerHtml = htmlString
// }

