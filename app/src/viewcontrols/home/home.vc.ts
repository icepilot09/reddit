import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import DataRepository from '../../repositories/data/data.repo'

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');
    
    constructor(private dataRepo: DataRepository) {
        super();
    }
    
    navigatedTo(): void {
        this.dataRepo.getPosts().then((posts) => {
            this.context.posts = posts;
        });
    }

    context: any = {
    posts: [] 
    };
    
}

register.viewControl('home-vc', HomeViewControl, [DataRepository]);
