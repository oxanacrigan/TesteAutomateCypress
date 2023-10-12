describe('Site google.com',() =>{
       it('asteapta 10 secunde', () =>{
        cy.visit('http://google.com/');
        cy.get('#L2AGLb').click();   
        cy.wait(10000);
        cy.get('#APjFqb').type('au trecut 10 secunde')
       
    
    })

})