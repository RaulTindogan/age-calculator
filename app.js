const submitBtn = document.getElementById('submit-btn')
const yearInput = document.getElementById('year-input')
const monthInput = document.getElementById('month-input')
const dayInput = document.getElementById('day-input')
const ageSpans = document.querySelectorAll('.age-span')

// It will start to day input
const inputField = document.querySelectorAll('.user-inputs')
const inputLabels = document.querySelectorAll('.date-label')
const inputErrors = document.querySelectorAll('.error-container')

const errorMessages = [
    "Must be a valid date",
    "This input is required",
    "Must be a valid day",
    "Must be a valid month",
    "Must be in the past"
]

function dateValidation (year, month, day) {
    month-=1

    let date = new Date(year, month, day)
    let inputDate = new Date(date).getTime()
    let currentDate = new Date().getTime()
    let currentYear = new Date().getFullYear()
    let currentMonth = new Date().getMonth()
    let currentDay = new Date().getDay()

    if(inputDate === '' || isNaN(year) || isNaN(month) || isNaN(day) || inputDate > currentDate || month < 0 || month > 11 || day < 1 || day > 31){

        if(!day) {
            inputErrors[0].innerHTML = errorMessages[1];
            inputLabels[0].classList.add('date-label-error')
            inputField[0].classList.add('user-inputs-error')
        } else {
            if(day < 1 || day > 31 || month == currentMonth && day > currentDay) {
                if(day > currentDay) {
                    inputErrors[0].innerHTML = errorMessages[4];
                    inputLabels[0].classList.add('date-label-error')
                    inputField[0].classList.add('user-inputs-error')
                } else {
                    inputErrors[0].innerHTML = errorMessages[2];
                    inputLabels[0].classList.add('date-label-error')
                    inputField[0].classList.add('user-inputs-error')
                }
            }
        }
        
        if(!month) {
            inputErrors[1].innerHTML = errorMessages[1];
            inputLabels[1].classList.add('date-label-error')
            inputField[1].classList.add('user-inputs-error')
        } else {
            if(month < 0 || month > 11 || month > currentMonth) {
                if(month > currentMonth) {
                    inputErrors[1].innerHTML = errorMessages[3];
                    inputLabels[1].classList.add('date-label-error')
                    inputField[1].classList.add('user-inputs-error')
                } else {
                    inputErrors[1].innerHTML = errorMessages[3];
                    inputLabels[1].classList.add('date-label-error')
                    inputField[1].classList.add('user-inputs-error')
                }           
            } 
        }

        if(!year) {
            inputErrors[2].innerHTML = errorMessages[1];
            inputLabels[2].classList.add('date-label-error')
            inputField[2].classList.add('user-inputs-error')
        } else {
            if(year < 1900 || year > currentYear) {
                inputErrors[2].innerHTML = errorMessages[4];
                inputLabels[2].classList.add('date-label-error')
                inputField[2].classList.add('user-inputs-error')
            } 
        }
        


        
    } else if (date.getFullYear() === year && date.getMonth() === month && date.getDate() === day) {
        let milliseconds = currentDate - inputDate
        
        let minute = 1000 * 60
        let hour = minute * 60
        let day = hour * 24 
        let month = day * 31
        let year = day * 365

        let computedYear = Math.floor(milliseconds / year)
        let computedMonth = Math.floor((milliseconds % year)/month)
        let computedDays = Math.floor(((milliseconds % year) % month) / day)
        
        ageSpans[0].innerHTML = computedYear
        ageSpans[1].innerHTML = computedMonth
        ageSpans[2].innerHTML = computedDays

    } else {
        for(let i = 0; i<3; i++) {
            inputErrors[i].innerHTML = errorMessages[0]
            inputLabels[i].classList.add('date-label-error')
            inputField[i].classList.add('user-inputs-error')
        }   
    }
}
 


submitBtn.addEventListener('click', ()=>{
    let year = parseInt(yearInput.value)
    let month = parseInt(monthInput.value)
    let day = parseInt(dayInput.value)

    console.log(dateValidation(year, month, day))
}) 