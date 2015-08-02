/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />
var ApplicationSignature = (function () {
    // Client Side Controls
    function ApplicationSignature(signature) {
        var self = this;
        // Model Variables
        self.Name = ko.observable(signature.Name);
        self.Id = ko.observable(signature.Id);
        self.Category = ko.observable(signature.Category);
        self.Technology = ko.observableArray([]);
        if (signature.Technology) {
            signature.Technology.forEach(function (technology) {
                self.Technology.push(technology);
            });
        }
        self.Popularity = ko.observable(signature.Popularity);
        self.Risk = ko.observable(signature.Risk);
        self.Released = ko.observable(signature.Released);
        self.Vendor = ko.observable(signature.Vendor);
        self.Url = ko.observable(signature.Url);
        self.References = ko.observableArray([]);
        if (signature.References) {
            signature.References.forEach(function (reference) {
                self.References.push(reference);
            });
        }
        self.Impact = ko.observable(signature.Impact);
        self.Summary = ko.observable(signature.Summary);
        self.Affected = ko.observable(signature.Affected);
        self.Action = ko.observable(signature.Action);
        self.Coverage = ko.observable(signature.Coverage);
        self.PopularityScore = ko.observable(signature.PopularityScore);
        self.Language = ko.observable(signature.Language);
        self.DeepAppCtrl = ko.observable(signature.DeepAppCtrl);
    }
    return ApplicationSignature;
})();
//# sourceMappingURL=ApplicationSignature.js.map