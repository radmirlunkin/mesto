let main = document.querySelector('.main')
let ProfileEditButton = document.querySelector('.profile__edit-button')

let PopUpOpened = document.querySelector('.popup_opened')
let PopUpButtonClose = document.querySelector('.popup__close-button')
let PopUpFieldName = document.querySelector('.popup__input-name')
let PopUpFieldJob = document.querySelector('.popup__input-job')
let PopUpSaveButton = document.querySelector('.popup__save-button')
let ProfileName = document.querySelector('.profile__name')
let ProfileJob = document.querySelector('.profile__job')
let formElement = document.querySelector('.popup__form')
function openPopup() {
    PopUpOpened.setAttribute('style','display: flex')
    PopUpFieldName.value = ProfileName.textContent;
    PopUpFieldJob.value = ProfileJob.textContent;
}

function closePopup() {
    PopUpOpened.setAttribute('style','display: none')
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    ProfileName.textContent = PopUpFieldName.value;
    ProfileJob.textContent = PopUpFieldJob.value;
    closePopup();
}

ProfileEditButton.addEventListener('click', openPopup);
PopUpButtonClose.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);