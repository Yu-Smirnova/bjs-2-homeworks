class PrintEditionItem {
    constructor (name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(newState){
        if(newState < 0) {
            this._state = 0;
        } else if(newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let book of this.books) {
            if(type in book && book[type] === value) {
                return book;
            } 
            }
        return null;
    }

    giveBookByName(bookName) {
        let book = this.findBookBy("name", bookName);
        let bookIndex = this.books.indexOf(book);
        if (bookIndex > -1) {
            this.books.splice(bookIndex, 1)
        }
        return book;
    }
}

class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.addBook = age;
        this.subjects = {};
    }

    addMark(mark, subjectName) {
        if (mark < 1 || mark > 5) {
            console.error('Ошибка, оценка должна быть числом от 1 до 5');
        } else  {
            if (!(subjectName in this.subjects)) {
                this.subjects[subjectName] = [mark];
            } else {
                this.subjects[subjectName].push(mark);
            }
        }    
    }

    getAverageBySubject(subjectName) {
        if (!(subjectName in this.subjects)) {
            console.error('Несуществующий предмет');
        } else {
            let marksSum = 0;
            for (let mark of this.subjects[subjectName]) {
                marksSum += mark;
            }
            return (+(marksSum / this.subjects[subjectName].length).toFixed(2));
        }
    }

    getAverage() {
        let subjCount = 0;
        let marksCount = 0;
        for (let subject in this.subjects) {
            marksCount += this.getAverageBySubject(subject);
            subjCount += 1;
        }
        return marksCount / subjCount;
    }

    exclude(reason) {
        this.excluded = reason;
        delete this.subjects;
    }
}