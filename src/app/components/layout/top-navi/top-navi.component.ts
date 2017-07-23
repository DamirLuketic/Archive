import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-top-navi',
  templateUrl: './top-navi.component.html',
  styleUrls: ['./top-navi.component.css']
})
export class TopNaviComponent implements OnInit {


    @ViewChild('topSign')
    'topSignElement': HTMLElement;

    private color: string;


      constructor() { }

      ngOnInit() {
          console.log(this.topSignElement);
      }

    openTab(value){

        switch(value){
            case 1:
                this.color = 'red';
                break;
            case 2:
                this.color = 'green';
                break;
            case 3:
                this.color = 'blue';
                break;
            case 4:
                this.color = 'orange';
                break;
            default:
                this.color = 'red';
        }

    }
}
