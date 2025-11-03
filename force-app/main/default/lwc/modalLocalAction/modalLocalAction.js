import { api, LightningElement } from 'lwc';
import ModalDemo from 'c/modalDemo';

export default class ModalLocalAction extends LightningElement {
    @api title;
    @api size;
    @api content;

    @api async invoke() {
        const result=await ModalDemo.open({
            size: this.size,
            title: this.title,
            content: this.content
        });
        console.log(result);
    }
}
