let myName2: string = "Amara Stephens";
console.log(myName2.toUpperCase())
console.log("Career Field: Web Development")
console.log("Description: Through my experience within the Employee Relations department these past two years and my various Human Resources internships, I have attained many valuable skills. These include soft skills such as having empathy for others, creating positive interpersonal communications, using problem-solving, and exemplifying change agility. I think the assets that have allowed me to be both a successful student in school and an achiever in the workforce is my well-rounded work ethic, my organization skills, my time management, and my ability to easily collaborate with others. With these skills along with the web development skills I have attained in my coding bootcamp, I am hoping to find a job as a junior or mid-level web developer. I want to further the knowledge I have in web design and development and become a positive, eager addition to a web development team.")
console.log("My Interests: Hiking, Baking, Brewery-Hopping, Watching Documentaries")

let myInterests: string[] = ["Games", "Tv", "Movies", "Food"];

console.log("My Interests:")

for (let i: number = 0; i < myInterests.length; i++) {
    console.log("* " + myInterests[i])
}

function displayPositions(title: string, company: string, duties: string) {
    console.log(title, company, duties)
}
console.log("My Past Work Experience:")
displayPositions("Human Resources Coordinator", "at Encompass Health", "- I monitored flagged background and drug screen results for the company and assessed eligibility for hire for each candidate")
displayPositions("Human Resources Intern", "at SMP Automotive Global", "- I assisted in the recruitment of over 1,000 technical and production hourly team members leading up to the start of production")
displayPositions("Recruiting Intern", "at Iron City Acquisitions", "- I recruited and scouted job seekers for direct sales positions and served as company’s liaison to the public")

console.log("My Skills:")

interface skills { skill: string, isCool: boolean }

let skills: skills[] = [
    {
        skill: "Coding",
        isCool: true
    },
    {
        skill: "Working Out",
        isCool: true
    },
    {
        skill: "Working in HR",
        isCool: false
    },
    {
        skill: "Dog-lover",
        isCool: true
    },
    {
        skill: "Typescript",
        isCool: false
    }
];

function displaySkills(theSkill: string, isItCool: boolean) {
    if (isItCool == true) {
        console.log("* BAM: " + theSkill)
    } else {
        console.log("* " + theSkill)
    }
}

console.log("\n")
console.log("My Skills:")

for (let i: number = 0; i < skills.length; i++) {
    displaySkills(skills[i].skill, skills[i].isCool)
}

