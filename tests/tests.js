var chai = require('chai');
var expect = chai.expect;

var PostView = require('../app/scripts/views').PostView;
var Post = require('../app/scripts/models').Post;

// ################################################
// Model Tests
// ################################################
describe('Post', function(){
  describe('fetch', function(){
    it('should return a promise', function(){
      var promise = Post.fetch();
      expect(promise).to.respondTo('then');
    });

    it('should resolve with an array of posts', function(done){
      Post.fetch().then(function(posts){
        console.log(posts);
        var firstPost = posts[0];
        expect(firstPost).to.have.property('title');
        expect(firstPost).to.have.property('body');
        expect(firstPost).to.have.property('_id');

        done();
      });
    });
  });
});
