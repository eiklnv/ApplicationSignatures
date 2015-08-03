/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />
/// <reference path="../typings/moment/moment.d.ts" />

class ApplicationSignature {
    // Model Vars
    Name: KnockoutObservable<string>;
    Id: KnockoutObservable<number>;
    Category: KnockoutObservable<string>;
    Technology: KnockoutObservableArray<string>;
    Popularity: KnockoutObservable<number>;
    Risk: KnockoutObservable<number>;
    Released: KnockoutObservable<string>;
    ReleasedDisplay: KnockoutComputed<string>;
    Vendor: KnockoutObservable<string>;
    Url: KnockoutObservable<string>;
    References: KnockoutObservableArray<string>;
    Impact: KnockoutObservable<string>;
    Summary: KnockoutObservable<string>;
    Affected: KnockoutObservable<string>;
    Action: KnockoutObservable<string>;
    Coverage: KnockoutObservable<string>
    PopularityScore: KnockoutObservable<number>;
    Language: KnockoutObservable<string>;
    DeepAppCtrl: KnockoutObservable<number>;
    DeepAppCtrlDisplay: KnockoutComputed<string>;

    // Client Side Controls
    IsVisible: KnockoutComputed<boolean>;


    constructor(signature, parent) {
        var self: ApplicationSignature = this;

        // Model Variables
        self.Name = ko.observable<string>(signature.Name);
        self.Id = ko.observable<number>(signature.Id);
        self.Category = ko.observable<string>(signature.Category);
        self.Technology = ko.observableArray<string>([]);
        if (signature.Technology) {
            signature.Technology.forEach(function (technology) {
                self.Technology.push(technology);
            });
        }
        self.Popularity = ko.observable<number>(signature.Popularity);
        self.Risk = ko.observable<number>(signature.Risk);
        self.Released = ko.observable<string>(signature.Released);
        self.ReleasedDisplay = ko.computed<string>(function () {
            return moment(self.Released()).format('YYYY-MM-DD');
        });
        self.Vendor = ko.observable<string>(signature.Vendor);
        self.Url = ko.observable<string>(signature.Url);
        self.References = ko.observableArray<string>([]);
        if (signature.References) {
            signature.References.forEach(function (reference) {
                self.References.push(reference);
            });
        }
        self.Impact = ko.observable<string>(signature.Impact);
        self.Summary = ko.observable<string>(signature.Summary);
        self.Affected = ko.observable<string>(signature.Affected);
        self.Action = ko.observable<string>(signature.Action);
        self.Coverage = ko.observable<string>(signature.Coverage);
        self.PopularityScore = ko.observable<number>(signature.PopularityScore);
        self.Language = ko.observable<string>(signature.Language);
        self.DeepAppCtrl = ko.observable<number>(signature.DeepAppCtrl);
        self.DeepAppCtrlDisplay = ko.computed<string>(function () {
            return self.DeepAppCtrl() > 0 ? "Yes" : "No";
        });

        // Client Side Controls
        self.IsVisible = ko.computed<boolean>(function () {
            return self.Name().toLowerCase().indexOf(parent.Filter().toLowerCase()) >= 0 &&
                parent.IsCategoryVisible(self.Category()) &&
                parent.IsTechnologyVisible(self.Technology()[0]) &&
                parent.IsPopularityVisible(self.Popularity()) &&
                parent.IsRiskVisible(self.Risk());
        });
    }

}
