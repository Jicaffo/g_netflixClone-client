const SuccessMessage = {
    SEND_MOVIES: "Movie has been sending correctly",
    SEND_SERIES: "Serie has been sending correctly"
}
 
Object.freeze(SuccessMessage)


// 'use strict';

// let SuccessMessage = {
//     SEND_MOVIES: "Movie has been sending correctly",
//     SEND_SERIES: "Serie has been sending correctly"
// };

// module.exports =
//         Object.freeze(SuccessMessage); // freeze prevents changes by users


// 'use strict';
// const SEND_MOVIES = Symbol('Movie has been sending correctly');
// const SEND_SERIES = Symbol('Serie has been sending correctly');


// module.exports = Object.freeze({
//   getSendMovies: () => SEND_MOVIES,
//   getSendSeries: () => SEND_SERIES,
// });