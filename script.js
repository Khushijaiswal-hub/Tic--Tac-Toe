let cells=document.querySelectorAll(".cell");
let resetbtn=document.querySelectorAll("#reset");
let msgcontainer=document.querySelector(".msg-container");
let msgs=document.querySelector("#msg");
let newgamebtn=document.querySelector("#new-game");
let turn0=true; //p1-0,p-2-x
const winpatterns=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8],

];
const resetgame=()=>{
    turn0=true;
    enabblecell();
    msgcontainer
}
cells.forEach((cell)=>{
    cell.addEventListener("click",()=>{
        console.log("box clicked");
         if(turn=0){
            cell.innertext='0';
            turn0=false;
         } else{
            cell.innertext='x';
            turn0=true;}
            cell.disabled=true;
            
            
    } );
} );

const disablecells=()=>{
    for(let cell of cells){
        cell.disabled=true;
    }
};
const enablecells=()=>{
    for(let cell of cells){
        cell.enabled=false;
    }
    };


const showwinner(winner)=>{
    msgs.innerText= `congratulations WINNER is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablecells();
};

const checkwin=()=>{
    for( let pattern of winpatterns){
    let pos1val=cells[pattern[0]].innerText;
    let pos2val=cells[pattern[1]].innerText;
    let pos3val=cells[pattern[2]].innerText;
    if(pos1val!==""&&pos2val !==""&&pos3val !==){
        if(pos1val===pos2val&& pos2val===pos3val){
            console.log("winner",pos1val);
            showwinner(pos1val);
        }
    }
    }
    };
    newgamebtn.addEventListener("click",resetgame);
    resetbtn.addEventListener("click",resetgame);

    
       