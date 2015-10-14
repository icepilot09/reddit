import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import DataRepository from '../../repositories/data/data.repo'
import ReadViewControl from '../../viewcontrols/read/read.vc'

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    constructor(private dataRepo: DataRepository) {
        super();
    };

    navigatedTo(): void {
        this.dataRepo.getPosts().then((posts) => {
            this.context.posts = posts;
        });
    };

    context: any = {
        posts: []
    };

    showDetail(postId: string): void {
        this.navigator.navigate('read-vc');
        parameters: {
            id: postId;
        };
    };
};

register.viewControl('home-vc', HomeViewControl, [DataRepository]);
