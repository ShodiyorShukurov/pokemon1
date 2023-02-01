// Get elements
var elPokeList = document.querySelector(".poke-list")


for (poke of pokemons) {
    var newItem = document.createElement("li");
    var newTitle = document.createElement("h3");
    var newNum = document.createElement("span");
    var newImg = document.createElement("img");
    var newType = document.createElement("p");
    var newTime = document.createElement("time");

    newTitle.textContent = poke.name;
    newNum.textContent = poke.num;
    newImg.src = poke.img;
    newImg.width = "300";
    newImg.height = "300";
    newType.textContent = poke.type.join(", ");
    newTime.textContent = poke.spawn_time;
    newTime.setAttribute("datetime", `2023-01-30 ${poke.spawn_time}`);

    newItem.appendChild(newTitle);
    newItem.appendChild(newNum);
    newItem.appendChild(newImg);
    newItem.appendChild(newType);
    newItem.appendChild(newTime);


    elPokeList.appendChild(newItem);
    newItem.classList.add("poke-item");
    // newTitle.className.add("title");
    newNum.classList.add("number")
    newType.classList.add("name");
    newTime.classList.add("time")
}