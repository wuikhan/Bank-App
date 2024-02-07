public class SalesforceConnect {
    @AuraEnabled(cacheable=true)
    public static String getCreditScores() {
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(
            'callout:sfdc/services/apexrest/CreditScore'
        );
        request.setMethod('GET');
        // request.setMethod('GET');
        // request.setHeader(
        //   'Authorization',
        //   'Bearer !AQEAQLemdL3YhJcxp3YpcXBr9ZlQO4swnmR8OowwcS5GRtgBMHseabI6eZPbrguvVQAg3lmSYfuNZd8088sJdZ8K3ZHTtppe'
        // );
        HttpResponse response = http.send(request);
        if (response.getStatusCode() == 200) {
            //System.debug(response.getBody());
            return response.getBody();
        }
        return '';
    }

    @AuraEnabled(cacheable=true)
    public static String getCreditScoreBySSN(Integer ssn){
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(
            'callout:sfdc/services/apexrest/CreditScore/SearchBySSN/'+ssn
        );
        request.setMethod('GET');
        HttpResponse response = http.send(request);
    
        if (response.getStatusCode() == 200) {
            return response.getBody();
        }
        return '';
    }
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        return [SELECT Id, Name, Type FROM Account];
    }
}