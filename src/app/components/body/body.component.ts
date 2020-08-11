import {Component} from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {

mostrar = true;

frase: any = {
    mensaje: 'Un gran poder require una gran responsabilidad',
    autor: 'Manue Prado'
};

personajes: string[] = ['Manuel', 'Alejo', 'Jose'];


}
