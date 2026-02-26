# Akan Name Generator

## 📖 About This Project

The **Akan Name Generator** is an interactive web application that celebrates West African naming traditions. It calculates and displays a user's traditional **Akan day name** based on their date of birth, gender, and ethnic group (Ashanti or Fanti).

In Akan culture, each day of the week is associated with specific given names for males and females. This practice, deeply rooted in Ghanaian heritage, reflects the day a person was born and carries cultural significance. This tool bridges traditional knowledge with modern web technology, allowing users to discover or verify their day name with a simple click.

## 📁 Project Structure & File Explanations

```
akan-name/
├── index.html          # Main HTML structure
├── css/
│   └── style.css       # Styling and layout
├── js/
│   └── script.js       # Core logic and data
└── README.md           # This file
```

### **index.html** – The User Interface
This is the entry point of the application. It contains:
- A semantic HTML structure with proper accessibility attributes.
- A centered card layout with a header ("🇬🇭 Akan Name Generator").
- **Three input fields:**
  - `<input type="date" id="birthdate">` – Captures the user's birth date.
  - `<select id="gender">` – Dropdown menu for gender selection (Male/Female).
  - `<select id="group">` – Dropdown menu for ethnic group (Ashanti or Fanti).
- A `Generate Name` button that triggers the name generation logic.
- A result container (`<div id="output">`) that displays the computed Akan name, birth weekday, and meaning.
- Links to Google Fonts (Poppins) for typography and the external CSS stylesheet.

### **css/style.css** – Styling & Visual Design
This stylesheet provides:
- **Responsive layout** using flexbox and CSS Grid for centering content.
- **Color scheme** that complements the Ghanaian theme (includes a background overlay).
- **Typography** with the Poppins font family for a modern, clean appearance.
- **Form styling** for inputs and selects with focus states and hover effects.
- **Button styling** for the "Generate Name" button with interactive feedback.
- **Result card styling** to display the generated name prominently.
- **Mobile responsiveness** via the viewport meta tag in HTML.

### **js/script.js** – The Application Logic
The heart of the project, containing:

#### **1. The `akanData` Object**
A nested JavaScript object that maps ethnic groups → weekdays → gender → name mappings:
```javascript
const akanData = {
    Ashanti: {
        Monday: {
            Male: { names: ["Kwadwo"], meaning: "Born on Monday" },
            Female: { names: ["Adwoa"], meaning: "Born on Monday" }
        },
        // ... other days
    },
    Fanti: {
        // ... similar structure
    }
};
```
- **Structure:** `akanData[group][weekday][gender]` returns an object with `names` (array) and `meaning` (string).
- **Extensibility:** Additional groups, alternate spellings, or more detailed meanings can be added here.

#### **2. The `generateName()` Function**
The core algorithm that:
1. **Retrieves form values** – Extracts birthdate, gender, and group selections.
2. **Validates input** – Ensures all fields are filled; displays an error message if not.
3. **Calculates weekday** – Uses JavaScript's `Date` object and `toLocaleDateString()` to determine the day of the week (Monday, Tuesday, etc.).
4. **Looks up the name** – Accesses `akanData[group][weekday][gender]` to retrieve the corresponding Akan name.
5. **Handles errors** – Shows "Invalid selection" if the weekday is not found (edge case).
6. **Displays the result** – Generates HTML to show the name, birth weekday, and cultural meaning in the output container.

## 🚀 How It Works

1. **User Input:** The user opens `index.html` in a web browser and encounters a clean form with three fields.
2. **Data Entry:** They enter their birth date, select their gender, and choose an ethnic group.
3. **Button Click:** When the "Generate Name" button is clicked, the `generateName()` function is triggered.
4. **Date Parsing:** The JavaScript engine converts the input date string into a JavaScript `Date` object.
5. **Weekday Calculation:** The `toLocaleDateString()` method determines which day of the week they were born on.
6. **Data Lookup:** The function retrieves the corresponding name from the `akanData` object using the group and weekday as keys.
7. **Result Display:** The generated name, birth weekday, and cultural meaning are rendered as HTML in the output container.

## 💻 Technical Details

- **Language:** Vanilla JavaScript (no frameworks required).
- **Date Handling:** Uses the native `Date` object and `toLocaleDateString('en-US', { weekday: 'long' })` for weekday conversion.
- **Error Handling:** Basic validation ensures all form fields are completed before processing.
- **DOM Manipulation:** Direct element selection via `getElementById()` and dynamic HTML injection with `innerHTML`.

## 🎨 User Experience Flow

```
┌─────────────────────────────────────┐
│  User Opens index.html in Browser   │
└────────────┬────────────────────────┘
             ↓
┌─────────────────────────────────────┐
│   Fills Form (Date, Gender, Group)  │
└────────────┬────────────────────────┘
             ↓
┌─────────────────────────────────────┐
│  Clicks "Generate Name" Button      │
└────────────┬────────────────────────┘
             ↓
┌─────────────────────────────────────┐
│  generateName() Validates Input     │
└────────────┬────────────────────────┘
             ↓
┌─────────────────────────────────────┐
│ Calculates Weekday from Birth Date  │
└────────────┬────────────────────────┘
             ↓
┌─────────────────────────────────────┐
│ Looks Up Name in akanData Object    │
└────────────┬────────────────────────┘
             ↓
┌─────────────────────────────────────┐
│ Displays Result with Name & Meaning │
└─────────────────────────────────────┘
```

## 🛠️ Customization & Extension

### Adding More Ethnic Groups
Edit `js/script.js` and add a new entry to the `akanData` object:
```javascript
Ga: {
    Monday: {
        Male: { names: ["Kwadwo"], meaning: "..." },
        Female: { names: ["Adwoa"], meaning: "..." }
    },
    // ... other days
}
```

### Enhancing Names & Meanings
Each name object can include more information:
```javascript
Male: { 
    names: ["Kwadwo", "Kwamin"], 
    meaning: "A lively, energetic person born on Monday",
    cultural_note: "Monday children are often considered fortunate..."
}
```

### Styling Customization
- Modify `css/style.css` to change colors, fonts, or layout.
- Add animations or dark mode support by creating additional CSS rules.
- Adjust the card width, button styling, or background overlays.

## 💡 Key Features

✅ **Fast & Lightweight** – No external dependencies, pure HTML/CSS/JavaScript.  
✅ **Accessible** – Semantic HTML with proper form labels and input types.  
✅ **Responsive** – Works on mobile, tablet, and desktop screens.  
✅ **Extensible** – Easy to add more ethnic groups or cultural data.  
✅ **Educational** – Teaches basic web development concepts (DOM manipulation, event listeners, data structures).  

## 🌍 Cultural Context

The Akan people of Ghana have a rich naming tradition where children are named after the day of the week they were born. This practice:
- Reflects deep cultural values and beliefs about fate and personality traits.
- Helps strengthen community bonds and cultural identity.
- Provides a meaningful connection between an individual and their heritage.

This tool honors that tradition while making it accessible to a global audience.

## 📝 Notes

- The tool performs basic validation and will prompt with a message if any field is left empty.
- The weekday calculation uses the browser's locale setting (`en-US` by default) to ensure accurate day names.
- The current implementation covers Ashanti and Fanti groups; additional groups can be easily added.
- No data is stored or transmitted; all processing happens locally in the browser.

Feel free to fork, adapt, or enhance this project for learning, cultural exploration, or family traditions!
 
