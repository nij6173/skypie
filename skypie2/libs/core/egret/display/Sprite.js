/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var egret;
(function (egret) {
    /**
     * @extends egret.DisplayObjectContainer
     * @class egret.Sprite
     * @classdesc Sprite 类是基本显示列表构造块：一个可显示图形并且也可包含子项的显示列表节点。Sprite 对象与影片剪辑类似，但没有时间轴。Sprite 是不需要时间轴的对象的相应基类。例如，Sprite 将是通常不使用时间轴的用户界面 (UI) 组件的逻辑基类。
     * @link http://docs.egret-labs.org/post/manual/displayobj/aboutdisplayobj.html 显示对象的基本概念
     */
    var Sprite = (function (_super) {
        __extends(Sprite, _super);
        /**
         * 创建一个 egret.Sprite 对象
         */
        function Sprite() {
            _super.call(this);
            this._graphics = null;
        }
        Object.defineProperty(Sprite.prototype, "graphics", {
            /**
             * 获取 Sprite 中的 Graphics 对象。
             * 指定属于此 sprite 的 Graphics 对象，在此 sprite 中可执行矢量绘图命令。
             * @member {egret.Graphics} egret.Sprite#graphics
             */
            get: function () {
                if (!this._graphics) {
                    this._graphics = new egret.Graphics();
                    this.needDraw = true;
                }
                return this._graphics;
            },
            enumerable: true,
            configurable: true
        });
        Sprite.prototype._render = function (renderContext) {
            if (this._graphics)
                this._graphics._draw(renderContext);
            _super.prototype._render.call(this, renderContext);
        };
        Sprite.prototype._measureBounds = function () {
            var minX = 0, maxX = 0, minY = 0, maxY = 0;
            var l = this._children.length;
            for (var i = 0; i < l; i++) {
                var child = this._children[i];
                if (!child._visible) {
                    continue;
                }
                var childBounds = child.getBounds(egret.Rectangle.identity, false);
                var childBoundsX = childBounds.x;
                var childBoundsY = childBounds.y;
                var childBoundsW = childBounds.width;
                var childBoundsH = childBounds.height;
                var childMatrix = child._getMatrix();
                var bounds = egret.DisplayObject.getTransformBounds(egret.Rectangle.identity.initialize(childBoundsX, childBoundsY, childBoundsW, childBoundsH), childMatrix);
                var x1 = bounds.x, y1 = bounds.y, x2 = bounds.width + bounds.x, y2 = bounds.height + bounds.y;
                if (x1 < minX || i == 0) {
                    minX = x1;
                }
                if (x2 > maxX || i == 0) {
                    maxX = x2;
                }
                if (y1 < minY || i == 0) {
                    minY = y1;
                }
                if (y2 > maxY || i == 0) {
                    maxY = y2;
                }
            }
            if (this._graphics) {
                var graphicsBounds = this._graphics._measureBounds();
                var x1 = graphicsBounds.x, y1 = graphicsBounds.y, x2 = graphicsBounds.width + graphicsBounds.x, y2 = graphicsBounds.height + graphicsBounds.y;
                if (x1 < minX || i == 0) {
                    minX = x1;
                }
                if (x2 > maxX || i == 0) {
                    maxX = x2;
                }
                if (y1 < minY || i == 0) {
                    minY = y1;
                }
                if (y2 > maxY || i == 0) {
                    maxY = y2;
                }
            }
            return egret.Rectangle.identity.initialize(minX, minY, maxX - minX, maxY - minY);
        };
        Sprite.prototype.hitTest = function (x, y, ignoreTouchEnabled) {
            if (ignoreTouchEnabled === void 0) { ignoreTouchEnabled = false; }
            var result = _super.prototype.hitTest.call(this, x, y, ignoreTouchEnabled);
            if (result) {
                return result;
            }
            else if (this._graphics) {
                return egret.DisplayObject.prototype.hitTest.call(this, x, y, ignoreTouchEnabled);
            }
            return null;
        };
        return Sprite;
    })(egret.DisplayObjectContainer);
    egret.Sprite = Sprite;
    Sprite.prototype.__class__ = "egret.Sprite";
})(egret || (egret = {}));
