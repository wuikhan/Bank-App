public with sharing class ApplicationController {

    @AuraEnabled
    public static Map<String, Integer> getApplicationStatusCount(){
        Map<String, Integer> applicationStatusCount = new Map<String, Integer>();
        for(AggregateResult ar : [SELECT count(Id) total , Status__c FROM Application__c GROUP By Status__c]){
            String applicationStatus = String.valueOf(ar.get('Status__c'));
            Integer count = Integer.valueOf(ar.get('total'));
            applicationStatusCount.put(applicationStatus, count);
        }
        return applicationStatusCount;
    }

    @AuraEnabled
public static List<Application__c> getApplications(String status){
    return [SELECT Id, Name, First_Name__c, Last_Name__c, Loan_Amount__c, Status__c FROM Application__c WHERE Status__c = :status];
}

}