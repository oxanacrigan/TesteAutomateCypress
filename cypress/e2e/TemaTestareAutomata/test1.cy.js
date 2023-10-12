describe('Suita 1', () => {
         
        //Testul numarul 1
        it('Login cu user sau parola gresita', () => {
            cy.visit('www.saucedemo.com');
            cy.get('#user-name').type('maria');
            cy.get('#password').type('secret_sauce');
            cy.get('#login-button').click();
            
        
            cy.get('[data-test="error"]').should('exist')
})

         //Testul numarul 2
            it('Login cu userul standard', () => {
                cy.visit('www.saucedemo.com');
                cy.get('#user-name').type('standard_user');
                cy.get('#password').type('secret_sauce');
                cy.get('#login-button').click();

                cy.get('[data-test="error"]').should('not.exist')
})

            //Testul numarul 3
            it('Logout', () => {
                cy.visit('www.saucedemo.com');
                cy.get('#user-name').type('standard_user');
                cy.get('#password').type('secret_sauce');
                cy.get('#login-button').click();
                cy.get('#react-burger-menu-btn').click();
                cy.get('#logout_sidebar_link').click();

                cy.get('.login_wrapper-inner').should('exist')
})
             
             //Testul numarul 4
              it('Deschide si inchide meniul lateral', () => {
                cy.visit('www.saucedemo.com');
                cy.get('#user-name').type('standard_user');
                cy.get('#password').type('secret_sauce');
                cy.get('#login-button').click();
                cy.get('#react-burger-menu-btn').click();
                cy.get('#react-burger-cross-btn').click();

                cy.get('.bm-menu').should('not.be.visible')
})

             //Testul numarul 5
             it('Adauga un produs in cos', () => {
                cy.visit('www.saucedemo.com');
                cy.get('#user-name').type('standard_user');
                cy.get('#password').type('secret_sauce');
                cy.get('#login-button').click();
                cy.get('#item_4_title_link > .inventory_item_name').click();
                cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
                cy.get('.shopping_cart_link').click();

                cy.get('.cart_item_label').should('exist')
})

             //Testul numarul 6
             it('Stergerea unui produs din cos', () => {
                cy.visit('www.saucedemo.com');
                cy.get('#user-name').type('standard_user');
                cy.get('#password').type('secret_sauce');
                cy.get('#login-button').click();
                cy.get('#item_4_title_link > .inventory_item_name').click();
                cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
                cy.get('.shopping_cart_link').click();
                cy.get('[data-test="remove-sauce-labs-backpack"]').click();

                cy.get('.cart_item_label').should('not.exist')
})

             //Testul numarul 7
             it('Comandarea unui produs', () => {
                cy.visit('www.saucedemo.com');
                cy.get('#user-name').type('standard_user');
                cy.get('#password').type('secret_sauce');
                cy.get('#login-button').click();
                cy.get('#item_4_title_link > .inventory_item_name').click();
                cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
                cy.get('.shopping_cart_link').click();
                cy.get('[data-test="checkout"]').click();
                cy.get('[data-test="firstName"]').type('standard');
                cy.get('[data-test="lastName"]').type('user');
                cy.get('[data-test="postalCode"]').type('121212');
                cy.get('[data-test="continue"]').click();
                cy.get('[data-test="finish"]').click();

                cy.get('#checkout_complete_container').should('exist')
})

             //Testul numarul 8
             it('Detaliile produsului', () => {
                cy.visit('www.saucedemo.com');
                cy.get('#user-name').type('standard_user');
                cy.get('#password').type('secret_sauce');
                cy.get('#login-button').click();
                cy.get('#item_1_img_link').click();

                cy.get('.inventory_details_desc').should('exist')
})

             //Testul numarul 9
             it('Butonul Back to products', () => {
                cy.visit('www.saucedemo.com');
                cy.get('#user-name').type('standard_user');
                cy.get('#password').type('secret_sauce');
                cy.get('#login-button').click();
                cy.get('#item_4_img_link').click();
                cy.get('[data-test="back-to-products"]').click();

                cy.get(':nth-child(2) > :nth-child(1) > #inventory_container').should('exist')

               
})





})