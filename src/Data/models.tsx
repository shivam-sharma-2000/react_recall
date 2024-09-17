export interface Movie {
  original_title: String;
  overview: String;
  backdrop_path: String;
}

class Constants {
  static apiKey = "6935dc2241b5a6643ce91a7504316079";
  static url = "https://api.themoviedb.org/3";
}
export default Constants;
