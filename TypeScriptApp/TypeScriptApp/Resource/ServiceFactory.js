var TypeScriptApp;
(function (TypeScriptApp) {
    var Resource;
    (function (Resource) {
        function addResourceService(name, url, paramDefaults, 
            /** example:  {update: { method: 'PUT' }, delete: deleteDescriptor }
             where deleteDescriptor : IActionDescriptor */
            actions, options) {
            var resourceConstructor = function ($resource) {
                paramDefaults = paramDefaults ? paramDefaults : {};
                paramDefaults.port = "3000";
                return $resource(url, paramDefaults, actions, options);
            };
            resourceConstructor.$inject = ["$resource"];
            TypeScriptApp.addService(name, resourceConstructor);
        }
        Resource.addResourceService = addResourceService;
    })(Resource = TypeScriptApp.Resource || (TypeScriptApp.Resource = {}));
})(TypeScriptApp || (TypeScriptApp = {}));
//# sourceMappingURL=ServiceFactory.js.map