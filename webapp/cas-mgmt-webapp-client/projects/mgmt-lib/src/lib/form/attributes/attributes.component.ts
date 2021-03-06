import {Component, OnInit, Input} from '@angular/core';
import {DataRecord} from '../data';
import {MgmtFormControl} from '../mgmt-formcontrol';
import {FormArray, FormGroup} from '@angular/forms';

@Component({
  selector: 'lib-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.css']
})
export class AttributesComponent implements OnInit {

  @Input()
  control: FormGroup;

  @Input()
  keys: string[];

  selectedRow;

  @Input()
  arrayName: string;

  entries: FormArray;

  constructor(public data: DataRecord) {
  }

  ngOnInit() {
    this.entries = this.control.get(this.arrayName) as FormArray;
  }

  addRow() {
    this.entries.push(new FormGroup({
      key: new MgmtFormControl(null),
      value: new MgmtFormControl(null)
    }));
  }

  delete(row: number) {
    this.entries.removeAt(row);
    this.control.markAsTouched();
  }

}
