function hamburgerHelper() {
    let headerID = document.getElementById("filler");

    if (headerID.style.display === 'block') {
        headerID.style.display = 'none';
    } else {
        headerID.style.display = 'block';
    }
}