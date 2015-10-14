import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class RedditService extends BaseService {
    getPosts(): async.IThenable<Array<models.IPost>> {
        return this.http.json<Array<any>>({
            method: 'GET',
            url: this.host
        }).then((success) => {
            var res: any = success;
            return <Array<models.IPost>>res.response.data.children;
        });
        // var getReddit = function(id){
        //     var getPosts.filter(function(item){
        //         if (item.id === id) return true;
        //     });
        //     return getPosts;
        // }
    }
    //     getPost(post: any): async.IThenable<Array<models.IPost>> {
    //     return this.http.json<Array<any>>({
    //         method: 'GET',
    //         url: this.host
    //     }).then((success) => {
    //         var res: any = success;
    //         return <Array<models.IPost>>res.response.data.children;
    //     });
    // }

    
}
register.injectable('reddit-svc', RedditService);
