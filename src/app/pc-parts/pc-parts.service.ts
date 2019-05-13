import { EventEmitter } from '@angular/core';
import { Part } from '../shared/part.model';

export class PcPartsService {
    partsChanged = new EventEmitter<Part[]>()
    private parts: Part[] = [
        new Part('GTX 1050 Ti',320),
        new Part('AMD Ryzen 5',210) ]

    getParts() {
        // return copy of parts
        return this.parts.slice();
    }

    addPart(part: Part) {
        this.parts.push(part);
        this.partsChanged.emit(this.parts.slice());
    }
}