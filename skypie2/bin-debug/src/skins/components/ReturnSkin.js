var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var components;
    (function (components) {
        var ReturnSkin = (function (_super) {
            __extends(ReturnSkin, _super);
            function ReturnSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__4", "source", "return_down")
                    ]),
                    new egret.gui.State("disabled", [])
                ];
            }
            ReturnSkin.prototype.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                t.source = "return_normal";
                return t;
            };
            return ReturnSkin;
        })(egret.gui.Skin);
        components.ReturnSkin = ReturnSkin;
        ReturnSkin.prototype.__class__ = "skins.components.ReturnSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
