public with sharing class AnimalApiController {
 

    public static void getAnimal(){
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://th-apex-http-callout.herokuapp.com/animals');
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        System.debug('response'+response);
        if(response.getStatusCode() == 200){
            System.debug('response'+response.getBody());
        }
    }
}