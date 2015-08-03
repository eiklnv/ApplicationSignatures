/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />
/// <reference path="../typings/moment/moment.d.ts" />
var ApplicationSignature = (function () {
    function ApplicationSignature(signature, parent) {
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
        self.ReleasedDisplay = ko.computed(function () {
            return moment(self.Released()).format('YYYY-MM-DD');
        });
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
        self.DeepAppCtrlDisplay = ko.computed(function () {
            return self.DeepAppCtrl() > 0 ? "Yes" : "No";
        });
        // Client Side Controls
        self.IsVisible = ko.computed(function () {
            return self.Name().toLowerCase().indexOf(parent.Filter().toLowerCase()) >= 0 &&
                parent.IsCategoryVisible(self.Category()) &&
                parent.IsTechnologyVisible(self.Technology()[0]) &&
                parent.IsPopularityVisible(self.Popularity()) &&
                parent.IsRiskVisible(self.Risk());
        });
    }
    return ApplicationSignature;
})();
//# sourceMappingURL=ApplicationSignature.js.map