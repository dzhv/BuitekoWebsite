export function initDragging(draggableElements: HTMLElement[]){
	draggableElements.forEach(el => registerElement(el));

	document.body.addEventListener('dragover', dragOver,false); 
	document.body.addEventListener('drop', drop, false); 
}

function registerElement(element: HTMLElement){	
	element.addEventListener('dragstart', dragStart, false);
}

function dragStart(event) {
    var style = window.getComputedStyle(event.currentTarget, null);
    event.dataTransfer.setData("text/plain",
    (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY));
	event.dataTransfer.setData("currentTargetID", event.currentTarget.id);    

	event.dataTransfer.effectAllowed = "copyMove";	
} 

function dragOver(event) { 	
    event.preventDefault(); 
    return false; 
} 

function drop(event) { 
    var offset = event.dataTransfer.getData("text/plain").split(',');
    var dmId = event.dataTransfer.getData("currentTargetID");
    var dm = document.getElementById(dmId);
    dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
    event.preventDefault();
    return false;
} 