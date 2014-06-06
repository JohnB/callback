Requests = new Meteor.Collection("requests");

Router.map(function() {
  this.route('callbacks', {
    path: '/*',
    onBeforeAction: function() {
      var dd = function(d) {
        if (d < 10) {
          return "0"+d;
        } else {
          return d;
        }
      };
      var currentdate = new Date();
      var datetime = "" + currentdate.getFullYear() + "/"
                  + (dd(currentdate.getMonth()+1)) + "/"
                  + dd(currentdate.getDate())
                  + " "
                  + dd(currentdate.getHours()) + ":"
                  + dd(currentdate.getMinutes()) + ":"
                  + dd(currentdate.getSeconds());
      Requests.insert({url: document.location.href, time: datetime});
    }
  });
});

//
// NO PUBLISH/SUBSCRIBE NEEDED - WE ARE IN AUTOPUBLISH MODE
// Uncomment this and get an error that says:
//    "meteor remove autopublish" will fix this error
//
// Meteor.publish("recent_requests", function() {
//   return Requests.find({});
// });
//
// Deps.autorun(function () {
//   Meteor.subscribe("recent_requests");
// });
