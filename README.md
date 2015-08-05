# Exercise 01

[Final App](http://ramybenaroya.github.io/exercise01/)

##Installation
- `git clone https://github.com/ramybenaroya/exercise01.git`
- `cd exercise01`
- `bower i`
- `serve`
- go to [http://localhost:3000](http://localhost:3000)

##Instructions
- In this project you have a [JSON file](http://localhost:3000/game-of-thrones.json) of Game of Thrones houses and the characters of each house.
- In this JSON file you have all the data that you need in order to create the list of houses and characters.
- You need to create a list of the houses
- Each house has a nested list of characters with name, description, image path, and a link to their wiki page

##Hints
- Here are some hints about how to create links from the data
	- Wiki page: `http://gameofthrones.wikia.com/wiki/{{wikiSuffix}}`
	- Image: `http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-{{imageSuffix}}.jpg`

Note: Each character data object contains `wikiSuffix` & `imageSuffix` properties.
- Useful Native Javascripts Methods
	- [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
	- [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- Useful jquery methods
	- [$.getJSON](http://api.jquery.com/jquery.getjson/)
	- [append](http://api.jquery.com/append/)


##Advanced
- try to implement the same app but using [Handlebars](http://handlebarsjs.com/) template engine

