import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

import { InputFormsInterface } from 'src/app/data/InputForms';

@Component({
    selector: 'app-input-definer',
    templateUrl: './input-definer.component.html',
    styleUrls: ['./Input-definer.component.scss'],
})
export class InputDefinerComponent implements OnInit {
    @Input() data: InputFormsInterface = {
        labelName: 'empty',
        type: 'text',
        placeholder: 'emptyField',
        required: false,
    };

    inputType = 'text';

    constructor(private cd: ChangeDetectorRef) {}

    changeType(): void {
        this.inputType = this.inputType == 'text' ? 'password' : 'text';
        this.cd.detectChanges();
    }

    ngOnInit(): void {
        this.inputType =
            this.data.type === 'password' ? 'password' : this.data.type;
    }
}
