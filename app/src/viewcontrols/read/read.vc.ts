import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class ReadViewControl extends BaseViewControl {
    templateString: string = require('./read.vc.html');

    context: any = {};
}

register.viewControl('read-vc', ReadViewControl);
