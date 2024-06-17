import { ApplicationConfig } from "@angular/core";
import { provideClientHydration } from "@angular/platform-browser";
import { provideState, provideStore } from "@ngrx/store";
import { counterReducer } from "./state/counter/counter.reducer";


export const appConfig :ApplicationConfig ={
    providers:[provideClientHydration(),provideStore(),
        provideState({name:'counter',reducer:counterReducer})

    ]
}