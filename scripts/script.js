let popupEdit = document.querySelector(".popup__edit");
let profileEditButton = document.querySelector(".profile__edit-button");
let profileText = document.querySelector(".profile__text");
let profileName = profileText.querySelector(".profile__name");
let profileStatus = profileText.querySelector(".profile__status");
let popupEditCloseButton = popupEdit.querySelector(".popup__edit_close-button");
let popupName = document.querySelector(".popup__input_name");
let popupDescription = popupEdit.querySelector(".popup__input_description");
let popupEditForm = popupEdit.querySelector(".popup__edit_form");
let popupAdd = document.querySelector(".popup__add");
let popupAddButton = document.querySelector(".profile__add-button");
let popupAddCloseButton = document.querySelector(".popup__add_close-button");
let popupAddForm = document.querySelector(".popup__add_form");
let elementTemplate = document.querySelector("#element").content;
let elements = document.querySelector(".elements");
let popupInputTitle = document.querySelector(".popup__input_title");
let popupInputLink = document.querySelector(".popup__input_link");

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

initialCards.forEach(function (cards) {
    const element = elementTemplate.cloneNode(true);
    element.querySelector(".element__name").textContent = cards.name;
    element.querySelector(".element__image").src = cards.link;
    element.querySelector(".element__image").alt = `фото: ${cards.name}`;
    element.querySelector(".element__like").addEventListener("click", function (evt) {
        evt.target.classList.toggle("element__like_active");
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
}

function closePopupAdd() {
    popupAdd.classList.remove("popup_opened");
}

function ElementAdd() {
    const element = elementTemplate.querySelector(".element").cloneNode(true);
    element.querySelector(".element__name").textContent = popupInputTitle.value;
    element.querySelector(".element__image").src = popupInputLink.value;
    element.querySelector(".element__image").alt = `фото: ${popupInputTitle.value}`;
    element.querySelector(".element__like").addEventListener("click", function (evt) {
        evt.target.classList.toggle("element__like_active");
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