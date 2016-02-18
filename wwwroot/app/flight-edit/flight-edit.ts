import {Component } from 'angular2/core';
import {RouteParams, OnActivate, OnDeactivate, CanActivate, CanDeactivate, ComponentInstruction } from 'angular2/router';

@Component({
    templateUrl: 'app/flight-edit/flight-edit.html'
})
@CanActivate((next, prev) => {
    console.debug("CanActivate");
    return true;
})
export class FlightEdit implements OnActivate, OnDeactivate, CanDeactivate {

    private id: number;
    private exitWarning = {
        show: false,
        resolve: null
    };

    constructor(params: RouteParams) {
        this.id = parseInt(params.get('id'));
    }

    routerCanDeactivate(next, prev) {

        this.exitWarning.show = true;

        return new Promise((resolve) => {
            this.exitWarning.resolve = resolve;
        }).then((decision) => {
            this.exitWarning.show = false;
            return decision;
        });
    }



    routerOnActivate(next, prev) {
        console.debug("routerOnActivate");
    }

    routerOnDeactivate(next, prev) {
        console.debug("routerOnDeactivate");
    }



    info = "flight-edit";

}