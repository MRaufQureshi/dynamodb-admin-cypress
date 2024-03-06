import {Fixtures} from "../fixtures";
import {Base} from "../objects/Base";
import {Table} from "../support/Table";

let inputValue = `${Math.random()}`

describe('Table Details', () => {

    beforeEach(()=> {
        Fixtures.open('/create-table')
    })

    after(()=>{})

    it('should programmatically navigate to the details page of the newly created table', () => {
        cy.get(Base.createTable.InputFieldTableName).type(inputValue)
        cy.get(Base.createTable.InputFieldHashAttributeName).type(inputValue)
        cy.get(Base.createTable.DropdownAttributeType).select('String')
        cy.get(Base.createTable.ButtonSubmit).click()
        cy.get(Base.landingPage.ListTable)
            .find(`[href="/tables/${inputValue}"]`).click({multiple:true})
        cy.get(Base.tableDetails.Header).contains(inputValue)
        cy.url().should('contains',inputValue)

    });

    it('should dynamically access the "tabs" (Items, Get, Meta) on the details page', () => {
        Fixtures.open('')
        cy.get(Base.landingPage.ListTable)
            .find(`[href="/tables/${inputValue}"]`).click({multiple:true})
        Table.assertTabTitlesAndURL()
    })
})
