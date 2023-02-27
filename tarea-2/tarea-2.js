const $form = document.querySelector("#user-info");

document.querySelector("#information-submit").onclick = function () {
  const userName = $form["user-name"].value;
  const lastName = $form["last-name"].value;
  const age = $form.age.value;
  displayUserInformation(userName, lastName, age);
  return false;
};

function displayUserInformation(userName, lastName, age) {
  let textarea = $form.textarea;
  if (validateUserInformation(userName, lastName, age) !== "userInformationValidated") {
    return;
  }
  textarea.textContent = `${userName}\n${lastName}\n${age}`;
  $userInfo = textarea.textContent;
  return $userInfo;
}
