import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './star.component';
import { CovertToSpacesPipe } from './convert-to-spaces.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        StarComponent,
        CovertToSpacesPipe
    ],
    exports: [
        StarComponent,
        CovertToSpacesPipe,
        CommonModule,
        FormsModule
    ]
})
export class SharedModule {}