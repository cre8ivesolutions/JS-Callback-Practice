
function move(element) {
    
    element.style.position = 'fixed'
    
    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }
    
    function moveCharacter(){ 
        let direction = null;
        let x = 100;
        let y = 250;
        
        if(direction === 'west'){
            x = x - 1
        }
        if(direction === 'north'){
            y = y + 1
        }
        if(direction === 'east'){
            x = x + 1
        }
        if(direction === 'south'){
            y = y - 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }
    setInterval(moveCharacter), 1

    return {
        to: (moveToCoordinates)
    }
}

// move(character,east)



// move(inventory).to(0, 0)
