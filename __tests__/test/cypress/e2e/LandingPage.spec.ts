import {Fixtures} from "../fixtures";
import {Base} from "../objects/Base";
import {Table} from "../support/Table";

describe('Landing Page', () => {

    beforeEach(()=> {
        Fixtures.open('')
    })

    after(()=>{

    })

    it.skip('should verify Landing page', () => {
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

    it('should verify "Delete" functionality by clicking the "action" chip.', () => {
        Table.addTable()
        cy.get(Base.landingPage.ListTable).find('li').its('length').then((initialTableCount) => {
            Table.deleteTable();
            cy.get(Base.landingPage.ListTable).find('li').its('length').should('eq', initialTableCount - 1);
        });
    });
})
