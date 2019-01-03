import {email} from "./email.js";
import {fixtures} from "./fixtures.js";
 for (let fixture of fixtures){
        var email = new email(fixture.from,fixture.subject,fixture.content,fixture.date);
        

 }