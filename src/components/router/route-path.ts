enum RoutePath {
    Main = '/',
    Login = '/login',
    MyList = '/mylist',
    Films = '/films',
    Film = '/films/:id',
    FilmReview = '/films/:id/review',
    Player = '/player/:id',
    NotFound = '*',
}

export default RoutePath;
