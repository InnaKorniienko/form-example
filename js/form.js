const formEl = document.querySelector('.form');
console.log(formEl);

const email = formEl.email.value;
console.log(email);

const STORAGE_KEY = 'form-state';
const formData = {};

formEl.addEventListener('input', onFormInput);
formEl.addEventListener('submit', onFormSubmit);

updateForm();

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    console.log(formData);
};


function onFormSubmit(e) {
      e.preventDefault();
      const {
          elements: { name, email, tel }
        } = e.target;

        if (name.value.length < 2) {
          return window.alert("Name value must be more than 2 symbols")
        } else             
        if (name.value ==="" || email.value === "" || tel.value === "") {
          return window.alert("Please fill in all the fields!");
        };
      console.log({'Name': name.value, 'Email': email.value, 'Tel': tel.value});
      window.alert("Form submitted successfully");
      formEl.reset();
      localStorage.removeItem(STORAGE_KEY);
      
  };

function updateForm() {
    if (localStorage.getItem(STORAGE_KEY) === null) {
return
    }
    const savedForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
      Object.entries(savedForm).forEach(([ name, value ]) => {
        formData[name] = value;
        formEl.elements[name].value = value;
      });
};