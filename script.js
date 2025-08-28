// ==UserScript==
// @name         Excalidraw-element-mover
// @namespace    http://tampermonkey.net/
// @version      2025-08-26
// @description  меняет интерфейс Excalidraw для удобства работы на интерактивной доске
// @author       taf.f11@ya.ru
// @match        https://excalidraw.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=excalidraw.com
// @grant        none
// ==/UserScript==


function MoveElements() {
    document.querySelector('.excalidraw-button.collab-button').parentNode.remove(); //кнопка поделиться
    document.querySelector('.encrypted-icon.tooltip').parentNode.parentNode.remove(); // иконка защиты
    document.querySelector('.help-icon').parentNode.parentNode.remove(); // кнопка помощи
    // переносим панель инструментов вниз вправо
    let mainSection = document.querySelector('.shapes-section');
    mainSection.style.position = "absolute";
    mainSection.style.right = "0px";
    mainSection.style.bottom = "-5px";

}

window.onload = function () { setTimeout(MoveElements, 2000); };// ждём пару секунд чтобы всё прогрузилось
