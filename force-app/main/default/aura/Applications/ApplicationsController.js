({
    doInit: function (component, event, helper) {
        component.set('v.columns', [
            {
                label: 'Name',
                fieldName: 'Name',
                type: 'text'
            },
            {
                label: 'First Name',
                fieldName: 'First_Name__c',
                type: 'text'
            },
            {
                label: 'Last Name',
                fieldName: 'Last_Name__c',
                type: 'text'
            },
            {
                label: 'Amount',
                fieldName: 'Loan_Amount__c',
                type: 'Number'
            },
            {
                label: 'Status',
                fieldName: 'Status__c',
                type: 'text'
            }
        ]);
        // helper.fetchApplicationStatusCount(component);
        helper.loadRecords(component);
    }
});