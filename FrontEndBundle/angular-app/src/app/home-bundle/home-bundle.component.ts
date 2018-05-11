import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home-bundle',
  templateUrl: './home-bundle.component.html',
  styleUrls: ['./home-bundle.component.css']
})
export class HomeBundleComponent implements OnInit {
    private shipmentsTable: any;
    private tableWidget: any;
    @Input() shipments: [{"atul","1","2"},{"atul","2","3"}];
    // Event Emitter for when the user selects a row
    @Output() shipmentSelected: EventEmitter<Shipment> = new EventEmitter();
    constructor(
        private el: ElementRef // You need this in order to be able to "grab" the table element form the DOM
    ) { }

    public ngOnInit() {
        this.loadShipments();
    }
    public loadShipments(): void {
        if ( this.tableWidget ) {
            this.tableWidget.destroy(); // essentially refreshes the table
            // you can also remove all rows and add new
            // this.tableWidget.clear().rows.add(this.shipments).draw();
        }
        let tableOptions: any = {
            data: this.shipments,
            dom: 'rt',
            select: true,
            columns: [
                { title: 'Content', data: 'content' },
                { title: 'Packages', data: 'packages' },
                { title: 'Weight', data: 'weight' }
            ]
        }
        this.shipmentsTable = $( this.el.nativeElement.querySelector( 'table' ) );
        this.tableWidget = this.shipmentsTable.DataTable( tableOptions );
        this.tableWidget.on( 'select', ( e, dt, type, indexes ) => {
            // I DIDN'T TRY THIS IN HERE...Just debug it and check the best way to emit an actual object
            this.shipmentSelected.emit( this.shipments[indexes[0]] );
        } );
    }
}