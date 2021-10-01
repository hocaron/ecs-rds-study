import { HashtagController } from './hashtag.controller';
declare type SwaggerMethodDoc<T> = {
    [K in keyof T]: (description: string) => MethodDecorator;
};
export declare const ApiDocs: SwaggerMethodDoc<HashtagController>;
export {};
