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
        this.state = 100;
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor (author,name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.state = 100;
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor (author,name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.state = 100;
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor (author,name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.state = 100;
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor (author,name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.state = 100;
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
            } else {
                return null;
            }
        }
    }

    giveBookByName(bookName) {
        for(let book of this.books) {
            if(book.name === bookName) {
                this.books.splice(this.books.indexOf(book), 1);
                return book;
            }
        }
        return null;
    }
}

class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.addBook = age;
        this.subjects = [];
    }

    addSubject(subjectName) {
        if(this.subjects.some(subject => subjectName in subject)) {
            console.log('Такой предмет уже есть');
        } else {
            this.subjects.push({subjectName: []});
        }
    }

    addMark(mark, subject) {
        if (mark < 1 || mark > 5) {
            return ('Ошибка, оценка должна быть числом от 1 до 5');
        } else  {
            for (subj of this.subjects){
                if(subj.subjectName === subject){
                    subj.push(mark);
                } else {
                    this.addSubject(subject);
                    subj.push(mark);   
                }
            }
        }    
    }

    getAverageBySubject(subject) {
        for(subj of this.subjects){
            if (subj.subjectName === subject){
                let marksSum = 0;
                for(mark of subj.subjectname){
                    marksSum += mark;
                }
                return (`Средний балл по предмету ${subject} ${(marksSum / subj[subjectName].length).toFixed(2)}`);
            }
        }
        // return ('Несуществующий предмет');
    }
}