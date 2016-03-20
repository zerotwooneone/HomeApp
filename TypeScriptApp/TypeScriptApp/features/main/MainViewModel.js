var TypeScriptApp;
(function (TypeScriptApp) {
    var Features;
    (function (Features) {
        var Main;
        (function (Main) {
            var MainViewModel = (function () {
                function MainViewModel() {
                    this.Test = "test1";
                }
                return MainViewModel;
            }());
            Main.MainViewModel = MainViewModel;
            TypeScriptApp.addController("MainViewModel", MainViewModel);
        })(Main = Features.Main || (Features.Main = {}));
    })(Features = TypeScriptApp.Features || (TypeScriptApp.Features = {}));
})(TypeScriptApp || (TypeScriptApp = {}));
//# sourceMappingURL=MainViewModel.js.map