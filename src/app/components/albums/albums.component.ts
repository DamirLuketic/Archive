import { Component, OnInit, OnDestroy } from '@angular/core';
import {AlbumService} from "../../shared/services/album.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit, OnDestroy {

  public allAlbums = null;

  private allAlbumsSubscription: Subscription = null;

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    if(this.allAlbums == null){
        if(this.albumService.allAlbums == null){
            this.allAlbumsSubscription = this.albumService.getAllAlbums().subscribe(
                (data) => {
                  this.albumService.allAlbums = data,
                      this.allAlbums = data
                },
                error => console.log(error),
                () => console.log('response compleat')
            );
        }
    }
  }

  ngOnDestroy(){
    if(this.allAlbumsSubscription != null){
      this.allAlbumsSubscription.unsubscribe();
    }
  }

}
