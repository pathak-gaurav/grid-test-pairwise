import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
  ];

  changeValue(item: any, id: number, j: number, event: any) {
    //  this.data[item][id] = event.target.textContent;
    // This removes the white space from  the table
    this.data[j][id] = event.target.textContent.replace(/\s/g, '');
    console.log('====>', j);
    console.log('====>', id, item);
    console.log('====>', this.data);
  }
}
