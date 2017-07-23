import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RootService } from "./root.service";

@Injectable()
export class AlbumService {

  public allAlbums = null;

  constructor(private http: HttpClient, private root: RootService) { }

  getAllAlbums(){
    return this.http.get(this.root.apiRoute + 'albums_list')
  }
}
