import {Base} from "../objects/Base";
import Errors from "undici-types/errors";
import BalancedPoolMissingUpstreamError = Errors.BalancedPoolMissingUpstreamError;
import {Fixtures} from "../fixtures";

let tabNames: any
let inputValue = `${Math.random()}`
export class Table {
    public static assertTabTitlesAndURL() {
        const tmpTabs = '.nav-tabs'
        cy.get(tmpTabs).click()
        cy.url().should('not.contains', '/items')
        tabNames = [
            'Get',
            'Meta'
        ]
        tabNames.forEach(function (value) {
            cy.get(tmpTabs).contains(value).click()
            cy.url().should('include', `/${value.toLowerCase()}`)
        })

        cy.get(tmpTabs).find(Base.tableDetails.TabMeta).click().then(()=>{
            cy.get(Base.tableDetails.MetaDocumentArea).should('be.visible')
        })

        cy.get(tmpTabs).find(Base.tableDetails.TabGet).click().then(()=>{
            cy.get(Base.tableDetails.GetForm).should('be.visible')
        })
    }
    public static addTable(){
        Fixtures.open('/create-table')
        cy.get(Base.createTable.InputFieldTableName).type(inputValue)
        cy.get(Base.createTable.InputFieldHashAttributeName).type(inputValue)
        cy.get(Base.createTable.DropdownAttributeType).select('String')
        cy.get(Base.createTable.ButtonSubmit).click()
        cy.wait(2000)
        cy.get(Base.landingPage.ListTable).then((tableList)=>{
            expect(tableList).to.contain(inputValue)
        })
    }
    public static deleteTable(){
        cy.get(`[data-table-name="${inputValue}"]`)
            .find('.badge-danger').click({multiple:true})
    }
}