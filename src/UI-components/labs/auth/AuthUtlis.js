export var users = []
export var currentUser = null

export function loadUsers(){
    if (!localStorage.getItem("authlab"))
        localStorage.setItem("authlab", JSON.stringify([
            {
                username: "user1",
                password: "user1",

                f_name: "User",
                l_name: "1",

                phone: "88005553535",
                birthday: "11.09.2001",
                birthday_place: "LA"

            },
            {
                username: "user2",
                password: "password",

                f_name: "Василий",
                l_name: "Авнский",

                phone: "89259753553",
                birthday: "19.09.1999",
                birthday_place: "Москва"

            },
            {
                username: "taufik",
                password: "qwerty",

                f_name: "Просто",
                l_name: "Гений",

                phone: "89259753553",
                birthday: "19.09.1999",
                birthday_place: "Москва"

            }
        ]))
    users = JSON.parse(localStorage.getItem("authlab"))

}


export function saveUsers(){
    localStorage.setItem("authlab", JSON.stringify(users))
}

export function login(login, pass){
    if (users.length===0) loadUsers()
    currentUser = users.find( user =>user.username == login && user.password == pass )
    return currentUser
}

export function setPassword(pass){
    currentUser.password = pass;
    users = [...users.filter((user) => user.username!==currentUser.username), currentUser];
    saveUsers()
}