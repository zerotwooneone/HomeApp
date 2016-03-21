
module TypeScriptApp.Features.Main {
    export class MainViewModel {
        public Test: string;

        static $inject = ["TestResource"];
        constructor(TestResource: angular.resource.IResourceClass<angular.resource.IResource<any>>) {
            this.Test = "test1";
            var x = TestResource.get();
        }
    }

    TypeScriptApp.addController("MainViewModel", MainViewModel);
}