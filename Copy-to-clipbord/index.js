function copyText(htmlElement) {

    if (!htmlElement) {
        return;
    }

    let element = htmlElement.innerText

    let inputElement = document.createElement('input')

    inputElement.setAttribute('value', element)

    document.body.appendChild(inputElement)

    inputElement.select();

    document.execCommand('copy')

    inputElement.parentElement.removeChild(inputElement)


}

document.querySelector('#copy-text-btn').onclick = function () {
    copyText(document.querySelector('#text'))
}
