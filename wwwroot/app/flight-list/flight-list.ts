
import {Component, provide, Inject} from 'angular2/core';
import {IFlight} from '../flight';
import { FlightManager} from '../services/flight-manager';
import { ROUTER_DIRECTIVES} from 'angular2/router';

declare var fetch: any;
 
@Component({
    selector: 'flight-list', 
    templateUrl: 'app/flight-list/flight-list.html',
    directives: [ROUTER_DIRECTIVES]
})
export class FlightList {

    public from: string = "Graz";
    public to: string = "Hamburg";
    public selectedFlight: IFlight;

    constructor(private FlightManager: FlightManager) {
    }

    public suchen(): void {

        this.FlightManager
            .load(this.from, this.to);

    }

    // public fluege: Array<IFlight> = new Array<IFlight>();

    get flights(): Array<IFlight> {
        return this.FlightManager.fluege;
    }

    public selectFlight(flight: IFlight) {
        this.selectedFlight = flight;
    }

}