/* DO NOT EDIT! This file is generated. */

var require;
if (!require) require = {config: function (x) {require = x;}};
require.config({
  "paths": {
    "jquery": "bower_components/jquery/dist/jquery",
    "require-css": "bower_components/require-css",
    "jquery-ui": "bower_components/jquery-ui/jquery-ui",
    "codemirror": "bower_components/codemirror",
    "amber-contrib-web": "bower_components/amber/contrib/src",
    "amber-contrib-jquery": "bower_components/amber/contrib/src",
    "amber": "bower_components/amber/support",
    "amber_core": "bower_components/amber/src",
    "amber-minimal-ide": "src",
    "amber-minimal-ide/resources": "resources"
  },
  "map": {
    "*": {
      "css": "require-css/css",
      "00comment": "These are backward compatibility pointers.",
      "amber_core/Kernel-ImportExport": "amber_core/Platform-ImportExport",
      "amber_core/Web": "amber-contrib-web/Web",
      "amber_core/Canvas": "amber-contrib-web/Web"
    }
  },
  "shim": {
    "jquery-ui": {
      "deps": [
        "jquery"
      ]
    },
    "codemirror/lib/codemirror": {
      "deps": [
        "css!codemirror/lib/codemirror",
        "css!amber-minimal-ide/resources/minimal-light"
      ]
    },
    "ensure-console": {
      "exports": "console"
    }
  }
});