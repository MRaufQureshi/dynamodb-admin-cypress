import {Fixtures} from "../fixtures";
import {Base} from "../objects/Base";
import {Table} from "../support/Table";

describe('Create Table', () => {
    let inputValue = `${Math.random()}.txt`;
    beforeEach(()=> {
        Fixtures.open('/create-table')
    })

    after(()=>{
        //cy.get(Base.landingPage.ListTable).find('> li:nth-child(1) > .badge-danger').click({multiple: true })
    })

    it('should verify Create Table GUI', () => {
        cy.get(Base.createTable.InputFieldTableName).should('be.visible')
        cy.get(Base.createTable.InputFieldHashAttributeName).should('be.visible')
        cy.get(Base.createTable.DropdownAttributeType).should('be.visible')
        cy.get(Base.createTable.InputFieldRangeAttributeName).should('be.visible')
        cy.get(Base.createTable.DropdownRangeAttributeType).should('be.visible')
        cy.get(Base.createTable.InputFieldReadCapacityUnits).should('be.visible')
        cy.get(Base.createTable.InputFieldWriteCapacityUnits).should('be.visible')
        cy.get(Base.createTable.ButtonSecondaryIndexes).should('be.visible')
        cy.get(Base.createTable.ButtonSubmit).should('be.visible')
    });

    it('should verify create table functionality', () => {
        cy.get(Base.createTable.InputFieldTableName).type(inputValue)
        cy.get(Base.createTable.InputFieldHashAttributeName).type('justrack_test_id')
        cy.get(Base.createTable.DropdownAttributeType).select('Number')
        cy.get(Base.createTable.ButtonSubmit).click()
        cy.get(Base.landingPage.ListTable).then((tableList)=>{
            expect(tableList).to.contain(inputValue)
        })

    });

    it('should verify scenarios for both form errors and successes.', () => {
        cy.get(Base.createTable.ButtonSubmit).click()
        cy.get(Base.createTable.ErrorMessage).should('contain.text','Invalid table/index name.')
        })

    it('should verify tabs', () => {
        Fixtures.open('')
        cy.get(Base.landingPage.ListTable).find(Base.landingPage.FirstTableRom).click()
        Table.assertTabTitles()
    })

    it('should delete first table', () => {
        Fixtures.open('')
        cy.get(Base.landingPage.ListTable).find('> li:nth-child(1) > .badge-danger').click({multiple: true })
    })

})
