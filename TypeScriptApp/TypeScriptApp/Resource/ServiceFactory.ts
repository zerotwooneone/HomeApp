module TypeScriptApp.Resource {
    export function addResourceService(name: string, url: string, paramDefaults?: any,
        /** example:  {update: { method: 'PUT' }, delete: deleteDescriptor }
         where deleteDescriptor : IActionDescriptor */
        actions?: any, options?: angular.resource.IResourceOptions) {
        var resourceConstructor = function($resource: angular.resource.IResourceService): angular.resource.IResourceClass<angular.resource.IResource<any>> {
            paramDefaults = paramDefaults ? paramDefaults : {};
            paramDefaults.port = "3000";
            return $resource(url, paramDefaults, actions, options);
        };
        resourceConstructor.$inject = ["$resource"];
        TypeScriptApp.addService(name, resourceConstructor);
    }
}