import { Component } from '@angular/core';

@Component({
    selector: 'newapp',
    template: 
    `<ul>
        <li *ngFor="let q of questions">
        <div class='question'>
        <b>Question:</b> 
        {{ q.question }}
        </div>
        <div class='answer'>
        <b>Answer:</b> 
        {{ q.answer }}
        </div>
        </li>
    <ul>`

//     `<div> <h1> AppBakerzz Student Form </h1> 
//                 <label><strong> Name: </strong></label>
//                 <input [(ngModel)] ="app.name" placeholder="name"> 
//                 <label><strong> Cast: </strong></label>
//                 <input [(ngModel)] ="app.cast" placeholder="cast"> 
//                 <label><strong>  CNIC: </strong></label>
//                 <input [(ngModel)] ="app.cnic" placeholder="cnic">  
//                 </div>`,
//                  styles: [
//                 'h1 {color: green}',
//                 'label {color: blue}',
//   ] 
})
export class app{
  
    questions: Object[] //Array<Object> ;
  
    constructor(){
    this.questions = [{
      question: 'Your favourite color?',
      answer: 'Blue'
    },
    {
      question: 'Mother language',
      answer: 'Angular'
    },{
      question: 'Your nature ',
      answer: 'Programing born to death'
    }];
  }
   
}

    






