import { DisplayMode } from '../types/DisplayModes';
import { ObserverCallback } from '../types/ObserverCallback';

class ModeSubject {
    private observers : ObserverCallback [] = [];
    
    constructor() {
        console.log("observer");
    }

    subscribe(observer: ObserverCallback) {
        this.observers.push(observer);
    }

    unsubscribe(observer: ObserverCallback) {
        this.observers.filter((f) => f !== observer);
    }

    notify(state: DisplayMode) {
        console.log(this.observers);
        this.observers.forEach((observer) => {
            observer(state);
        });
    }
}

const modeSubject = new ModeSubject();

export default modeSubject;