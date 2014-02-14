angular.module('johnsMusicPage')
    .directive('menuItem', [
        '$location',
        function ($location) {

            var isActive = function (path, hrefs) {
                return _.some(hrefs, function (h) {
                    return path == h.slice(1);
                });;
            }

            return {
                transclude: true,
                replace: true,
                restrict: 'E',
                templateUrl: 'views/templates/menuItem.html',
                scope: {
                    href: "@",
                    text: "@",
                    isDropdown: "=dropdown",
                    icon: "@"
                },
                controller: function ($scope, $element, $attrs, $transclude) {

                    if ($scope.isDropdown){
                        $scope.listItems = [];
                    }
                    
                    this.addListItem = function (item) {
                        if (!$scope.isDropdown) {
                            throw new Error("Cannot add list item to non dropdown menu item.");   
                        }
                        
                        $scope.listItems.push(item);
                    };
                    
                    var getHrefs = function () {
                        if (!$scope.isDropdown) {
                            return [ $scope.href ];   
                        }
                        
                        return _.map($scope.listItems, function (item) {
                            return item.href; 
                        });
                    }
                    
                    $scope.$on('$routeChangeSuccess', function (event, next, current) {
                        $scope.isActive = isActive(next.$$route.originalPath, getHrefs());
                    });

                    $scope.isActive = isActive($location.path(), getHrefs());
                }
            };
    }]);