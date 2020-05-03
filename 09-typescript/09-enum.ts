enum Color {
    Black,
    Green,
    Blue,
}
function useColor(color: Color) {
    if (color === Color.Black) {
        console.log('#FFF');
    } else if (color === Color.Blue) {
        console.log('Green');
    } else {
        console.log('any other colors');
    }
}
useColor(Color.Black);

enum MediaTypes {
    Newspaper = 1,
    Book = 10,
    Magazine = 32,
}

function getMedia(name: string): MediaTypes {
    if (name === 'Forbes') {
        return MediaTypes.Magazine;
    }
    return MediaTypes.Book;
}

enum PrintMedia {
    Newspaper = "NEWSPAPER",
    Newsletter = "NEWSLETTER",
    Magazine = "MAGAZINE",
    Book = "BOOK"
}
// Access String Enum 
PrintMedia.Newspaper; //returns NEWSPAPER
PrintMedia['Magazine'];//returns MAGAZINE
