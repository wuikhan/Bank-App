({
    fetchApplicationStatusCount: function (component) {
        let action = component.get('c.getApplicationStatusCount');
        action.setCallback(this, function (response) {
            const state = response.getState();
            if (state === 'SUCCESS') {
                component.set('v.count', response.getReturnValue());
                console.log('count :', response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
});