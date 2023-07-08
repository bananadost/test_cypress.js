describe('Оформление заказа', function () {
    
    it('Оформление заказа', function () {
        cy.visit('https://reddragon-spb.ru/');
        cy.get(
            '[href="/koreyskaya-kukhnya/"] > .item-tcat__image > .item-tcat__img'
            ).wait(1000).click();
        cy.get(
            ':nth-child(5) > .product-item__inner > .product-item__offers > .purchase > .product-item__buttons > .btn'
            ).wait(1000).click();
        cy.get(
            ':nth-child(6) > .product-item__inner > .product-item__offers > .purchase > .product-item__buttons > .btn'
            ).wait(1000).click();
        cy.get(
            ':nth-child(9) > .product-item__inner > .product-item__offers > .purchase > .product-item__buttons > .btn'
            ).wait(1000).click();
        cy.get('.icon-cart').wait(1000).click();
        cy.on('uncaught:exception', (err, runnable) => {return false});
        cy.contains('Оформление заказа');
        cy.get('.wa-field-firstname > .wa-value > input').wait(1000).type('Иван');
        cy.get('.wa-field-lastname > .wa-value > input').wait(1000).type('Иванов');
        cy.get('.wa-field-phone > .wa-value > p > input').wait(1000).type('+79111111111');
        cy.get('.wa-field-email > .wa-value > p > input').wait(1000).type('test@ya.ru');
        cy.get(
            '#checkout-contact-form > .wa-form > .wa-field-address > .wa-value > p > .wa-field-address-street > input'
            ).wait(1000).type('тест');
        cy.get('.cartOS__terms > input').wait(1000).click();
        cy.get(
            '.cartOS__sidebar-inner > .cartOS__info > .cartOS__infoBl > .cartOS__buttons > .cartOS__button'
            ).wait(1000).click();
        cy.wait(5000);
        cy.contains('Ваш заказ успешно оформлен');
    })
})