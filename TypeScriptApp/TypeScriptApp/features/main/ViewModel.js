"use strict";
var App = require("../../app");
var Features;
(function (Features) {
    var Main;
    (function (Main) {
        var ViewModel = (function () {
            function ViewModel() {
            }
            return ViewModel;
        }());
        Main.ViewModel = ViewModel;
        App.addController();
    })(Main = Features.Main || (Features.Main = {}));
})(Features || (Features = {}));
//# sourceMappingURL=ViewModel.js.map