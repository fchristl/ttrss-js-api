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
