function toggleMode() {
 const html = document.documentElement
 html.classList.toggle('claro')

 const img = document.querySelector("#profile img")
 if(html.classList.contains('claro')){
    img.setAttribute('src', './avatarclaro.png')
    img.setAttribute('alt', 'Homem sorrindo com Oculos de sol.')
 }
    else
{
    img.setAttribute('src', './avatar.png')
    img.setAttribute('alt', 'Homem sorrindo com Oculos Transparentes.')
}
}