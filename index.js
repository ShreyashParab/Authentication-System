function home(){
    document.getElementById('sign-up').style.display = 'none'
    document.getElementById('log-in').style.display = 'none'
    document.getElementById('jumbotron-display').style.display = 'block'
    document.getElementById('home-btn').classList.add('active')
    document.getElementById('login-btn').classList.remove('active')
    document.getElementById('signup-btn').classList.remove('active')
}

function signUp(){
    document.getElementById('sign-up').style.display = 'block'
    document.getElementById('log-in').style.display = 'none'
    document.getElementById('jumbotron-display').style.display = 'none'
    document.getElementById('signup-btn').classList.add('active')
    document.getElementById('login-btn').classList.remove('active')
    document.getElementById('home-btn').classList.remove('active')
}

function login(){
    document.getElementById('log-in').style.display = 'block'
    document.getElementById('sign-up').style.display = 'none'
    document.getElementById('jumbotron-display').style.display = 'none'
    document.getElementById('login-btn').classList.add('active')
    document.getElementById('signup-btn').classList.remove('active')
    document.getElementById('home-btn').classList.remove('active')
}