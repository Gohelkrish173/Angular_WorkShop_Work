import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
})
export class StudentComponent {
    Name = "Krish Gohel";
    Im = "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80";
    WidthInPixel = 400;
    
    incWidth(){
      this.WidthInPixel++;
    }
    
    doSomething(e:any){

    };
}
