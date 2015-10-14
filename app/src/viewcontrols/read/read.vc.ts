import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import HomeViewControl from '../../viewcontrols/home/home.vc';
import DataRepository from '../../repositories/data/data.repo';

export default class ReadViewControl extends BaseViewControl {
    templateString: string = require('./read.vc.html');

    constructor(private dataRepo: DataRepository) {
        super();
    };
    navigatedTo(params: {id: string;}): void{
        this.dataRepo.getPost(params.id).then(res => {
           console.log(res);
        });
    };

    context: any = {
        title: <string>'',
        author: <string>'',
        url: <string>'',
        id: <string>'',

    };

}

register.viewControl('read-vc', ReadViewControl, [DataRepository]);
