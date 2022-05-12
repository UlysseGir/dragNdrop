const cube = document.querySelector(".cube");
const zone = document.querySelectorAll(".zone");

cube.addEventListener("dragstart", function(){
    
    setTimeout(() => {this.className = "invisible"}, 0);
})

cube.addEventListener("dragend", function(){

    this.className = "cube";
});

for(const empty of zone){
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);
};

function dragOver(e){
    e.preventDefault()
    //
}

function dragEnter(e){
    e.preventDefault()
    //
}

function dragLeave(){
    //
}

function dragDrop(){
    this.className = "zone";
    this.append(cube);
}