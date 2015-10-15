import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import RedditService from '../../services/reddit/reddit.svc';

export default class DataRepository extends BaseRepository {
    
    private posts: Array<models.IPost> = [];
    
    constructor(private redditService: RedditService) {
        super();
    }
    
    getPosts(): async.IThenable<Array<models.IPost>> {
        if (this.posts.length === 0 ) {
            // Page was refreshed, first visit, etc. We need to get posts from service
            return this.redditService.getPosts().then((redditFormattedPosts) => {
                redditFormattedPosts.forEach((post) => {
                    var p: models.IPost = {
                        id: post.data.id,
                        title: post.data.title,
                        url: post.data.url,
                        author: post.data.author
                    }
                    this.posts.push(p);
                });
                return this.posts;
            });
        } else {
            // We already have the posts, no need to contact the service
            return this.Promise.resolve(this.posts);
        }
    }
    
    getPost(postID: string): async.IThenable<models.IPost> {
            return this.getPosts().then((posts) => {
                var postToReturn: models.IPost;
                posts.forEach(function(post) {
                    if (post.id === postID) {
                        postToReturn = post;
                    }
                });
                return this.Promise.resolve(postToReturn);
            });
    }
}

register.injectable('data-repo', DataRepository, [RedditService]);