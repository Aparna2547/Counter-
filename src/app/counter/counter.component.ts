import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { AppState } from '../state/app.state';
import { selectCount } from '../state/counter/counter.selector';
import { decrement, increment, reset } from '../state/counter/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
count$:Observable<number>;

constructor(private store:Store<AppState>){
  this.count$ =this.store.select(selectCount)
}

increment(){
  this.store.dispatch(increment())
}
decrement(){
  this.store.dispatch(decrement())
}
reset(){
  this.store.dispatch(reset())
}
}
