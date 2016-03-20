
module TypeScriptApp.Features.Main {
    export class MainViewModel {
        public Test: string;

        constructor() {
            this.Test = "test1";
        }
    }

    TypeScriptApp.addController("MainViewModel", MainViewModel);
}