if (document.readyState === 'complete') {
    setFocus();
} else {
    window.addEventListener('load', setFocus);
}

function setFocus() {
    var el = document.getElementById('search_box');
    el.focus();
}
