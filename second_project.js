document.addEventListener('click', function(e) {
    if(e.target.id === 'secret') {
        let hiddenElement = document.querySelector('.billion');
        if(hiddenElement.checkVisibility()) {
            hiddenElement.removeAttribute('style');
        } else {
            hiddenElement.setAttribute('style', 'display: block');
        }
    }
});