export interface GameImagesResponse {
    count:    number;
    next:     null;
    previous: null;
    results:  images[];
}

export interface images {
    id:         number;
    image:      string;
    width:      number;
    height:     number;
    is_deleted: boolean;
}
