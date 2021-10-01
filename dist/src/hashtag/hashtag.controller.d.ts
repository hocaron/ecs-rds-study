import { HashtagService } from './hashtag.service';
export declare class HashtagController {
    private readonly hashtagService;
    constructor(hashtagService: HashtagService);
    findHashtag(id: number): Promise<import("./entities/hashtag.entity").Hashtag>;
    findHashtagByWord(word: string): Promise<import("./entities/hashtag.entity").Hashtag>;
}
