let popup = document.querySelector(".popup");
let profileEditButton = document.querySelector(".profile__edit_button");
let profileText = document.querySelector(".profile__text");
let profileName = profileText.querySelector(".profile__name");
let profileStatus = profileText.querySelector(".profile__status");
let popupCloseButton = popup.querySelector(".popup__close_button");
let popupName = document.querySelector(".popup__name");
let popupDescription = popup.querySelector(".popup__description");
let popupForm = popup.querySelector(".popup__form");
let popupSubmitButton = popup.querySelector(".popup__submit_button");

function showPopup() {
    popup.classList.add("popup_opened");
    popupName.value = profileName.textContent;
    popupDescription.value = profileStatus.textContent;
}
profileEditButton.addEventListener("click", showPopup);
function closePopup() {
    popup.classList.remove("popup_opened");
}
popupCloseButton.addEventListener("click", closePopup);
function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileStatus.textContent = popupDescription.value;
    popup.classList.remove("popup_opened");
}
popupForm.addEventListener('submit', handleFormSubmit); 