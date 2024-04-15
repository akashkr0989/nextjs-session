export interface VideoDetailsInterface  {
    name: string
    description: string
    duration: number
    poster: string
    sources: Source[]
    thumbnail: Thumbnails[]
    contentId: string;
    imdbRating: string;
    discretionCertificate: string;
    year: number;
    categories: Category[];
    genres: Category[];
    subtitles: Subtitle[];
  }
  
  export interface Source {
    src: string
    type: string
  }
  
  export interface Thumbnails {
    srcset?: string
    type?: string
    media?: string
    src?: string
  }


  export interface VideoDetailAPIResponse {
    imdb: string
    discretion: string
    year: number
    id: string
    title: string
    subtitles: Subtitle[]
    description: string
    duration: number
    categories: Category[]
    createdAt: string
    contentType: ContentType
    genres: Genre[]
    thumbnails: Thumbnail[]
    banners: Banner[]
    playList: PlayList
  }
  
  export interface Subtitle {
    lang: string
    path: string
  }
  
  export interface Category {
    _id: string
    name: string
  }
  
  export interface ContentType {
    name: string
    _id: string
  }
  
  export interface Genre {
    _id: string
    name: string
  }
  
  export interface Thumbnail {
    platform: string
    path: string
    aspectRatio: string
    type: string
  }
  
  export interface Banner {
    platform: string
    path: string
    aspectRatio: string
    type: string
  }
  
  export interface PlayList {
    hls: Hls
  }
  
  export interface Hls {
    type: string
    url: string
  }
  