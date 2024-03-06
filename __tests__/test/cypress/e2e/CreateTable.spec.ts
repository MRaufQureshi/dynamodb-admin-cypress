import {Fixtures} from "../fixtures";
import {Base} from "../objects/Base";
import {Table} from "../support/Table";

let inputValue = `${Math.random()}`

describe('Create Table', () => {

    beforeEach(()=> {
        Fixtures.open('/create-table')
    })

    after(()=>{})

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
        cy.get(Base.createTable.DropdownAttributeType).select('String')
        cy.get(Base.createTable.ButtonSubmit).click()
        cy.get(Base.landingPage.ListTable).then((tableList)=>{
            expect(tableList).to.contain(inputValue)
        })

    });

    it('should verify all field validation scenarios for both form errors and successes.', () => {
        cy.get(Base.createTable.ButtonSubmit).click()
        cy.get(Base.createTable.ErrorMessage).should('contain.text','Invalid table/index name.')

        cy.get(Base.createTable.InputFieldTableName).type(inputValue)
        cy.get(Base.createTable.ButtonSubmit).click()
        cy.get(Base.createTable.ErrorMessage).should('contain.text','Names of key attributes and attributes projected')

        cy.get(Base.createTable.InputFieldHashAttributeName).type(inputValue)
        cy.get(Base.createTable.InputFieldReadCapacityUnits).clear()
        cy.get(Base.createTable.ButtonSubmit).click()
        cy.get(Base.createTable.ErrorMessage).should('contain.text','ReadCapacityUnits to be a number')

        cy.get(Base.createTable.InputFieldReadCapacityUnits).type('5')
        cy.get(Base.createTable.InputFieldWriteCapacityUnits).clear()
        cy.get(Base.createTable.ButtonSubmit).click()
        cy.get(Base.createTable.ErrorMessage).should('contain.text','WriteCapacityUnits to be a number')

        })

    it('should verify all field validation scenarios for Secondary Indexes (both form errors and successes.)', () => {
        cy.get(Base.createTable.InputFieldTableName).type(inputValue)
        cy.get(Base.createTable.InputFieldHashAttributeName).type(inputValue)
        cy.get(Base.createTable.ButtonSecondaryIndexes).click()
        cy.get(Base.createTable.ButtonSubmit).click()
        cy.get(Base.createTable.ErrorMessage).should('contain.text','Names of key attributes and attributes projected')

        cy.get(Base.secondaryIndexes.InputFieldIndexName).type('secondaryIndex')
        cy.get(Base.createTable.ButtonSubmit).click()
        cy.get(Base.createTable.ErrorMessage).should('contain.text','Names of key attributes and attributes projected')

        cy.get(Base.secondaryIndexes.InputFieldHashAttributeName).type('3')
        cy.get(Base.createTable.ButtonSubmit).click()
        cy.get(Base.createTable.ErrorMessage).should('contain.text','Member must satisfy enum value set')

        cy.get(Base.secondaryIndexes.DropdownHashAttributeType).select('String')
        cy.get(Base.createTable.ButtonSubmit).click()
    })

    it('should delete first table', () => {
        Fixtures.open('')
        cy.get(`[data-table-name="${inputValue}"]`)
            .find('.badge-danger').click({multiple:true})
    })

    it('should verify tabs', () => {
        Fixtures.open('')
        cy.get(Base.landingPage.ListTable).find(Base.landingPage.FirstTableRom).click()
        Table.assertTabTitles()
    })

})
