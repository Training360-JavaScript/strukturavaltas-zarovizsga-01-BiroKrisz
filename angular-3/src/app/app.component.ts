import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Construction } from './model/construction';
import { ConstructionService } from './service/construction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-3';

  list$: Observable<Construction[]> = this.cService.getAll();

  constructor(
    private cService: ConstructionService,
  ) { }

  onDelete(con: Construction): void {
    this.cService.delete(con.id).subscribe(
      con => console.log(con)
    )
  }
}
