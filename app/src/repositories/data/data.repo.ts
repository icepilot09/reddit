import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import RedditService from '../../services/reddit/reddit.svc'

export default class DataRepository extends BaseRepository {
    constructor(private redditSvc: RedditService){
        super();
    };
    
    posts: Array<any> = [];
    getPosts(): async.IThenable<Array<models.IPost>>{
        return this.redditSvc.getPosts().then((results)=>{
            results.forEach((result) => {
                this.posts.push(result);
            });
            return this.posts
        });
    };
}


register.injectable('data-repo', DataRepository, [RedditService]);
