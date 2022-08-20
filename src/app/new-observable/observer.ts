
import { Observer } from "rxjs";

export class Observer4 implements Observer<number>{
next(value: number)  {console.log('Observer 4 ' + value)}
error(error: string) {console.log('Observer 4 Error' + error) }
complete(){console.log('Observer 4 complete');
} ;


  
}