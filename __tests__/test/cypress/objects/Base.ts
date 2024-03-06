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
    secondaryIndexes:{
        InputFieldIndexName:'[name="secondary-index-1-IndexName"]',
        DropdownIndexType:'[name="secondary-index-1-IndexType"]',
        InputFieldHashAttributeName:'[name="secondary-index-1-HashAttributeName"]',
        DropdownHashAttributeType:'[name="secondary-index-1-HashAttributeType"]',
        InputFieldRangeAttributeName:'name="secondary-index-1-RangeAttributeName"',
        DropdownRangeAttributeType:'[name="secondary-index-1-RangeAttributeType"]',
        InputFieldReadCapacityUnits:'#secondary-index-1-ReadCapacityUnits',
        InputFieldWriteCapacityUnits:'#secondary-index-1-WriteCapacityUnits',
    },
    iframe: {
        tableIframe: 'iframe'
    },
}