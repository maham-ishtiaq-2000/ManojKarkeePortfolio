const express = require('express');
const Joi = require('joi');
const { classes_validation, Class } = require('../models/class');
const { student_validation, Student } = require('../models/students');
const {courses_validation , Course } = require('../models/courses');
const router = express.Router();


//-----     signup     ------//
router.post('/signup', async (req, res) => {
    const result = classes_validation(req.body);
    if (result.error != null) {
        return res.json
            ({
                success: false,
                message: (result.error.details[0].message)
            })
    }
    let classe = await Class.findOne({ class_name: req.body.class_name });
    if (classe) {
        return res.json
            ({
                success: false,
                message: "Class alreay registerd",
            })
    }
    try {
        const new_class = new Class
            ({
                class_name: req.body.class_name,
            })
        const classe = await new_class.save();
        return res.json
            ({
                success: true,
                message: "Class registered successfully",
            })
    }
    catch (err) {
        return res.json
            ({
                success: false,
                message: err.message,
            })
    }
})


//add student to class 

router.put('/add_student_to_class/:class_id/:student_id', async (req, res) => {
    try {
        const get_student = await Student.findOne({ _id: req.params.student_id });
        console.log(get_student)
        const add_student = await Class.findOneAndUpdate({ _id: req.params.class_id },
            {
                $push: {
                    my_students: {
                        student_id: req.params.student_id,
                        student_first_name : get_student.first_name,
                        student_last_name : get_student.last_name,

                    }
                }
            },
            { new: true }).select({ my_students: 1 })

        return res.json
            ({
                success: true,
                message: "Student added to class successfully",
                data: add_student,
            })
    }
    catch(err){
        console.log(err)
    }
})


//add course to class

router.put('/add_course_to_class/:class_id/:course_id', async (req, res) => {
    try {
        const get_course = await Course.findOne({ _id: req.params.course_id });
        console.log(get_course)
        const add_course = await Class.findOneAndUpdate({ _id: req.params.class_id },
            {
                $push: {
                    my_courses : {
                        course_id: req.params.course_id,
                        teacher_id : get_course.teacher_id,
                        name : get_course.name,
                       

                    }
                }
            },
            { new: true }).select({ my_students: 1 })

        return res.json
            ({
                success: true,
                message: "Student added to class successfully",
                data: add_course,
            })
    }
    catch(err){
        console.log(err)
    }
})

//add quiz marks 

router.put('/quiz_marks/:class_id/:course_id/:student_roll_number', async (req, res) => {
    try {
        const get_course = await Course.findOne({ _id: req.params.course_id });
        const get_class = await Class.findOne({ _id: req.params.class_id })
        const add_course = await Class.findOneAndUpdate({ _id: req.params.class_id },
            {
                $push: {
                    class_quizes : {
                        course_name: get_course.name,
                        class_name : req.params.class_id,
                        student_roll_number : req.params.student_roll_number,
                        quiz_number : req.body.quiz_number,
                        total_marks : req.body.total_marks,
                        obtained_marks : req.body.obtained_marks
                    }
                }
            },
            { new: true }).select({ class_quizes: 1 })

        return res.json
            ({
                success: true,
                message: "Student added to class successfully",
                data: add_course,
            })
    }
    catch(err){
        console.log(err)
    }
})

//add mid terrm marks
router.put('/class_mid_term/:class_id/:course_id/:student_roll_number', async (req, res) => {
    try {
        const get_course = await Course.findOne({ _id: req.params.course_id });
        const get_class = await Class.findOne({ _id: req.params.class_id })
        const add_course = await Class.findOneAndUpdate({ _id: req.params.class_id },
            {
                $push: {
                    class_mid_term : {
                        course_name: get_course.name,
                        class_name : req.params.class_id,
                        student_roll_number : req.params.student_roll_number,
                        total_marks : req.body.total_marks,
                        obtained_marks : req.body.obtained_marks
                    }
                }
            },
            { new: true }).select({ class_mid_term: 1 })

        return res.json
            ({
                success: true,
                message: "Midterm added to studennt successfully",
                data: add_course,
            })
    }
    catch(err){
        console.log(err)
    }
})


module.exports = router;
