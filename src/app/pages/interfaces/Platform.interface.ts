export interface PlatfotmResponse {
    count: number;
    next: null;
    previous: null;
    results: PlatformResult[];
}

export interface PlatformResult {
    id: number;
    name: string;
    slug: string;
    platforms: Platform[];
}

export interface Platform {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
    image: null;
    year_start: number | null;
    year_end: null;
}
