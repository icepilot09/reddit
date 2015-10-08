import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class RedditService extends BaseService {

}

register.injectable('reddit-svc', RedditService);
