let popup = document.querySelector(".popup");
let profileEditButton = document.querySelector(".profile__edit-button");
let profileText = document.querySelector(".profile__text");
let profileName = profileText.querySelector(".profile__name");
let profileStatus = profileText.querySelector(".profile__status");
let popupCloseButton = popup.querySelector(".popup__close-button");
let popupName = document.querySelector(".popup__input_name");
let popupDescription = popup.querySelector(".popup__input_description");
let popupForm = popup.querySelector(".popup__form");
function showPopup() {
    popup.classList.add("popup_opened");
    popupName.value = profileName.textContent;
    popupDescription.value = profileStatus.textContent;
}
function closePopup() {
    popup.classList.remove("popup_opened");
}
function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileStatus.textContent = popupDescription.value;
    closePopup();
}
popupCloseButton.addEventListener("click", closePopup);
profileEditButton.addEventListener("click", showPopup);
popupForm.addEventListener('submit', handleFormSubmit); 