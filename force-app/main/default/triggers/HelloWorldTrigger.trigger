trigger HelloWorldTrigger on Book__c (before insert) {
   Book__c[] books = Trigger.new;
   MyClass.applyDiscount(books);
}