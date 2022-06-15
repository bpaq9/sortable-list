const draggable_list = document.getElementById('draggable-list')
const check = document.getElementById('check')

const topAnime = [
	'Naruto',
	'Rurouni Kenshin: Wandering Samurai',
	'Ghost in the Shell',
	'Steins;Gate',
	'Fullmetal Alchemist',
	'Samurai Champloo',
	'Darker Than Black',
	'Attack on Titan',
	'One Piece',
	'Hunter x Hunter',
]

//Store the list items
const listItems = []

let dragStartIndex

createList()

//Insert list items into DOM
function createList() {
	;[...topAnime].forEach((anime, index) => {
		const listItem = document.createElement('li')

		listItem.setAttribute('data-index', index)

		listItem.innerHtml = `
            <span class="number">${index + 1}</span>
            <div> class="draggable" draggable="true">
            <p class="anime-name">${$anime}</p>
            <i class="fas fa-grip-lines"></i>
            </div>
        `

		listItems.push(listItem)

		draggable_list.appendChild(listItem)
	})
}
