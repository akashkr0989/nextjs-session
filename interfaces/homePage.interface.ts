export interface HomePageCategoryWiseInterface {
  categoryName: string;
  categoryId: string;
  videoListLength: number;
  videoList: Video[];
}

export interface Video {
  name: string;
  description: string;
  id: string;
  thumbnail: string;
  discretion: string;
  duration: number;
  genres: Genres[];
}

export interface Genres {
  name: string;
  _id: string;
}

export interface HomePageAPIResponse {
  _id: string;
  name: string;
  result: Result[];
}

export interface Result {
  _id: string;
  id: string;
  title: string;
  description: string;
  thumbnails: Thumbnail[];
  banners: Banner[];
  categories: Category[];
  genres: Genre[];
  contentType: ContentType;
  discretion: string;
  imdb: string;
  year: number;
  playList: PlayList;
  cardType: string;
  poster?: string;
}

export interface Thumbnail {
  platform: string;
  path: string;
  type: string;
  aspectRatio: string;
}

export interface Banner {
  platform: string;
  path: string;
  type: string;
  aspectRatio: string;
}

export interface Category {
  name: string;
  _id: string;
}

export interface Genre {
  name: string;
  _id: string;
}

export interface ContentType {
  name: string;
  _id: string;
}

export interface PlayList {
  hls: Hls;
}

export interface Hls {
  type: string;
  url: string;
}
