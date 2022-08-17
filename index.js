function homePage(){
    document.getElementById('sign-up').style.display = 'none'
    document.getElementById('log-in').style.display = 'none'
    document.getElementById('jumbotron-display').style.display = 'block'
    document.getElementById('home-btn').classList.add('active')
    document.getElementById('login-btn').classList.remove('active')
    document.getElementById('signup-btn').classList.remove('active')
}

function signUpPage(){
    document.getElementById('sign-up').style.display = 'block'
    document.getElementById('log-in').style.display = 'none'
    document.getElementById('jumbotron-display').style.display = 'none'
    document.getElementById('signup-btn').classList.add('active')
    document.getElementById('login-btn').classList.remove('active')
    document.getElementById('home-btn').classList.remove('active')
}

function loginPage(){
    document.getElementById('log-in').style.display = 'block'
    document.getElementById('sign-up').style.display = 'none'
    document.getElementById('jumbotron-display').style.display = 'none'
    document.getElementById('login-btn').classList.add('active')
    document.getElementById('signup-btn').classList.remove('active')
    document.getElementById('home-btn').classList.remove('active')
}

function resetSignupFields(){
    document.getElementById('firstName').value = ''
    document.getElementById('lastName').value = ''
    document.getElementById('email').value = ''
    document.getElementById('phoneNumber').value = ''
    document.getElementById('password').value = ''
    document.getElementById('confirmPassword').value = ''
}

function resetLoginFields(){
    document.getElementById('loginEmail').value = ''
    document.getElementById('loginPassword').value = ''
}

const dbUsers = []

function signup(){
    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let email = document.getElementById('email').value
    let phoneNumber = document.getElementById('phoneNumber').value
    let password = document.getElementById('password').value

    let userDetails = {
        firstName,
        lastName,
        email,
        phoneNumber,
        password
    }
    dbUsers.push(userDetails)
    console.log(dbUsers)
    resetSignupFields()
}

function login(){
    let loginEmail  = document.getElementById('loginEmail').value
    let loginPassword = document.getElementById('loginPassword').value
    let authenticateUser = dbUsers.find(function(element){
        if(element.email === loginEmail && element.password === loginPassword)
        return element
    })
    console.log(authenticateUser)
    
    resetLoginFields()
}   

