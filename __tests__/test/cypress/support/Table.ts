let tabNames: any
export class Table {
    public static assertTabTitles() {
        const tmpTabs = '.nav-tabs'
        tabNames = [
            'Items',
            'Get',
            'Meta'
        ]
        tabNames.forEach(function (value) {
            cy.get(tmpTabs).contains(value).click()
        })
    }
}