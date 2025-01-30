class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (mark < 2 || mark > 5) {
            console.log(`Оценка ${mark} не добавлена, так как выходит за пределы диапазона 2-5.`);
            return;
        }

        if (!this.marks[subject]) {
            this.marks[subject] = [];
        }

        this.marks[subject].push(mark);
    }

    getAverageBySubject(subject) {
        if (!this.marks[subject] || this.marks[subject].length === 0) {
            return 0;
        }

        const sum = this.marks[subject].reduce((acc, curr) => acc + curr, 0);
        return sum / this.marks[subject].length;
    }

    getAverage() {
        const subjects = Object.keys(this.marks);
        if (subjects.length === 0) {
            return 0;
        }

        const totalAverage = subjects.reduce((acc, subject) => acc + this.getAverageBySubject(subject), 0) / subjects.length;
        return totalAverage;
    }

    toString() {
        return `Студент: ${this.name}, Средний балл: ${this.getAverage().toFixed(2)}`;
    }
}

// Пример использования
const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика");  // Оценка не добавится

console.log(`Средний балл по физике: ${student.getAverageBySubject("физика")}`);
console.log(`Средний балл по биологии: ${student.getAverageBySubject("биология")}`);
console.log(`Общий средний балл: ${student.getAverage()}`);