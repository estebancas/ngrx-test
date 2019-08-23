import { IUser } from './user.model';

/**
 * Interface model for API response
 */

export interface IResponse {
    info?: any;
    results?: IUser[];
}
