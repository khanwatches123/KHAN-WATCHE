function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);document.querySelector('.shop-btn').addEventListener('click', function() {
    alert('Redirecting to shop...');
    window.location.href = "#products";
});
