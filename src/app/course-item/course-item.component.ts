import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { ICourse } from './../entities/course';

@Component({
  selector: 'c-course-item',
  styleUrls: [ './course-item.component.scss' ],
  templateUrl: './course-item.component.html'
})
export class CourseItemComponent {
  @Input() public course: ICourse;
  @Output() public deleteCourse = new EventEmitter<number>();

  public onDelete(): void {
    this.deleteCourse.emit(this.course.id);
  }
}
