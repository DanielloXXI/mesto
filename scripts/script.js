let popupEdit = document.querySelector(".popup__edit");
let profileEditButton = document.querySelector(".profile__edit-button");
let profileText = document.querySelector(".profile__text");
let profileName = profileText.querySelector(".profile__name");
let profileStatus = profileText.querySelector(".profile__status");
let popupEditCloseButton = popupEdit.querySelector(".popup__edit_close-button");
let popupName = document.querySelector(".popup__edit__input_name");
let popupDescription = popupEdit.querySelector(".popup__edit__input_description");
let popupEditForm = popupEdit.querySelector(".popup__edit_form");
let popupAdd = document.querySelector(".popup_add");
let popupAddButton = document.querySelector(".profile__add-button");
let popupAddCloseButton = document.querySelector(".popup_add__close-button");
let popupAddForm = document.querySelector(".popup_add__form");
let elementTemplate = document.querySelector("#element").content;
let elements = document.querySelector(".elements");
let popupInputTitle = document.querySelector(".popup__input_title");
let popupInputLink = document.querySelector(".popup__input_link");
let popupPhoto = document.querySelector(".popup__photo");
let popupPhotoCloseButton = document.querySelector(".popup__photo_close-button");
let popupPhotoImage = document.querySelector(".popup__photo__image");
let popupPhotoTitle = document.querySelector(".popup__photo__title");

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
function showPopupPhoto() {
    popupPhoto.classList.add("popup_opened");
}


initialCards.forEach(function (cards) {
    const element = elementTemplate.cloneNode(true);
    element.querySelector(".element__name").textContent = cards.name;
    element.querySelector(".element__image").src = cards.link;
    element.querySelector(".element__image").alt = `фото: ${cards.name}`;
    element.querySelector(".element__like").addEventListener("click", function (evt) {
        evt.target.classList.toggle("element__like_active");
    })
    element.querySelector(".element__delete").addEventListener("click", function (evt) {
        evt.target.parentElement.remove();
    })
    element.querySelector(".element__image").addEventListener("click", function (evt) {
        showPopupPhoto();
        popupPhotoImage.src= evt.target.src;
        popupPhotoTitle.textContent = cards.name;
    })
    elements.append(element);
})

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
    popupInputLink.value = null;
    popupInputTitle.value = null;
}

function closePopupAdd() {
    popupAdd.classList.remove("popup_opened");
}


function closePopupPhoto() {
    popupPhoto.classList.remove("popup_opened");
}



function ElementAdd() {
    const element = elementTemplate.querySelector(".element").cloneNode(true);
    element.querySelector(".element__name").textContent = popupInputTitle.value;
    element.querySelector(".element__image").src = popupInputLink.value;
    element.querySelector(".element__image").alt = `фото: ${popupInputTitle.value}`;
    element.querySelector(".element__like").addEventListener("click", function (evt) {
        evt.target.classList.toggle("element__like_active");
    })
    element.querySelector(".element__delete").addEventListener("click", function (evt) {
        evt.target.parentElement.remove();
    })
    element.querySelector(".element__image").addEventListener("click", function (evt) {
        showPopupPhoto();
        popupPhotoImage.src= evt.target.src;
        popupPhotoTitle.textContent = element.querySelector(".element__name").textContent;
    })
    elements.prepend(element);
}

function handleFormAddSubmit(evt) {
    evt.preventDefault();
    ElementAdd();
    closePopupAdd();
}


popupEditCloseButton.addEventListener("click", closePopupEdit);
profileEditButton.addEventListener("click", showPopupEdit);
popupEditForm.addEventListener('submit', handleFormEditSubmit);
popupAddButton.addEventListener("click", showPopupAdd);
popupAddCloseButton.addEventListener("click", closePopupAdd);
popupAddForm.addEventListener('submit', handleFormAddSubmit);
popupPhotoCloseButton.addEventListener("click", closePopupPhoto);