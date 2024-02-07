({
    loadRecords: function (component) {
        let action = component.get('c.getApplications');
        console.log('action');
        const value = component.get('v.activeTab');
        console.log('Active Tab : ', value);
        action.setParams({
            status: value
        });
        action.setCallback(this, function (response) {
            const state = response.getState();
            if (state === 'SUCCESS') {
                component.set('v.data', response.getReturnValue());
                console.log('Data : ', response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
});