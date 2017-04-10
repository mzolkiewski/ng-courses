import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ICourse } from '../shared/course.entity';

@Component({
  selector: 'c-course-edit',
  styleUrls: [ './course-edit.component.scss' ],
  templateUrl: './course-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseEditComponent implements OnInit, OnDestroy {
  public courseId: number;
  private _subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    this._subscriptions.push(
      this.route.params.subscribe((params) => {
        this.courseId = params.id == null ? null : +params.id;
      })
    );
  }

  public ngOnDestroy(): void {
    this._subscriptions.forEach((s) => s.unsubscribe());
  }

  public save(): void {
    console.log('save: implement me!');
  }

  public cancel(): void {
    console.log('cancel: implement me!');
  }

}
