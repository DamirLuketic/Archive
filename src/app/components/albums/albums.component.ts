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

  private allAlbumSubscription: Subscription = null;

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    if(this.allAlbums == null){
        if(this.albumService.allAlbums == null){
            this.allAlbumSubscription = this.albumService.getAllAlbums().subscribe(
                (data) => {
                  this.albumService.allAlbums = data,
                      this.allAlbums = data
                }
            );
        }
    }
  }

  ngOnDestroy(){
    if(this.allAlbumSubscription != null){
      this.allAlbumSubscription.unsubscribe();
    }
  }

}
