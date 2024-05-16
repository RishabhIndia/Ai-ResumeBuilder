// first name
let fname = document.querySelector("#first-name");
let rh1 = document.querySelector(".nameenter2");

fname.addEventListener("input", () => {
  rh1.innerText = fname.value;
});

// last name
let Lname = document.querySelector("#last-name");
let rh2 = document.querySelector(".nameenter3");

Lname.addEventListener("input", () => {
  rh2.innerText = Lname.value;
});

// designation
let desgnt = document.querySelector("#designation");
let rdesignation = document.querySelector(".designation");

desgnt.addEventListener("input", () => {
  rdesignation.innerText = desgnt.value;
});

// uploadimg
let uploadIMG = document.querySelector("#upload-image");
let imagePreview = document.querySelector("#image-preview");

uploadIMG.addEventListener("change", () => {
  const file = uploadIMG.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      imagePreview.src = reader.result;
    };
    reader.readAsDataURL(file);
  } else {
    imagePreview.src = "#"; // Clear the preview if no file is selected
  }
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
let Sdate = "";

startdate.addEventListener("input", (e) => {
  Sdate = e.target.value;
  edustartdate();
});
 
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

// download buuton
let down = document.querySelector("#downloadit");
down.addEventListener("click", function () {
  const R = document.querySelector(".container").innerText;
  const pdf = new jsPDF();
  pdf.text(20, 20, "Resume");
  pdf.fromHTML(R, 20, 30);
  pdf.save("resume.pdf");
});

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
