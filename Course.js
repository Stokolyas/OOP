/* eslint-disable no-console,no-unused-vars,func-style,require-jsdoc,newline-after-var,no-trailing-spaces,max-len */
class Course {
    constructor(){
        this.countThemes = Math.floor(Math.random(5) * 4) + 2;
        this.Themes = []
        for (let index = 0; index < this.countThemes; index++) {
            let theme = new Theme
            this.Themes[index] = theme
        }
    }
}
function getCourse(){
    let course = new Course
    
    return course
}
module.exports = getCourse;

class Theme{
    constructor(){
        this.CountQuestion = Math.floor(Math.random(5) * 4) + 2;
        this.Questions = []
        for (let index = 0; index < this.CountQuestion; index++) {
            let question = new Question
            this.Questions[index] = question
        }
    }

}
class Question{
    constructor(){
        this.CountAnswer = Math.floor(Math.random(5) * 4) + 2;
        this.Answers = []
        for (let index = 0; index < this.CountAnswer; index++) {
            let answer = new Answer
            this.Answers[index] = answer
        }
    }
}
class Answer{
    constructor(){
        this.right = Math.floor(Math.random()*2)
    }
}
let course = new Course