export const Base= {
    landingPage: {
        Form:'body',
        HeaderTable:'.breadcrumb-item',
        InputFieldFilter:'#filter-input',
        ButtonCreateTable:'.btn-primary',
        ListTable:'#table-list',
        FirstTableRom:'> li:nth-child(1) > a:nth-child(1)'



    },
    createTable:{
        InputFieldTableName:'#TableName',
        DropdownAttributeType:'[name="HashAttributeType"]',
        InputFieldHashAttributeName:'#HashAttributeName',
        DropdownRangeAttributeType:'[name="RangeAttributeType"]',
        InputFieldRangeAttributeName:'#RangeAttributeName',
        InputFieldReadCapacityUnits:'#ReadCapacityUnits',
        InputFieldWriteCapacityUnits:'#WriteCapacityUnits',
        ButtonSecondaryIndexes:'#new-index',
        ButtonSubmit:'#saveButton',
        ErrorMessage:'#error-wrapper'
    },
    iframe: {
        tableIframe: 'iframe'
    },
}