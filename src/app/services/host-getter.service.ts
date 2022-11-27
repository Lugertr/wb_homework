import {DOCUMENT} from '@angular/common';
import {inject} from '@angular/core';

export class hostGetter {

    private host:Window

    constructor() {
        const {defaultView} = inject(DOCUMENT)
        if (!defaultView)
            throw new Error('Window is not available');
        this.host = defaultView;
    }

    getHost():Window{
        return this.host
    } 
}
