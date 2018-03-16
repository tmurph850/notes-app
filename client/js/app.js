import axios from 'axios';

let theTarget = document.getElementsByClassName("noteButton");
let theInput = document.getElementsByClassName("noteInput");

const createNew = (noteTitle, noteBody) => {
  const notePost = axios({
    method: "post",
    url: `http://localhost:3000/create`,
    responseType: "json",
    data: {
      noteTitle: noteTitle,
      noteBody: noteBody
    }
  });

  notePost.then((response) => {
    console.log(response);
  })
};

const handleClick = () => {
  let bodyVal = theInput[0].value;

  console.log(bodyVal);
  createNew(bodyVal, bodyVal);
};

theTarget[0].addEventListener('click', handleClick);
