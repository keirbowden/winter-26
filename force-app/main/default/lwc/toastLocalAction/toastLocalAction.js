import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ToastLocalAction extends LightningElement {
   @api title;
   @api message;
   @api variant;

   @api invoke() {
       this.dispatchEvent(new ShowToastEvent({
           title: this.title,
           message: this.message,
           variant: this.variant
       }));
   }
}