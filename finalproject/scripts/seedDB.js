const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/quizesdb",
    {
        useMongoClient: true
    }
);

const quizSeed = {
    
        quizTitle:"Test Quiz" ,
        q1: {
            question: "Answer q1" ,
            answers: {
                answer1: {
                    answer:"This is the first answer. It is wrong",
                    correct: false
                },
                answer2: {
                    answer:"This is the second answer. It is wrong",
                    correct: false
                },
                answer3: {
                    answer:"This is the third answer. It is wrong",
                    correct: false
                },
                answer4: {
                    answer:"This is the fourth answer. It is right",
                    correct: true
                }
            }
            
        },
        q2: {
            question: "Answer q2" ,
            answers: {
                answer1: {
                    answer:"This is the first answer. It is wrong",
                    correct: false
                },
                answer2: {
                    answer:"This is the second answer. It is right",
                    correct: true
                },
                answer3: {
                    answer:"This is the third answer. It is wrong",
                    correct: false
                },
                answer4: {
                    answer:"This is the fourth answer. It is wrong",
                    correct: false
                }
            }
        },
        q3: {
            question: "Answer q3" ,
            answers: {
                answer1: {
                    answer:"This is the first answer. It is right",
                    correct: true
                },
                answer2: {
                    answer:"This is the second answer. It is wrong",
                    correct: false
                },
                answer3: {
                    answer:"This is the third answer. It is wrong",
                    correct: false
                },
                answer4: {
                    answer:"This is the fourth answer. It is wrong",
                    correct: false
                }
            } 
        },
    
}