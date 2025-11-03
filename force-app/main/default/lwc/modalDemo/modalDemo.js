import { api } from 'lwc';
import LightningModal from 'lightning/modal';

export default class ModalDemo extends LightningModal {
    @api content;
    @api title;
}