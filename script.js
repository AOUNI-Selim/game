` use strict `

                    /**********************************************     Page d'accuille   ************************************************/
                            /*******************************************  lance le jeu *******************************************/

let play = function () { 
    //console.log('yup');
    document.getElementById('play').addEventListener('click',function () { 
        document.getElementById('board').style.display = 'block';
        alert("Deplacement : ⬅️➡️ --   Tir : ⬆️");


                                     /**********************  usine a ovni qui se lance lors du click ***********************/
        var usineOvni = setInterval(() => {
            var ovni = document.createElement("div");
            ovni.classList.add("ovnis");
            ovni.style.left = Math.floor(Math.random() * 580) + "px"; // ne depace pas la largeur du tableau 
            board.appendChild(ovni);
          }, 1500);
    
    });
     
};
play();


// game

       /*******************************************************    deplacement avion  ****************************************************/


                                                /* Function qui permet de ciblé un elemnt et lui donne un style  */
function donneuse(cible,style) { 
    const element = document.querySelector(cible);
    if (element) {
        return window.getComputedStyle(element)[style];
    }
};
                                                            /* rajouter le tire plus tard */


                                                                /* Function deplacement */
window.addEventListener('keydown', (e) => {
    let leftVoile = parseInt(donneuse('.masque','left'));
    let leftBground = parseInt(donneuse('.sprite','left'));
    let bord = board.style.width;

    switch (e.key) 
       { case "ArrowLeft": 
            if (e.key === 'ArrowLeft' &&  document.querySelector('.masque','left').style.left <= 361.5 + 'px' ) { //il ne doit pas depasser le 24 px left
                
                console.log('gauche');
                document.querySelector('.masque','left').style.left = leftVoile - 64 + 'px';
                document.querySelector('.sprite','left').style.bottom = leftBground - 71 + "px";
            }
                              
        break;
    
        case "ArrowUp":
            alert('haut')
        break;
        
        case "ArrowRight":
            if (e.key == 'ArrowRight') {
                
            }
            document.querySelector('.masque','left').style.left = leftVoile + 64 + 'px';
            document.querySelector('.sprite','left').style.bottom = leftBground - 35 + "px";
            console.log('masque a droite');
        break;
    };
});


/********************************************************************          Ennemies      ************************************************************/



let board = document.getElementById('board');

var deplacementOvni = setInterval(() => {
    var ovnis = document.getElementsByClassName("ovnis");
  
    if (ovnis != undefined) {
      for (var i = 0; i < ovnis.length; i++) {
        
        var ovni = ovnis[i]; 
        var ovniTop = parseInt(
            window.getComputedStyle(ovni).getPropertyValue('top')
        )
        if (ovniTop >= 470) {
          alert("Game Over");
          clearInterval(deplacementOvni);
        //   window.location.reload();
        }// gestion de collision les ovnis ne depassent pas la limite du tableau sinon fin du jeu

        ovni.style.top = ovniTop +  15 + "px";
      }
    }
  }, 1000);