({
    doInit: function (component, event, helper) {
        helper.fetchApplicationStatusCount(component);
    },
    tabSelectHandler: function (component, event, helper) {
        const tab = event.getParam('id');
        console.log('selected tab', tab);
        component.set('v.activeTab', tab);
        helper.loadRecords(component);
    },

    createRecord: function (component, event, helper) {
        var createRecordEvent = $A.get('e.force:createRecord');
        createRecordEvent.setParams({
            entityApiName: 'Application__c'
        });
        createRecordEvent.fire();
    }
});