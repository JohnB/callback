
var queryLimit = 20;

Template.callbacks.callback_count = function () {
  return queryLimit; // Requests.find({}).length();
};
Template.callbacks.callbacks = function () {
  return Requests.find({}, {sort: {time: "desc"}, limit: queryLimit});
  //return Requests.find({});
};
