let main = document.querySelector(".main")
let ProfileEditButton = document.querySelector(".profile__edit-button")
let PopUp = document.querySelector(".Pop-up")
let PopUpButtonClose = document.querySelector(".pop-up__button_close")
let PopUpFieldName = document.querySelector(".pop-up__field_name")
let PopUpFieldJob = document.querySelector('.pop-up__field_job')
let PopUpSaveButton = document.querySelector('.pop-up__button_save')
let Profile = document.querySelector('.profile__info')
let ProfileName = document.querySelector('.profile__text_name')
let ProfileJob = document.querySelector('.profile__text_job')
let formElement = document.querySelector('.pop-up__form')
function openPopup() {
    PopUp.setAttribute('style','display: flex')
    PopUpFieldName.value = ProfileName.textContent;
    PopUpFieldJob.value = ProfileJob.textContent;
}

function closePopup() {
    PopUp.setAttribute('style','display: none')
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    ProfileName.textContent = `${PopUpFieldName.value}`;
    ProfileJob.textContent = `${PopUpFieldJob.value}`;
    closePopup();
}

ProfileEditButton.addEventListener('click', openPopup);
PopUpButtonClose.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);

