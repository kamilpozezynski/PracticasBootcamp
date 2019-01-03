import { Component, OnInit } from '@angular/core';
import { SeriesService } from './series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

peliculas: any = [];
  constructor( private _moviesService: SeriesService
                ) {
                  this._moviesService.getMovies().subscribe(datos => {
                    this.peliculas = datos['results'];
                  });
  }

  ngOnInit() {

  }
  }