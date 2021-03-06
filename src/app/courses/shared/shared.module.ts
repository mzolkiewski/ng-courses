import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { CoursesHelpersModule } from './course-helpers/course-helpers.module';
import { CoursesFormHelpersModule } from './form-helpers/form-helpers.module';

import { AuthorsService } from './authors.service';
import { CoursesService } from './courses.service';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  imports: [
    SharedModule.forStupidMdIconModule(),
  ],
  declarations: [
    OrderByPipe,
  ],
  providers: [
    AuthorsService,
    CoursesService,
  ],
  exports: [
    SharedModule,
    CoursesHelpersModule,
    CoursesFormHelpersModule,
    OrderByPipe,
  ],
})
export class CoursesSharedModule { }
