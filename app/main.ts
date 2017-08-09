import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";

platformNativeScriptDynamic().bootstrapModule(AppModule)
	.then(res=>{console.info('[BOOTSTRAP] success',res)})
	.catch(err=>{console.warn('[BOOTSTRAP] error',err)});
