const popupEdit = document.querySelector(".popup_edit");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileText = document.querySelector(".profile__text");
const profileName = profileText.querySelector(".profile__name");
const profileStatus = profileText.querySelector(".profile__status");
const popupEditCloseButton = document.querySelector(".popup__close-button_edit");
const popupName = document.querySelector(".popup__input_edit_name");
const popupDescription = document.querySelector(".popup__input_edit_description");
const popupEditForm = document.querySelector(".popup__form_edit");
const popupAdd = document.querySelector(".popup_add");
const popupAddButton = document.querySelector(".profile__add-button");
const popupAddCloseButton = document.querySelector(".popup__close-button_add");
const popupAddForm = document.querySelector(".popup__form_add");
const elementTemplate = document.querySelector("#element").content;
const elements = document.querySelector(".elements");
const popupInputTitle = document.querySelector(".popup__input_title");
const popupInputLink = document.querySelector(".popup__input_link");
const popupPhoto = document.querySelector(".popup_photo");
const popupPhotoCloseButton = document.querySelector(".popup__close-button_photo");
const popupPhotoImage = document.querySelector(".popup__image");
const popupPhotoTitle = document.querySelector(".popup__text");

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

function showPopup(popup) {
    popup.classList.add("popup_opened");
}

function closePopup(popup) {
    popup.classList.remove("popup_opened");
}

function showPopupEdit() {
    showPopup(popupEdit);
    popupName.value = profileName.textContent;
    popupDescription.value = profileStatus.textContent;
}

function showPopupAdd() {
    showPopup(popupAdd);
    popupInputLink.value = null;
    popupInputTitle.value = null;
}

function handleFormEditSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileStatus.textContent = popupDescription.value;
    closePopup(popupEdit);
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
        showPopup(popupPhoto);
        popupPhotoImage.src= evt.target.src;
        popupPhotoImage.alt = evt.target.alt;
        popupPhotoTitle.textContent = cards.name;
    })
    elements.append(element);
})

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
        showPopup(popupPhoto);
        popupPhotoImage.src= evt.target.src;
        popupPhotoImage.alt = evt.target.alt;
        popupPhotoTitle.textContent = element.querySelector(".element__name").textContent;
    })
    elements.prepend(element);
}


function handleFormAddSubmit(evt) {
    evt.preventDefault();
    ElementAdd();
    closePopup(popupAdd);
}

popupEditCloseButton.addEventListener("click", () => closePopup(popupEdit));
profileEditButton.addEventListener("click", showPopupEdit);
popupEditForm.addEventListener('submit', handleFormEditSubmit);
popupAddButton.addEventListener("click", showPopupAdd);
popupAddCloseButton.addEventListener("click", () => closePopup(popupAdd));
popupAddForm.addEventListener('submit', handleFormAddSubmit);
popupPhotoCloseButton.addEventListener("click", () => closePopup(popupPhoto));