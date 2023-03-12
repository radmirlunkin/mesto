let popUp = document.querySelector('.popup')
let profileEditButton = document.querySelector('.profile__edit-button')
let popUpOpened = document.querySelector('.popup_opened')
let popUpButtonClose = document.querySelector('.popup__close-button')
let popUpFieldName = document.querySelector('.popup__input-name')
let popUpFieldJob = document.querySelector('.popup__input-job')
let popUpSaveButton = document.querySelector('.popup__save-button')
let profileName = document.querySelector('.profile__name')
let profileJob = document.querySelector('.profile__job')
let formElement = document.querySelector('.popup__form')
function openPopup() {
    popUp.classList.add('popup_opened');
    popUpFieldName.value = profileName.textContent;
    popUpFieldJob.value = profileJob.textContent;
}

function closePopup() {
    popUp.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = popUpFieldName.value;
    profileJob.textContent = popUpFieldJob.value;
    closePopup();
}

profileEditButton.addEventListener('click', openPopup);
popUpButtonClose.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);