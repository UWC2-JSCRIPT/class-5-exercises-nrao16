// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

const tdList = document.getElementsByTagName('table');

const onClickHandler = (e) => {
    if(e.target.tagName != 'TD') return;

    e.target.innerHTML =`${e.clientX}, ${e.clientY}`;
}

tdList[0].addEventListener('click', onClickHandler);