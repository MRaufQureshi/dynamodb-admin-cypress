import {Base} from "../objects/Base";
import Errors from "undici-types/errors";
import BalancedPoolMissingUpstreamError = Errors.BalancedPoolMissingUpstreamError;

let tabNames: any
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
}