
/* These are actually services */
var app = angular.module('InboxApp.models', []);

/* Using this strategy:
  http://stackoverflow.com/questions/13762228/confused-about-service-vs-factory
  */


/* Thread factory that provides a constructor so we can do something like:

var myThread = new Thread(some_thread_id, array_of_msg_ids);

This object type should only be accessible if it's injected. 

Still unknown: is every object created this way still a singleton?
They shouldn't be because the actual constructor is returning a new one. 

Probably calling Thread.whatever() will be a class function, whereas 
instance.whatever() will be one of the methods defined through prototype

 */



app.factory('IBThread', function ($injector) {

     function IBThreadObject($rootScope, data) {
        this.$rootScope = $rootScope;
        // TODO handle default values here or when data=none
        this.message_ids = data.message_ids;
        this.thread_id = data.thread_id;
        this.labels = data.labels;
    }

    IBThreadObject.prototype.printableDateString = function () {
        // take this.date and return something like
        // self.most_recent_date.strftime('%b %d, %Y &mdash; %I:%M %p'
          return "Foo date, 2013";

    };    
    
    return function(data) { 
      return $injector.instantiate(
        IBThreadObject, {data:data});
    };
});






app.factory('IBMessage', function ($injector) 
{
     function IBMessageObject($rootScope, data) {
        this.$rootScope = $rootScope;
        // Do handle data=none values
        this.message_id = data.message_id;
        this.thread_id = data.thread_id;
        this.to_contacts = data.to_contacts;
        this.from_contacts = data.from_contacts;
        this.subject = data.subject;
        this.date = data.date;
        this.body_text = data.body_text
    }

    IBMessageObject.prototype.gravatarURL = function () {
         return "https://www.gravatar.com/somethingcrazy./craycray/";
    };    
  
    return function(data) { 
      return $injector.instantiate(
        IBMessageObject, {data:data});
    };
});




app.factory('IBContact', function ($injector) {

    var IBObject = function($rootScope, data) {
        this.$rootScope = $rootScope;
        // Break serialized data out into object
        this.firstname = data.firstname;
        this.lastname = data.lastname;
        this.emai = data.email;
    };

    IBObject.prototype.gravatarURL = function (size) {
        // TODO pull this size into the css somewhere I think.
        size = typeof seize !== 'undefined' ? size : 25; // Default size.
        var gravatar_url = "http://www.gravatar.com/avatar/" + 
                        md5( this.email.toLowerCase() )+ "?" +
                        'd=mm&' +
                        's=' + encodeURIComponent(gravatar_size);
         return gravatar_url;
    };    
    return function(name) { 
      return $injector.instantiate(
        IBObject, { data: data });
    };
});





