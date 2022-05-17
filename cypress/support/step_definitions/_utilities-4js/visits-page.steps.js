

Given('the user navagates to {string}', url => {

    const matched = /\${(.*)}/g.exec(url);

    if (matched)
        url = Cypress.env('TEST_CONFIGURATION')[matched[1]];

    cy.visit(url);
});


Then('the user sees the {string} page', title => {

    const matched = /\${(.*)}/g.exec(title);

    if (matched)
        title = Cypress.env('TEST_CONFIGURATION')[matched[1]];

    cy.title().should('include', title);
});


Then('the user sees {string} on the page', value => {

    const matched = /\${(.*)}/g.exec(value);

    if (matched)
        value = Cypress.env('TEST_CONFIGURATION')[matched[1]];

    cy.contains(value);
});
