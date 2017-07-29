import { Component, OnInit, OnDestroy } from '@angular/core';
import {AlbumService} from "../../../shared/services/album.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit, OnDestroy {

  private getCollectionSubscription: Subscription = null;

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    let id: number = 1;

    this.getCollectionSubscription = this.albumService.getCollection(id).subscribe(
        val => console.log(val),
        error => console.log(error),
        () => console.log('finish')
    );
  }

  ngOnDestroy(){
    if(this.getCollectionSubscription != null){
      this.getCollectionSubscription.unsubscribe();
    }
  }
}
