
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