import { Component, OnInit } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { CategoryService } from '../../services/category.service';
import { Observable } from "rxjs";
import { map, takeWhile, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private observableMedia: ObservableMedia,
    private categoryService: CategoryService) { }

  categories: any;
  cols: Observable<number>;
  rowHeight: Observable<string>;

  ngOnInit() {
    this.categoryService.findAll().subscribe(resp => {
      this.categories = resp;
      console.log("categories is: " + this.categories);
    });

    const gridColsMap = new Map([
      ["xs", 2],
      ["sm", 2],
      ["md", 3],
      ["lg", 4],
      ["xl", 4]
    ]);

    // unit is 'em'
    const gridRowHeightMap = new Map([
      ["xs", "6em"],
      ["sm", "6em"],
      ["md", "8em"],
      ["lg", "9em"],
      ["xl", "10em"]
    ]);
    
    let startCols: number;
    gridColsMap.forEach((cols, mqAlias) => {
      if (this.observableMedia.isActive(mqAlias)) {
        startCols = cols;
      }
    });
    this.cols = this.observableMedia.asObservable()
      .pipe(
        map(change => {
          return gridColsMap.get(change.mqAlias);
        }),
        startWith(startCols)
      );

    let startRowHeight: string;
    gridRowHeightMap.forEach((rowHeight, mqAlias) => {
      if (this.observableMedia.isActive(mqAlias)) {
        startRowHeight = rowHeight;
      }
    });  
    this.rowHeight = this.observableMedia.asObservable()
    .pipe(
      map(change => {
        return gridRowHeightMap.get(change.mqAlias);
      }),
      startWith(startRowHeight)
    );
  }

}
