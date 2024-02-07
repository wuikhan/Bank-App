public class MyClass {
    public static void applyDiscount(Book__c[] books) {
        for (Book__c b :books){
            //b.Price__c *= 0.9;
            b.Discounted_Price__c = b.Price__c * 0.9;
        }
    }
    
}