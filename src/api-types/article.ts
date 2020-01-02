import {Headline} from './headline';
import {Attachment} from './attachment';

/**
 * A single article with its content.
 */
export class Article extends Headline{
    attachments?: Attachment[];
}
