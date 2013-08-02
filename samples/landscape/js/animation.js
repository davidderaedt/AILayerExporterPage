/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global document, $, composer */

(function () {
    "use strict";

    $(function () {
        
        function onCompReady(){
            $("#container").addClass("animate");
        }

        composer.create('img/data.json', 'img/', $('#container'), function (list) {
            setTimeout(onCompReady, 500);
        });
        
        

/*
        $("#originBt").click(function () {           
            var n = movables.length;
            var i;
            for (i = 0; i < n; i++) {
                var m = movables[i];
                m.sendToOrigin();
            }            
        });
*/
    });

}());