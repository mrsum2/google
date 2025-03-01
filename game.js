const games = [
    { name: "Minecraft", url: "games/minecraft.html", img: "https://tse4.mm.bing.net/th?id=OIP.l6MZZynh7ZPVmvvTNNvAFAHaEK&pid=Api&P=0&h=180" },
    { name: "Pac-Man", url: "games/pacman.html", img: "https://tse1.mm.bing.net/th?id=OIP._Gw9uH3x7VwKX4nODkjlcQHaEK&pid=Api&P=0&h=180" },
    { name: "Tetris", url: "games/tetris.html", img: "https://tse2.mm.bing.net/th?id=OIP.IcbjB5cgZPvgtbISS3rS6wHaEK&pid=Api&P=0&h=180" },
    { name: "BasketBros", url: "games/basketbros.html", img: "https://tse3.mm.bing.net/th?id=OIP.I89LzqnaUvVeUTxbdlGZ-QAAAA&pid=Api&P=0&h=180" },
    { name: "Minecraft Advanced", url: "games/minecraft_advanced.html", img: "https://tse4.mm.bing.net/th?id=OIP.l6MZZynh7ZPVmvvTNNvAFAHaEK&pid=Api&P=0&h=180" }
];

const gameList = document.getElementById("game-list");

games.forEach(game => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = game.url;
    
    const image = document.createElement("img");
    image.src = game.img;
    image.alt = game.name;

    const name = document.createElement("span");
    name.textContent = game.name;

    link.appendChild(image);
    link.appendChild(name);
    listItem.appendChild(link);
    gameList.appendChild(listItem);
});
