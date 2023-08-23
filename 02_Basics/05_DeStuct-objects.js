const course={
    coursename:"JavaScript Basics",
    price:"999",
    courseInstructor:"Shivam Singh"
}

// course.courseInstructor

// const {courseInstructor}=course
// console.log(courseInstructor); 

const {courseInstructor:instructor}=course
console.log(instructor); 