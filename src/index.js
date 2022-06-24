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
		header.textContent = user.name
		body.textContent = user.occupation
		actorCardContainer.append(card)
		return{name: user.name, element: card}
	}) 

})


const links = document.querySelectorAll(".scrollTo")
links.forEach((item)=>{
    item.addEventListener("click", () =>{
        const element = document.getElementById(item.getAttribute("data-link"));
        element.scrollIntoView({behavior: "smooth", block:"center"})
    } )
})
