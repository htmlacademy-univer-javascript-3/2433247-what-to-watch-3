enum RoutePath {
    Main = '/',
    Login = '/login',
    MyList = '/mylist',
    // Films = '/films',
    Film = '/films/:id',
    FilmReview = '/films/:id/review',
    Player = 'films/:id/player',
    NotFound = '*',
}

export default RoutePath;
