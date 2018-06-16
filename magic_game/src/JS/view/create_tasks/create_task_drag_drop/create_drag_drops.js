export function create_drag_drops(e) {
  const dragElement = e.target;

  if (!dragElement.classList.contains('letter')){return;}

  let coords;
  let shiftX;
  let shiftY;

  startDrag(e.clientX, e.clientY);

  document.onmousemove = function(e) {
    moveAt(e.clientX, e.clientY);
  };

  dragElement.onmouseup = function() {
    finishDrag();
  };

  function startDrag(clientX, clientY) {

    shiftX = clientX - dragElement.getBoundingClientRect().left;
    shiftY = clientY - dragElement.getBoundingClientRect().top;

    dragElement.style.position = "fixed";
    const wrapper_word = document.getElementById("wrapper_word");
    wrapper_word.appendChild(dragElement);

    moveAt(clientX, clientY);
  };

  function finishDrag() {
    dragElement.style.top = parseInt(dragElement.style.top) + 'px';
    dragElement.style.position = 'absolute';

    document.onmousemove = null;
    dragElement.onmouseup = null;
  }

  function moveAt(clientX, clientY) {
    const newX = clientX - shiftX;
    const newY = clientY - shiftY;

    
    dragElement.style.left = newX + 'px';
    dragElement.style.top = newY + 'px';
  }

  return false;
}





  

  