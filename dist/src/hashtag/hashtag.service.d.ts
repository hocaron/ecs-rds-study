import { Hashtag } from 'src/hashtag/entities/hashtag.entity';
import { Repository } from 'typeorm';
export declare class HashtagService {
    private readonly hashtagRepository;
    constructor(hashtagRepository: Repository<Hashtag>);
    findHashtag(id: number): Promise<Hashtag>;
    findHashtagByWord(word: string): Promise<Hashtag>;
}
