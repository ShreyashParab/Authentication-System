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

let encryptionRule = {
    'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
    'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
    'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
    'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
    'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
    'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
    'Y': 'L', 'Z': 'M',
    'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q',
    'e': 'r', 'f': 's', 'g': 't', 'h': 'u',
    'i': 'v', 'j': 'w', 'k': 'x', 'l': 'y',
    'm': 'z', 'n': 'a', 'o': 'b', 'p': 'c',
    'q': 'd', 'r': 'e', 's': 'f', 't': 'g',
    'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k',
    'y': 'l', 'z': 'm',
    '0': '5', '1': '6', '2': '7', '3': '8',
    '4': '9', '5': '0', '6': '1', '7': '2',
    '8': '3', '9': '4',
    '!': '#', '$': '%', '&': '+', '-': '@',
    '': '~', '#': '!', '%': '$', '+': '&',
    '@': '-', '~': ''
  }

const dbUsers = []

function signup(){
    document.getElementById('alert-success-signup-msg').style.display = 'none'
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
    document.getElementById('alert-success-signup-msg').style.display = 'block'
    resetSignupFields()
    // return
}
    
function login(){
    let loginEmail  = document.getElementById('loginEmail').value
    let loginPassword = document.getElementById('loginPassword').value
    let authenticateUser = dbUsers.find(function(user){
        if(user.email === loginEmail && user.password === loginPassword)
        return user
    })
    if(authenticateUser){
        // console.log('Access granted!')
        document.getElementById('alert-success-login-msg').style.display = 'block'
        document.getElementById('alert-failure-login-msg').style.display = 'none'
    }
    else{
        // console.log('Access denied!')
        document.getElementById('alert-success-login-msg').style.display = 'none'
        document.getElementById('alert-failure-login-msg').style.display = 'block'
    }
    resetLoginFields()
}   

