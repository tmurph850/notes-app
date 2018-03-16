import axios from 'axios';

let theTarget = document.getElementsByClassName("noteButton");

const createNew = (noteTitle, noteBody) => {
  const notePost = axios({
    method: "post",
    url: `http://localhost:3000/`,
    responseType: "json",
    data: {
      noteTitle: noteTitle,
      noteBody: noteBody
    }
  });
  notePost(noteTitle, noteBody).then((response) => {
    console.log(response);
  })
};

const handleClick = () => {
  let bodyVal = theTarget[0].value;

  createNew(bodyVal, bodyVal);
};
