export declare const isGhosted: (path: string) => boolean;
export declare const ghostedUrlToOriginalUrl: (path: string) => string;
export declare const originalUrlToGhostedUrl: (path: string) => string;
export declare const clearOriginalUser: () => void;
export declare const getOriginalUser: () => string;
export declare const mapUrlsIfGhosted: <T extends string>(urls: Record<T, string>) => Record<T, string>;
