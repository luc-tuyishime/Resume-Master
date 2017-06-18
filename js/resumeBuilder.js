
/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {
   "name":"Jean Luc",
   "role":"Developer",
   "contacts":{
     "mobile":"0784421255",
     "email":"luctunechi45@gmail.com",
     "github":"jeanluc",
     "twitter":"@luctuyishime",
     "location":"kigali"
   },
   "welcomeMessage":"we the best in this city",
   "skills":["HTML","CSS","JAVASCRIPT","REACT"],
   "biopic":"images/fry.jpg"
 };


 bio.display = function(){
 var formattedName = HTMLheaderName.replace("%data%", bio.name);
 var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
 var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
 var formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github);
 var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
 var formattedlocation = HTMLlocation.replace("%data%",bio.contacts.location);
 var formattedMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
 var formattedimage = HTMLbioPic.replace("%data%", bio.biopic);


 var role = "Web Developer";
 var formattedRole = HTMLheaderRole.replace("%data%",role);
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 $('#topContacts').append(formattedMobile);
 $('#topContacts').append(formattedEmail);
 $('#topContacts').append(formattedgithub);
 $('#topContacts').append(formattedTwitter);
 $('#topContacts').append(formattedlocation);
 $('#header').append(formattedMsg);
 $("#header").append(formattedimage);
 // $("#name").append(bio.name);

 $('#footerContacts').append(formattedMobile);
 $('#footerContacts').append(formattedEmail);
 $('#footerContacts').append(formattedgithub);
 $('#footerContacts').append(formattedTwitter);
 $('#footerContacts').append(formattedlocation);


 if(bio.skills.length > 0 ){
  $("#header").append(HTMLskillsStart);
  var formattedSkillone = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkillone);
  var formattedSkilltwo = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkilltwo);
  var formattedSkillthree = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkillthree);
  var formattedSkillfour = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkillfour);

  }
  if(bio.biopic.length > 0){
    var formattedimagebiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $(".biopic").append(formattedimagebiopic);
  }
};
bio.display();


//JSON JOBS
var work = {
 "jobs" : [
     {
       "employer":"planet Express",
       "title":"delivery boy",
       "location":"Brazza",
       "dates":"january 3000 - Future",
       "description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
     },
     {
       "employer":"Panucci Pizza",
       "title":"delivery boy",
       "location":"kigalie",
       "dates":"1998 - December 31, 1994",
       "description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
     },
      {
        "employer":"Panucci Pizza",
        "title":"delivery boy",
        "location":"cotonou",
        "dates":"1998 - December 31, 1994",
        "description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
       }
    ]
  };

  work.display = function(){
    for(var job = 0 ; job < work.jobs.length ; job++){
    //Create new div for work experience
    $("#workExperience").append(HTMLworkStart);
    //concat employer and title
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);

   var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
   $(".work-entry:last").append(formattedDates);
   var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
   $(".work-entry:last").append(formattedDescription);

  }
};
work.display();

  //JSON project
  var projects = {
    "projects":[
         {
         "title":"Sample Project 1",
         "dates":"2014",
         "description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
          "images":[
            "images/image2.png",
            "images/image2.png"

          ]
      }
    ]
  };

     projects.display = function(){
      for (var project = 0 ; project < projects.projects.length ; project++){
        $("#projects").append(HTMLprojectStart);
          var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
          $(".project-entry:last").append(formattedTitle);
          var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
          $(".project-entry:last").append(formattedDates);
          var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
          $(".project-entry:last").append(formattedDescription);

          if(projects.projects[project].images.length > 0){
            for(var image = 0 ; image <= projects.projects.length ; image++){
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
            $(".project-entry:last").append(formattedImage);
            }
          }
      }
    };
   projects.display();

  //JSON
  var education = {
    "schools":[
       {
        "name":"Gitwe College",
        "dates":"2012",
        "majors":["Computer science", " Physics"],
        "degree":"BACHELOR",
        "location":"saint Petersburg"
      },
      {
       "name":"CCPA",
       "dates":"2010",
       "majors":["MATHS"],
       "degree":"Master",
       "location":"cotonou"
      }
    ],

  "onlineCourses":[
       {
         "title":"Javascript Crash Course-Udacity",
         "school":"College Chatolique pere aupiais",
         "dates":"2012",
         "url":"http://udacity.com/course/ud804"
       }
     ]
  };

 education.display = function (){

  for (var educationdetail = 0; educationdetail < education.schools.length ; educationdetail++){
    $("#education").append(HTMLschoolStart);

      var formattedName = HTMLschoolName.replace("%data%",education.schools[educationdetail].name);
      $(".education-entry:last").append(formattedName);
      var formattedDates = HTMLschoolDates.replace("%data%",education.schools[educationdetail].dates);
      $(".education-entry:last").append(formattedDates);
      var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[educationdetail].majors);
      $(".education-entry:last").append(formattedMajor);
      var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[educationdetail].degree);
      $(".education-entry:last").append(formattedDegree);
      var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[educationdetail].location);
      $(".education-entry:last").append(formattedLocation);

    }

    for (var educationschool = 0; educationschool < education.onlineCourses.length ; educationschool++){
      $(".education-entry:last").append(HTMLonlineClasses);
      var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[educationschool].title);
      $(".education-entry:last").append(formattedTitle);
      var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[educationschool].school);
      $(".education-entry:last").append(formattedSchool);
      var formatteddate = HTMLonlineDates.replace("%data%",education.onlineCourses[educationschool].dates);
      $(".education-entry:last").append(formatteddate);
      var formattedurl = HTMLonlineURL.replace("%data%",education.onlineCourses[educationschool].url);
      $(".education-entry:last").append(formattedurl);
  }
};
education.display();




$("#mapDiv").append(googleMap);



function customize(){
    // $("#mapDiv").append(internationalizeButton);
}
customize();

$(document).click(function(loc){
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

//add new location using push
function locationizer(work_obj){
  var locationArray = [];
  for( var job = 0 ; job < work_obj.jobs.length ; job++){
    var newLocation = work_obj.jobs[job].location;
    locationArray.push(newLocation);
  }
  return locationArray;
}
console.log(locationizer(work));

//Internationalize name
function inName(name){
  name = name.trim().split("");
  console.log(name);
  name[1] = name[1].toUppercase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] +" "+name[1];
}
