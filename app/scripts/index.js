var $ = require('jquery');
var models = require('./models');
var views = require('./views');

$(function(){
  var view = new views.PostView();

  $(document).on('posts:fetched', function(event, posts){
    view.showPosts(posts);
  });

  models.Post.fetch();
});
