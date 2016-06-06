angular.module('app').directive('searchBar', function(){
  return {
    restrict: 'E',
    templateUrl: "../../views/dropdownsearch.html",
    link: function(scope, element, attrs){
      element.css({
        'display': 'inline-clock',
        'position': 'relative',
        'margin-right': '30px'
      });
      // element.find('.dropdown-content2').eq(0).css({
        // 'display': 'none'
      //   // 'position': 'absolute',
      //   'background-color': '#f9f9f9',
      //   // 'width': '20vw',
      //   // 'box-shadow': '0px 8px 16px 0px rgba(0,0,0,0.2)',
      //   'padding': '12px 16px',
      //   'z-index': '1',
      //   // 'margin-left': '-200px'
      // })
      element.on('mouseover', function(){
        scope.$apply(function(){
          element.find('.dropdown-content2').css('display', 'block')
        })
      })
      element.on('mouseleave', function(){
        scope.$apply(function(){
          element.find('p').css('display', 'none')
        })
      })
    }
  }
})
