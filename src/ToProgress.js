!(function(w){
  w.TopProgress = function(selector,opt){
    this.options = {
      id: 'top-progress-bar',
      color: '#F44336',
      height: '6px',
      duration: '.2s'
    }

    if(opt && typeof opt === 'object'){
      for(var key in opt){
        this.options[key] = opt[key]
      }
    }

    this.progressBar = document.createElement('div');
    this.progressBar.id = this.options.id;

    var els = document.querySelectorAll(selector);
    for (var i = 0; i < els.length; i++) {
      els[i].appendChild(this.progressBar);
    };

    // init progress bar style
    this.progressBar.setCSS = function(style){
      for(var property in style){
        this.style[property] = style[property];
      }
    }
    this.progressBar.setCSS({
      "position": "absolute",
      "top": "0",
      "left": "0",
      "right": "0",
      "background-color": this.options.color,
      "height": this.options.height,
      "width": "0%",
      "-webkit-transition": "width " + this.options.duration
    })

  }

  TopProgress.prototype.getProgress = function(){
    return parseInt(this.progressBar.style.width);
  }

  TopProgress.prototype.setProgress = function(width){
    if (width > 100) {
      this.progressBar.style.width = '100%';
    } else {
      this.progressBar.style.width = width + '%';
    }
  }

  TopProgress.prototype.increase = function(width){
    var currentWidth = this.getProgress();
    if (currentWidth + width > 100) {
      this.progressBar.style.width = '100%';
    } else {
      this.progressBar.style.width = currentWidth + width + '%';
    }
  }

  TopProgress.prototype.decrease = function(width){
    var currentWidth = this.getProgress();
    if (currentWidth - width < 0) {
      this.progressBar.style.width = '0%';
    } else {
      this.progressBar.style.width = currentWidth - width + '%';
    }
  }

  TopProgress.prototype.hide = function(){
    this.progressBar.style.display = 'none';
  }

  TopProgress.prototype.show = function(){
    this.progressBar.style.display = 'inline';
  }
})(window)
