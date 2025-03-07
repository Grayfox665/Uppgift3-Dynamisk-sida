


/*Creates unordered list for CV and Ids them */
const ul = document.createElement('ul');
const ulTwo = document.createElement('ul');

const br = document.createElement('br');
const brTwo = document.createElement('br');

ul.setAttribute('id', 'CVwork');
ulTwo.setAttribute('id', 'CVeducation');

/*Selects profile-article to give Id */
document.querySelector("article.profile-article").setAttribute('id', 'CV-article');

/*inserts unordered list into article parent */
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
        /*Creates an console error incase failure to fetch JSON files  */
        .catch(function(error) {
            console.error("Fel vid hämtning av JSON:", error);
        });
}

/*Activates the function when website loads up */
fetchData();



/*styles the CV list */
document.getElementById('CVwork').style.listStyle = "none";
document.getElementById('CVeducation').style.listStyle = "none";

/*The interactive function */


/*easteregg interaktive funktion */

/*creates the easterbtn and Ids it */
const easterBtn = document.createElement('label');

easterBtn.setAttribute('id', "Easter-button");

/*inserts the easterbtn into parent Element, aswell Ids the parent Element and styles it's position */
document.querySelector(".picture-box").appendChild(easterBtn);
document.querySelector(".picture-box").setAttribute('id', "CV-picture-box");
document.getElementById("CV-picture-box").style.position = "relative";

/*styles the button */
document.getElementById("Easter-button").style.position = "absolute";
document.getElementById("Easter-button").style.padding ="20px";
document.getElementById("Easter-button").style.display = "hidden";

/*create easternose modal */
const easterNose = document.createElement('div');
document.body.appendChild(easterNose);
easterNose.setAttribute('id', "Easter-nose");

/*creates nosecontent div */
const easterNoseContent = document.createElement('div');
document.getElementById("Easter-nose").appendChild(easterNoseContent);
easterNoseContent.setAttribute("id","Easter-nose-content");

/*easternose modal  styling */
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

/* slideshow function  */

/*creates arrow Elements and sets id */
const arrowDiv = document.createElement('div');
const arrowLeft = document.createElement('button');
const arrowRight = document.createElement('button');

arrowDiv.setAttribute("id", "slide-arrow-container");
arrowLeft.setAttribute("id", "slide-arrow-left");
arrowRight.setAttribute("id", "slide-arrow-right");

/*inserts into parent Element */
document.querySelector(".Projekts").appendChild(arrowDiv);
document.getElementById("slide-arrow-container").appendChild(arrowLeft);
document.getElementById("slide-arrow-container").appendChild(arrowRight);


/*styling of slideshow buttons */
document.getElementById("slide-arrow-container").style.position = "relative";
document.getElementById("slide-arrow-container").style.zIndex = "1";

document.getElementById("slide-arrow-left").style.padding = "15px";
document.getElementById("slide-arrow-left").style.position = "absolute";
document.getElementById("slide-arrow-left").style.top = "10rem";
document.getElementById("slide-arrow-left").style.left = "2vw";

document.getElementById("slide-arrow-right").style.padding = "15px";
document.getElementById("slide-arrow-right").style.position = "absolute";
document.getElementById("slide-arrow-right").style.top = "10rem";
document.getElementById("slide-arrow-right").style.right = "2vw";

arrowLeft.textContent = "<";
arrowRight.textContent = ">";

/*creates the slideshow function */
/*source from  youtube Lun Dev Code with change to function on my site */
let slider = document.querySelector('.Projekt-rows');
let nextBtn = document.getElementById("slide-arrow-right");
let prevBtn = document.getElementById("slide-arrow-left");

nextBtn.onclick = () => {
    slider.append(slider.querySelector('section:first-child'));
}
prevBtn.onclick = () => {
    slider.prepend(slider.querySelector('section:last-child'));
}


/*Creates a query media function */
/* code source from w3c.school with minor changes to function on my site*/

function queryMedia(x) {
    if (x.matches) {
        document.getElementById("Easter-button").style.marginTop = "16vh";
        document.getElementById("Easter-button").style.marginLeft = "-4%";

        document.getElementById("slide-arrow-container").style.display = "none";
    } else {
        document.getElementById("Easter-button").style.marginTop = "15.5vh";
        document.getElementById("Easter-button").style.right = "47%";

        document.getElementById("slide-arrow-container").style.display = "block";
    }
}

/*activates the function when view-window matches the max-width */
const x = window.matchMedia("(max-width: 720px)");

queryMedia(x);

x.addEventListener("change", function() {
    queryMedia(x);
});

