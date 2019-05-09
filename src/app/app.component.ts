import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedArgument: string = 'bench';

  onNavigate(argument: string) {
    this.loadedArgument = argument;
  }

}
