let nameInput = document.querySelector('#nameInput');
let numberInput = document.querySelector('#numberInput');
let addContactBtn = document.querySelector('#addContactBtn');
let removeContactBtn = document.querySelector('#removeContactBtn');
let showContactsBtn  = document.querySelector('#showContactsBtn');
let showContacts = document.querySelector('#showContacts');
let contactsWrapper = document.querySelector('#contactsWrapper');
let modifyBtn = document.querySelector('#modifyBtn')
let div;
let check = false




let rubrica = {
     
    contacts : [
        { nome : 'Daniele',numero :'33334444823'},
        { nome : 'Chiara', numero :'55555554444'},
        { nome : 'Franco', numero :'7666666666'},
        { nome : 'Gianfraco',numero :'99999999999'},
    ],


    showContact : function (){
      this.contacts.forEach( (contatto) => {
        let div = document.createElement('div');
        div.classList.add('contactsWrapper') 
        div.innerHTML=`
        <p>${contatto.nome} </p>
        <p> ${contatto.numero} </p>`;
        
        showContacts.appendChild(div)
      })
      
    },
     

    aggiungiContatto : function ( newName , newNumber){
      newName = nameInput.value;
      newNumber = numberInput.value;
      if (newName && newNumber) {
        this.contacts.push( { nome : newName , numero : newNumber  }  )
        
         this.contacts.forEach( () => {
            div = document.createElement('div')
            div.classList.add('contactsWrapper')
            div.innerHTML = `
          
            <p> ${newName} </p>
            <p> ${newNumber}</p>
            
            `
          })
          nameInput.value = ''
          numberInput.value = ''
          if(check == false){
            showContacts.innerHTML = ''
          }else{
            showContacts.appendChild(div)
          }
      }else{
        alert('campi obbligatori')
      }

    },

    removecontact : function(removeName){
      let name = this.contacts.map( ( contatto )   => contatto.nome )
      let index = name.indexOf(removeName)
          if( index >= 0 ){
            this.contacts.splice( index , 1);
            nameInput.value = '';
            if ( check == false){
              showContactsBtn.innerHTML = 'Mostra';
            }
            showContacts.innerHTML = '';
            this.showContact();
          }else{
            
            alert('inserisci nome da rimuovere')   };
  
     
    },
modifyContact : function(modifyName, newName, newNumber) {
         let nome = this.contacts.map( (contatto) => contatto.nome)
         let index = nome.indexOf(modifyName)
         
          if (index >= 0) {
           
            nameInput.value = ''
            modifyBtn.innerHTML = ' conferma'
            let confirm = modifyBtn
  
             confirm.addEventListener('click', ()=> {
              let newName = nameInput.value
              let newNumber = numberInput.value
  
               if(newName , newNumber){
    
              
                
                this.contacts[index].nome = newName
                this.contacts[index].numero = newNumber
                modifyBtn.innerHTML = 'Modifica'
                nameInput.value = '';
                
                numberInput.value = ''; 
                showContacts.innerHTML = '';
                this.showContact();
                index = -1;
              }
             });
             };

    
         }
         
        }
  
        
      
     

    
  
  



    







showContactsBtn.addEventListener('click', () => {
    if(check == false){
      rubrica.showContact();
      showContactsBtn.innerHTML = ' Nascondi'
      check = true;
    }else{
        showContacts.innerHTML= '';
      showContactsBtn.innerHTML= ' Mostra ';
      check = false;
    }
  });


  addContactBtn.addEventListener( 'click', ()=>{
   
   rubrica.aggiungiContatto()
    nameInput.value = ''
    numberInput.value = ''

  } )

  removeContactBtn.addEventListener( 'click', () => {
    rubrica.removecontact(nameInput.value)
    
  })

  modifyBtn.addEventListener('click' ,()=> {
    let modifyName = nameInput.value
    let newName = nameInput.value
    let newNumber = numberInput.value
   rubrica.modifyContact( modifyName, newName, newNumber)
    

  })



