// mapping of Akan day names and meanings for each ethnic group
const akanData = {
    Ashanti: {
        Monday: {
            Male: { names: ["Kwadwo"], meaning: "Born on Monday" },
            Female: { names: ["Adwoa"], meaning: "Born on Monday" }
        },
        Tuesday: {
            Male: { names: ["Kwabena"], meaning: "Born on Tuesday" },
            Female: { names: ["Abena"], meaning: "Born on Tuesday" }
        },
        Wednesday: {
            Male: { names: ["Kwaku"], meaning: "Born on Wednesday" },
            Female: { names: ["Akua"], meaning: "Born on Wednesday" }
        },
        Thursday: {
            Male: { names: ["Yaw"], meaning: "Born on Thursday" },
            Female: { names: ["Yaa"], meaning: "Born on Thursday" }
        },
        Friday: {
            Male: { names: ["Kofi"], meaning: "Born on Friday" },
            Female: { names: ["Afua"], meaning: "Born on Friday" }
        },
        Saturday: {
            Male: { names: ["Kwame"], meaning: "Born on Saturday" },
            Female: { names: ["Ama"], meaning: "Born on Saturday" }
        },
        Sunday: {
            Male: { names: ["Kwasi"], meaning: "Born on Sunday" },
            Female: { names: ["Akosua"], meaning: "Born on Sunday" }
        }
    },
    Fanti: {
        // use same names for simplicity; real data may vary slightly
        Monday: {
            Male: { names: ["Kwadwo"], meaning: "Born on Monday" },
            Female: { names: ["Adwoa"], meaning: "Born on Monday" }
        },
        Tuesday: {
            Male: { names: ["Kwabena"], meaning: "Born on Tuesday" },
            Female: { names: ["Abena"], meaning: "Born on Tuesday" }
        },
        Wednesday: {
            Male: { names: ["Kwaku"], meaning: "Born on Wednesday" },
            Female: { names: ["Akua"], meaning: "Born on Wednesday" }
        },
        Thursday: {
            Male: { names: ["Yaw"], meaning: "Born on Thursday" },
            Female: { names: ["Yaa"], meaning: "Born on Thursday" }
        },
        Friday: {
            Male: { names: ["Kofi"], meaning: "Born on Friday" },
            Female: { names: ["Afua"], meaning: "Born on Friday" }
        },
        Saturday: {
            Male: { names: ["Kwame"], meaning: "Born on Saturday" },
            Female: { names: ["Ama"], meaning: "Born on Saturday" }
        },
        Sunday: {
            Male: { names: ["Kwasi"], meaning: "Born on Sunday" },
            Female: { names: ["Akosua"], meaning: "Born on Sunday" }
        }
    }
};

document.getElementById("generateBtn").addEventListener("click", generateName);

function generateName() {
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.getElementById("gender").value;
    const group = document.getElementById("group").value;
    const output = document.getElementById("output");

    if (!birthdate || !gender || !group) {
        output.innerHTML = "<p>Please fill all fields.</p>";
        return;
    }

    const date = new Date(birthdate);
    const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });

    const data = akanData[group][weekday];

    if (!data) {
        output.innerHTML = "<p>Invalid selection.</p>";
        return;
    }

    const nameInfo = data[gender];
    const nameList = nameInfo.names.join(" / ");
    const meaning = nameInfo.meaning;

    output.innerHTML = `
        <h2>${nameList}</h2>
        <p><strong>Born on:</strong> ${weekday}</p>
        <p><strong>Meaning:</strong> ${meaning}</p>
    `;
}