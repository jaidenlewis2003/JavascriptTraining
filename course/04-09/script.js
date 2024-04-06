function Course(title,instructor,level,published,views) {
    this.title = title; 
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views; 
    this.updateViews = function () {
        return ++this.views;
    };
}

var courses = [
    new Course("Javascripit Esstiantal Training", "Jaiden Lewis", 1, true, 0),
    new Course("Up and Running", "Jordan Lewis", 2, true, 2)
];



console.log(courses);



























// var course = new Object();

// var course = {
//     title: "Javascript Training",
//     instructor: "Jaiden Lewis",
//     level: 1,
//     published: "true",
//     views: 0, 
//     updateViews: function() {
//         return ++course.views;
//     }
// }

// console.log(course);
