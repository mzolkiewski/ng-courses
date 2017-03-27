import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'c-toolbar',
  styleUrls: [ './toolbar.component.scss' ],
  templateUrl: './toolbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent implements OnInit {
  public searchTerm: string;

  public ngOnInit() {
    console.log('ToolbarComponent init');
  }

  public search() {
    console.log(this.searchTerm);
  }
}