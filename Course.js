class course {
    constructor(){
        this.countThemes = Math.floor(Math.random(5) * 4) + 2;
        this.Themes = []
        for (let index = 0; index < this.countThemes; index++) {
            let Theme = new theme
            this.Themes[index] = Theme
        }
        console.log(this.Themes)
    }
}

class theme{
    constructor(){
        this.countQuestion = Math.floor(Math.random(5) * 4) + 2;
        this.Questions = []
        for (let index = 0; index < this.countQuestion; index++) {
            let Question = new question
            this.Questions[index] = Question
        }
    }

}
class question{
    constructor(){
        this.countAnswer = Math.floor(Math.random(5) * 4) + 2;
        this.Answers = []
        for (let index = 0; index < this.countAnswer; index++) {
            let Answer = new answer
            this.Answers[index] = Answer
        }
    }
}
class answer{
    constructor(){
        this.right = Math.floor(Math.random()*2)
    }
}
let Course = new course