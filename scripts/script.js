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
const popupContainer = document.querySelector(".popup__container");
const popupSubmitButton = document.querySelector(".popup__submit-button");
const inactiveButtonClass = document.querySelector(".popup__submit-button_inactive");
const inputErrorClass = document.querySelector(".popup__input-error");
const errorClass = document.querySelector(".popup__input-error_visible");

const validationConfig = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit-button",
    inactiveButtonClass: "popup__submit-button_inactive",
    activeButtonClass: "popup__submit-button",
    inputErrorClass: "popup__input_type-error",
    errorClass: "popup__input-error_visible"
};

const initialCards = [
    {
        name: '??????????',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: '?????????????????????? ??????????????',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: '??????????????',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: '????????????????',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: '???????????????????????? ??????????',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: '????????????',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

function closeByEscape(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
    }
  }


function closePopup(popup) {
    popup.classList.remove("popup_opened");
    document.removeEventListener('keydown', closeByEscape); 
}

function closePopupAbroad (popup) {
    popup.addEventListener("mousedown", (e) => {
        if (!e.target.closest(".popup *")) {
            closePopup(popup);
        }
    })
}

closePopupAbroad (popupEdit);
closePopupAbroad (popupAdd);
closePopupAbroad (popupPhoto);

function showPopup(popup) {
    popup.classList.add("popup_opened");
    document.addEventListener('keydown', closeByEscape); 
}

function showPopupEdit() {
    showPopup(popupEdit);
    popupName.value = profileName.textContent;
    popupDescription.value = profileStatus.textContent;
    setButtonState(popupEdit);
    setErrorState(popupEdit);
}

function showPopupAdd() {
    showPopup(popupAdd);
    setButtonState(popupAdd);
}

function handleFormEditSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileStatus.textContent = popupDescription.value;
    closePopup(popupEdit);
}

function createCard(link, title) {
    const element = elementTemplate.querySelector(".element").cloneNode(true);
    element.querySelector(".element__name").textContent = title;
    const image = element.querySelector(".element__image");
    image.src = link;
    image.alt = `????????: ${title}`;
    element.querySelector(".element__like").addEventListener("click", function (evt) {
        evt.target.classList.toggle("element__like_active");
    })
    element.querySelector(".element__delete").addEventListener("click", function (evt) {
        evt.target.closest(".element").remove();
    })
    image.addEventListener("click", function (evt) {
        showPopup(popupPhoto);
        popupPhotoImage.src = evt.target.src;
        popupPhotoImage.alt = evt.target.alt;
        popupPhotoTitle.textContent = title;
    })

    return element;
}

initialCards.forEach(function (cards) {
    elements.append(createCard(cards.link, cards.name));
})


function handleFormAddSubmit(evt) {
    evt.preventDefault();
    elements.prepend(createCard(popupInputLink.value, popupInputTitle.value));
    closePopup(popupAdd);
    evt.target.reset();
}

popupEditCloseButton.addEventListener("click", () => closePopup(popupEdit));
profileEditButton.addEventListener("click", showPopupEdit);
popupEditForm.addEventListener('submit', handleFormEditSubmit);
popupAddButton.addEventListener("click", showPopupAdd);
popupAddCloseButton.addEventListener("click", () => closePopup(popupAdd));
popupAddForm.addEventListener('submit', handleFormAddSubmit);
popupPhotoCloseButton.addEventListener("click", () => closePopup(popupPhoto));

enableValidation(validationConfig);