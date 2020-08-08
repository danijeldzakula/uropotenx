
window.addEventListener('scroll', function(e) {
	var stickyNav = document.getElementById('navbar');
	var winTop = scrollY;

	if (winTop >= 100) {
		stickyNav.classList.add('affixNav');
	} else {
		stickyNav.classList.remove('affixNav');
	}
});