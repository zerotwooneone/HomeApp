
module TypeScriptApp.Features.Main {
    export class MainViewModel {
        public Test: string;
        public Response: string;

        static $inject = ["TestResource"];
        constructor(TestResource: angular.resource.IResourceClass<any>) {
            this.Test = "test1";
            this.Response = TestResource.get((r) => {
                 return console.log(r);
            });
        }
    }

    TypeScriptApp.addController("MainViewModel", MainViewModel);
}