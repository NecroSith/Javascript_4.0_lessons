'use strict';

class options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
        this.createRect = function() {
            let rect = document.createElement('div');
            rect.style.cssText = `height: ${this.height}px; \
            width: ${this.width}px; \
            background: ${this.bg}; \
            font-size: ${this.fontSize}px; \
            text-align: ${this.textAlign};`

            document.body.appendChild(rect);
        }
    }
}

let rectangle = new options(200, 400, '#dadada', 16, 'center');
rectangle.createRect();