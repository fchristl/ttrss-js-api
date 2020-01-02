/**
 * The headline of an article. This is basically the article without its content and its attachemnts. The headline's
 * {@link id} is the same as its {@link Article.id|article's id}, so you can retrieve the full content for a headline
 * by retrieving the article with the same ID.
 */
export class Headline {
    id: number = 0;
    guid: string = '';
    unread: boolean = false;
    marked: boolean = false;
    published: boolean =false;
    updated: number =  0;
    is_updated: boolean = false;
    title: string = '';
    link: string ='';
    feed_id: number = 0;
    tags: string[] = [];
    labels: string[] = [];
    feed_title: string = '';
    comments_count: number = 0;
    comments_link: string = '';
    always_display_attachments: boolean = false;
    author: string = '';
    score: number = 0;
    note: string | null = null;
    lang: string = 'en';
    content: string = '';
}
