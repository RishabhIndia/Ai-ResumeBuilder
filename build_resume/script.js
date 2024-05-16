// first name
let fname = document.querySelector("#first-name");
let rh1 = document.querySelector(".nameenter2");

fname.addEventListener("input", () => {
  rh1.innerText = fname.value;
});

// middle name
let Mname = document.querySelector("#middle-name");
let rh2 = document.querySelector(".nameenter3");

Mname.addEventListener("input", () => {
  rh2.innerText = Mname.value;
});

// last name
let Lname = document.querySelector("#last-name");
let rh3 = document.querySelector(".nameenter4");

Lname.addEventListener("input", () => {
  rh3.innerText = Lname.value;
});

// designation
let desgnt = document.querySelector("#designation");
let rdesignation = document.querySelector(".designation");

desgnt.addEventListener("input", () => {
  rdesignation.innerText = desgnt.value;
});

// Address
let address = document.querySelector("#address");
let raddress = document.querySelector(".add");

address.addEventListener("input", () => {
  raddress.innerText = address.value;
});

// E-mail
let mail = document.querySelector("#email");
let rmail = document.querySelector(".mail");

mail.addEventListener("input", () => {
  rmail.innerText = mail.value;
});

// Phone
let mobile = document.querySelector("#phone");
let rmobile = document.querySelector(".mobile");

mobile.addEventListener("input", () => {
  rmobile.innerText = mobile.value;
});

// Summary
let Summary = document.querySelector("#summary");
let rsummary = document.querySelector(".section-content-smry");

Summary.addEventListener("input", () => {
  rsummary.innerText = Summary.value;
});

// Achievement Title
// let achievTitle = document.querySelector("#achievement-title-1")
// let rachievTitle = document.querySelector(".section-content-achiev")

// achievTitle.addEventListener("input", () => {
//   rachievTitle.innerText = achievTitle.value;
// })

// jobTitle
let jobtitle = document.querySelector("#job-title");
let rjobtitle = document.querySelector(".jobTitle");

jobtitle.addEventListener("input", () => {
  rjobtitle.innerText = jobtitle.value;
});

// Company
let Company = document.querySelector("#company");
let rCompany = document.querySelector(".companyName");

Company.addEventListener("input", () => {
  rCompany.innerText = Company.value;
});

// Location
let Location = document.querySelector("#location");
let rLocation = document.querySelector(".country");

Location.addEventListener("input", () => {
  rLocation.innerText = Location.value;
});

// Start Date
// let startdate = document.querySelector("#start-date");
// let Sdate = "";

// startdate.addEventListener("input", (e) => {
//   Sdate = e.target.value;
//   edustartdate();
// });
 
// function edustartdate() {
//   document.querySelector(".dates").innerText = Sdate;
// }

// end date
// let enddate = document.querySelector("#end-date");
// let Edate = "";

// endate.addEventListener("input", (e) => {
//   Edate = e.target.value;
//   eduenddate();
// });

// function eduenddate() {
//   document.querySelector(".dates1").innerText = Edate;
// }


// Job Description
let JobDescription = document.querySelector("#description");
let rJobDescription = document.querySelector(".jobDescription");

JobDescription.addEventListener("input", () => {
  rJobDescription.innerText = JobDescription.value;
});

// School Name
let SchName = document.querySelector("#school");
let rSchName = document.querySelector(".schoolname");

SchName.addEventListener("input", () => {
  rSchName.innerText = SchName.value;
});

// Degree
let dgre = document.querySelector("#degree");
let rdgre = document.querySelector(".degreename");

dgre.addEventListener("input", () => {
  rdgre.innerText = dgre.value;
});

// City
let city = document.querySelector("#city");
let rcity = document.querySelector(".cityname");

city.addEventListener("input", () => {
  rcity.innerText = city.value;
});

// Start Date

let startdate = document.querySelector("#start-date");
let rstartdate = document.querySelector(".dates");

start.addEventListener("input", () => {
  rstartdate.innerHTML = startdate.ariaValueText;
});

// let Sdate = "";

// startdate.addEventListener("input", (e) => {
//   Sdate = e.target.value;
//   edustartdate();
// });
 
function edustartdate() {
  document.querySelector(".dates").innerText = Sdate;
}

// end date
let enddate = document.querySelector("#end-date");
let Edate = "";

endate.addEventListener("input", (e) => {
  Edate = e.target.value;
  eduenddate();
});

function eduenddate() {
  document.querySelector(".dates1").innerText = Edate;
}

// edu desription
let EduDescription = document.querySelector("#education-description");
let rEduDescription = document.querySelector(".EduDescription");

EduDescription.addEventListener("input", () => {
  rEduDescription.innerText = EduDescription.value;
});

// Project Name
let ProjectName = document.querySelector("#project-name");
let rProjectName = document.querySelector(".projectname");

ProjectName.addEventListener("input", () => {
  rProjectName.innerText = ProjectName.value;
});

// Project Link
let ProjectLink = document.querySelector("#project-link");
let rProjectLink = document.querySelector(".projectLink");

ProjectLink.addEventListener("input", () => {
  rProjectLink.innerText = ProjectLink.value;
});

// Project description
let ProjectDescription = document.querySelector("#project-description");
let rProjectDescription = document.querySelector(".ProjectDescription");

ProjectDescription.addEventListener("input", () => {
  rProjectDescription.innerText = ProjectDescription.value;
});

// skills
let skills = document.querySelector("#skill");
let rskills = document.querySelector(".section-content-skills");

skills.addEventListener("input", () => {
  rskills.innerText = skills.value;
});

const print = document.querySelector(".printbutton");
const download = document.querySelector("#downloadit");
const Job_suggestion = document.querySelector(".jobbutton");
const project_suggestion = document.querySelector(".projectbutton");

// print container
print.addEventListener("click", () => {
  window.print(wrapper);
});

// download;
download.addEventListener("click", generatePDF);

function generatePDF() {
  const element = document.getElementById("whole_container");
  document.getElementById("wrapper").style.display = "block";
  document.getElementById("wrapper").style.marginTop = "0px";
  document.getElementById("wrapper").style.border = "1px solid black";
  html2pdf().from(element).save("download.pdf");
}

function downloadCode() {
  var x = document.getElementById("wrapper");
  generatePDF();
  setTimeout(function () {
    window.location = window.location;
  }, 3000);
}
















// Arya Kumar
// 14:12
// let Sdate = "";

// startdate.addEventListener("input", (e) => {
//   // rstartdate .innerText = startdate.value;
//   Sdate = e.target.value;
//   exp();
// });

// function exp(){
//   document.querySelector(".dates").innerText = Sdate;
// }
