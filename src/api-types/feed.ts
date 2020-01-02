/**
 * A feed that lives in a {@link Category} and contains {@link Article|articles}, which can also be retrieved in their
 * simpler {@link Headline|headline} form.
 */
export class Feed {
    id: number = 0;
    feed_url: string = '';
    unread: number = 0;
    cat_id: number = 0;
    has_icon: boolean = false;
    last_updated: number = 0;
    order_id: number = 0;
    title: string = '';
}
