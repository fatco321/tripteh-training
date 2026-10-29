document.body.dataset.embedded = String(window.self !== window.top);
window.iFrameResizer = {
  heightCalculationMethod: function () {
    return Math.ceil(document.body.getBoundingClientRect().height);
  }
};
