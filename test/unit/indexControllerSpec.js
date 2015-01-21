describe('githubList', function () {
    describe('IndexController', function () {

        var controller, scope;

        beforeEach(module('testApp'));

        beforeEach(inject(function ($controller, $rootScope) {

            scope = $rootScope.$new();
            controller = $controller('IndexCtrl', {
                $scope: scope
            });
        }));

        it('should have undefined githubList scope variable', function () {

            expect(controller.githubList).not.toBeDefined();
        });

        it('should return correct response for success case of IndexController.getList() method', function () {

            // $httpBackend
        });
    })
});