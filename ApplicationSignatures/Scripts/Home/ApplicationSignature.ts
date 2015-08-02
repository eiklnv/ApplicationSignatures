﻿/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />

class ApplicationSignature {
    // Model Vars
    Name: KnockoutObservable<string>;
    Id: KnockoutObservable<number>;
    Category: KnockoutObservable<string>;
    Technology: KnockoutObservableArray<string>;
    Popularity: KnockoutObservable<number>;
    Risk: KnockoutObservable<number>;
    Released: KnockoutObservable<string>;
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

    // Client Side Controls

    constructor(signature) {
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
    }

}