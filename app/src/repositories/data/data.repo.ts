import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';

export default class DataRepository extends BaseRepository {

}

register.injectable('data-repo', DataRepository);
