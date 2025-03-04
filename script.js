


/*Creates unordered list for CV */
const ul = document.createElement('ul');
const ulTwo = document.createElement('ul');

const br = document.createElement('br');
const brTwo = document.createElement('br');

ul.setAttribute('id', 'CVwork');
ulTwo.setAttribute('id', 'CVeducation');

/*Selects profile-article to give Id */
document.querySelector("article.profile-article").setAttribute('id', 'CV-article');

document.getElementById('CV-article').appendChild(ul);
document.getElementById('CV-article').appendChild(br);
document.getElementById('CV-article').appendChild(ulTwo);
document.getElementById('CV-article').appendChild(brTwo);

/* fetches data from CV JSON file*/
function fetchData() {
    fetch("CV.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            let workList = document.getElementById("CVwork");
            workList.innerHTML = "";

            let educationList = document.getElementById("CVeducation");
            educationList.innerHTML = "";

            /*Loops through the CV JSON file and creates new HTML- elemnet for each work object */
            data.workExperiences.forEach(function(workExperience) {
                let li = document.createElement("li");
                li.textContent = "Företag: " + workExperience.business + ". Tätort: " + workExperience.workPlace + ". Arbetsroll: " + workExperience.career + ". Arbetet: " + workExperience.work + ". Anställningsperiod: " + workExperience.employmentTime + ".";
                workList.appendChild(li);
            });

            /*Does the same but with the education objects */
            data.educations.forEach(function(education) {
                let liTwo = document.createElement("li");
                liTwo.textContent = "Utbildningskola: " + education.school + ". Tätort: " + education.schoolPlace + ". Kurs: " + education.course + "Kurstid: " + education.courseTime + ".";
                educationList.appendChild(liTwo);
            });
        })
        .catch(function(error) {
            console.error("Fel vid hamtning av JSON:", error);
        });
}

/*styles the CV list */
document.getElementById('CVwork').style.listStyle = "none";
document.getElementById('CVeducation').style.listStyle = "none";

/*Activates the function when website loads up */
fetchData();