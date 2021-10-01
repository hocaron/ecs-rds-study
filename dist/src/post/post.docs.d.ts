import { PostController } from './post.controller';
declare type SwaggerMethodDoc<T> = {
    [K in keyof T]: (description: string) => MethodDecorator;
};
export declare const ApiDocs: SwaggerMethodDoc<PostController>;
export {};
