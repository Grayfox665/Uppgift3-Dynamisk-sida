


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

/*Activates the function when website loads up */
fetchData();



/*styles the CV list */
document.getElementById('CVwork').style.listStyle = "none";
document.getElementById('CVeducation').style.listStyle = "none";

/*The interactive function */


/*easteregg interaktive funktion */

/*creats the easterbtn */
const easterBtn = document.createElement('label');

easterBtn.setAttribute('id', "Easter-button");

document.querySelector(".picture-box").appendChild(easterBtn);
document.querySelector(".picture-box").setAttribute('id', "CV-picture-box");
document.getElementById("CV-picture-box").style.position = "relative";

/*styles the button */
document.getElementById("Easter-button").style.position = "absolute";
document.getElementById("Easter-button").style.marginTop = "53%";
document.getElementById("Easter-button").style.marginLeft = "-60%";
document.getElementById("Easter-button").style.padding ="7px";
document.getElementById("Easter-button").style.display = "hidden";

/*create easternose modal */
const easterNose = document.createElement('div');
document.body.appendChild(easterNose);
easterNose.setAttribute('id', "Easter-nose");

/*creates nosecontent div */
const easterNoseContent = document.createElement('div');
document.getElementById("Easter-nose").appendChild(easterNoseContent);
easterNoseContent.setAttribute("id","Easter-nose-content");

/*easternose  styling */
document.getElementById("Easter-nose").style.display = "none";
document.getElementById("Easter-nose").style.zIndex = "1";
document.getElementById("Easter-nose").style.position = "fixed";
document.getElementById("Easter-nose").style.top = "0";
document.getElementById("Easter-nose").style.left = "0";
document.getElementById("Easter-nose").style.width = "100%";
document.getElementById("Easter-nose").style.height = "100%";
document.getElementById("Easter-nose").style.backgroundColor = "rgb(0,0,0,0.4)";
document.getElementById("Easter-nose").style.paddingTop = "100px";

/*easter nose content styling */
document.getElementById("Easter-nose-content").style.padding = "20px";
document.getElementById("Easter-nose-content").style.margin = "auto";
document.getElementById("Easter-nose-content").style.border = "1px solid black";
document.getElementById("Easter-nose-content").style.width = "80%";
document.getElementById("Easter-nose-content").style.backgroundColor = "#fefefe";


/*easter nose text */
const easterNoseText = document.createElement('h2');
easterNoseText.innerText = "Du petade på min näsa!";
document.getElementById("Easter-nose-content").appendChild(easterNoseText);

/* activates when nose is clicked */
easterBtn.onclick = function() {
    easterNose.style.display = "block";
}
/*activates when clicking outside modal box */
window.onclick = function(event) {
    if (event.target === easterNose) {
        easterNose.style.display = "none";
    }
}