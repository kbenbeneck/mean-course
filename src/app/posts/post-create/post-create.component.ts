import { Component } from "@angular/core";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'

})
export class PostCreateComponent {
  // property - var in a class
  enteredValue = '';
  newPost = 'NO CONTENT';
  // method func in class. use 'on' for event.
  onAddPost() {
    this.newPost = this.enteredValue;
  }
}
