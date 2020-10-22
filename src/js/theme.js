const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


const refs = {
  input: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
}

refs.input.addEventListener('change', onClickInput)
readingLocalStorage()


function readingLocalStorage() {
  const userSettings = localStorage.getItem('UserTheme');
  console.log(userSettings);

  if (!userSettings) {
    localStorage.setItem('UserTheme', Theme.LIGHT);
    return;
  } else if (userSettings === Theme.LIGHT) {
    onLightTheme();
  } else if (userSettings === Theme.DARK) {
    onDarkTheme();
  }

  
};


function onClickInput() {
  const userSettings = localStorage.getItem('UserTheme');
  
  if (userSettings === Theme.LIGHT) {
    onDarkTheme();
  } else if (userSettings === Theme.DARK) {
    onLightTheme();
  }
};


function onLightTheme() {
  refs.body.classList.add(Theme.LIGHT);
  refs.body.classList.remove(Theme.DARK);
  refs.input.checked = false;

  localStorage.setItem('UserTheme', Theme.LIGHT);
};

function onDarkTheme() {
  refs.body.classList.add(Theme.DARK);
  refs.body.classList.remove(Theme.LIGHT);
  refs.input.checked = true;
  
  localStorage.setItem('UserTheme', Theme.DARK);
}