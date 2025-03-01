<script>
let ratings = {
    minecraft: 0,
    eaglercraft: 0,
    basketbros: 0
};

function rateGame(game, rating) {
    ratings[game] = rating;
    document.getElementById(game + '-rating').innerText = `Rating: ${rating}`;
}

function goHome() {
    window.location.href = "index.html";
}
</script>
