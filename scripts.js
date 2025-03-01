<script>
let ratings = JSON.parse(localStorage.getItem('ratings')) || {};
let comments = JSON.parse(localStorage.getItem('comments')) || {};

function rateGame(game, rating) {
    ratings[game] = rating;
    localStorage.setItem('ratings', JSON.stringify(ratings));
    document.getElementById(game + '-rating').innerText = `Rating: ${rating}`;
}

function submitComment(game) {
    const commentBox = document.getElementById(game + '-comment');
    const commentsDiv = document.getElementById(game + '-comments');
    const comment = commentBox.value;
    if (!comments[game]) {
        comments[game] = [];
    }
    comments[game].push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
    commentBox.value = '';
    commentsDiv.innerHTML = comments[game].map(c => `<p>${c}</p>`).join('');
}

document.addEventListener('DOMContentLoaded', (event) => {
    for (const game in ratings) {
        document.getElementById(game + '-rating').innerText = `Rating: ${ratings[game]}`;
    }
    for (const game in comments) {
        document.getElementById(game + '-comments').innerHTML = comments[game].map(c => `<p>${c}</p>`).join('');
    }
});

function goHome() {
    window.location.href = "../index.html";
}

function toggleFullScreen(id) {
    const element = document.getElementById(id);
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE/Edge
        element.msRequestFullscreen();
    }
}
</script>
