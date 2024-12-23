const body=document.querySelector('body');  // body element

const buttons=document.querySelectorAll('.button');  // all button elements
console.log(buttons);

buttons.forEach(function(b){
    b.addEventListener('click', function(e){
      console.log(e);
        console.log(e.target); //from where the event is coming

        if(e.target.id==='grey'){
          body.style.backgroundColor=e.target.id;
        }

        if(e.target.id==='white'){
          body.style.backgroundColor=e.target.id;
        }

        if(e.target.id==='yellow'){
          body.style.backgroundColor=e.target.id;
        }

        if(e.target.id==='blue'){
          body.style.backgroundColor=e.target.id;
        }

        if(e.target.id==='purple'){
          body.style.backgroundColor=e.target.id;
        }
    })
})