import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'unittest';

  voteCount = 0;
  voteIncrement(v:number){
    this.voteCount = this.voteCount + v;
  }
}
