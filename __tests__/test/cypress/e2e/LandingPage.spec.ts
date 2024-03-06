import {Fixtures} from "../fixtures";
import {Base} from "../objects/Base";

describe('Landing Page', () => {

    beforeEach(()=> {
        Fixtures.open('')
    })

    after(()=>{

    })

    it('should verify Landing page', () => {
        cy.get(Base.landingPage.Form).find('main').should('exist')
        cy.get(Base.landingPage.Form).find(Base.landingPage.HeaderTable).should('exist')
            .and('have.attr','href')
            .then((herf) => {
                expect(herf).to.equal('/')
                cy.get(Base.landingPage.HeaderTable).invoke('attr', 'href').should('equal', '/')
            });
        cy.get(Base.landingPage.InputFieldFilter).should('be.visible')
        cy.get(Base.landingPage.ButtonCreateTable).should('be.visible')
            .and('have.attr','href')
            .then((herf) => {
                expect(herf).to.equal('/create-table')
                cy.get(Base.landingPage.ButtonCreateTable)
                    .invoke('attr', 'href')
                    .should('equal', '/create-table')
            });

    });

    it('should verify create Table', () => {
        cy.get(Base.landingPage.ButtonCreateTable).click();
    });
})
