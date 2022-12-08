let popupEdit = document.querySelector(".popup__edit");
let profileEditButton = document.querySelector(".profile__edit-button");
let profileText = document.querySelector(".profile__text");
let profileName = profileText.querySelector(".profile__name");
let profileStatus = profileText.querySelector(".profile__status");
let popupCloseButton = popupEdit.querySelector(".popup__close-button");
let popupName = document.querySelector(".popup__input_name");
let popupDescription = popupEdit.querySelector(".popup__input_description");
let popupEditForm = popupEdit.querySelector(".popup__edit_form");
let popupAdd = document.querySelector(".popup__add");
let popupAddButton = document.querySelector(".profile__add-button");
let popupAddCloseButton = document.querySelector(".popup__add_close-button");
let popupAddForm = document.querySelector(".popup__add_form");

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];



function showPopupEdit() {
    popupEdit.classList.add("popup_opened");
    popupName.value = profileName.textContent;
    popupDescription.value = profileStatus.textContent;
}

function closePopupEdit() {
    popupEdit.classList.remove("popup_opened");
}

function handleFormEditSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileStatus.textContent = popupDescription.value;
    closePopupEdit();
}

function showPopupAdd() {
    popupAdd.classList.add("popup_opened");
}

function closePopupAdd() {
    popupAdd.classList.remove("popup_opened");
}

function handleFormAddSubmit(evt) {
    evt.preventDefault();
    closePopupAdd();
}

popupCloseButton.addEventListener("click", closePopupEdit);
profileEditButton.addEventListener("click", showPopupEdit);
popupEditForm.addEventListener('submit', handleFormEditSubmit);
popupAddButton.addEventListener("click", showPopupAdd);
popupAddCloseButton.addEventListener("click", closePopupAdd);
popupAddForm.addEventListener('submit', handleFormAddSubmit);