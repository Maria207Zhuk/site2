window.onload = function() {
    
    setTimeout(function(){
    
    document.body.classList.add("loaded")
    
    // щоб картинки рухались
    Draggable.create(".gallery", {
        // межа
        bounds:" body",
        inertia: true

    })
    })



} 