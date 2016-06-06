angular.module('app').directive('profilePic', function(){
  return {
    restrict: 'A',
    link: function(scope, element, attrs){
      // var image = element.children()[0];
      element.on('mouseenter', function(){
        scope.$apply(function(){
          element.css('opacity', '0.4');
        })
      })
      element.on('mouseleave', function(){
        scope.$apply(function(){
          element.css('opacity', '1');
        })
      })
    }
  }
})
