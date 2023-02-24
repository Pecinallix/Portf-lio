const botaoFechar = document.querySelector('[data-modal="fechar"]');
const containerModal = document.querySelector('[data-modal="container"]');

const textHtml = document.querySelector('[data-modal="html-text"]');
const textCss = document.querySelector('[data-modal="css-text"]');
const textJavascript = document.querySelector('[data-modal="javascript-text"]');

const imgHtml = document.querySelector('[data-modal="html-img"]');
const imgCss = document.querySelector('[data-modal="css-img"]');
const imgJavascript = document.querySelector('[data-modal="javascript-img"]');

if (imgHtml && imgCss && imgJavascript) {
  function toggleModal() {
    containerModal.classList.toggle('ativo');
  }

  function clickForaModal(event) {
    if (event.target === containerModal) {
      toggleModal(event);
    }
  }

  function htmlModal() {
    containerModal.classList.add('ativo');
    textCss.classList.add('inativo');
    textJavascript.classList.add('inativo');
    textHtml.classList.remove('inativo');
  }

  function cssModal() {
    containerModal.classList.add('ativo');
    textHtml.classList.add('inativo');
    textJavascript.classList.add('inativo');
    textCss.classList.remove('inativo');
  }

  function javascriptModal() {
    containerModal.classList.add('ativo');
    textCss.classList.add('inativo');
    textHtml.classList.add('inativo');
    textJavascript.classList.remove('inativo');
  }

  imgHtml.addEventListener('click', htmlModal);
  imgCss.addEventListener('click', cssModal);
  imgJavascript.addEventListener('click', javascriptModal);

  botaoFechar.addEventListener('click', toggleModal);
  containerModal.addEventListener('click', clickForaModal);
}
