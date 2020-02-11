/**
 * @preserve
 *
 *                                     .,,,;;,'''..
 *                                 .'','...     ..',,,.
 *                               .,,,,,,',,',;;:;,.  .,l,
 *                              .,',.     ...     ,;,   :l.
 *                             ':;.    .'.:do;;.    .c   ol;'.
 *      ';;'                   ;.;    ', .dkl';,    .c   :; .'.',::,,'''.
 *     ',,;;;,.                ; .,'     .'''.    .'.   .d;''.''''.
 *    .oxddl;::,,.             ',  .'''.   .... .'.   ,:;..
 *     .'cOX0OOkdoc.            .,'.   .. .....     'lc.
 *    .:;,,::co0XOko'              ....''..'.'''''''.
 *    .dxk0KKdc:cdOXKl............. .. ..,c....
 *     .',lxOOxl:'':xkl,',......'....    ,'.
 *          .';:oo:...                        .
 *               .cd,    ╔═╗┌─┐┬─┐┬  ┬┌─┐┬─┐   .
 *                 .l;   ╚═╗├┤ ├┬┘└┐┌┘├┤ ├┬┘   '
 *                   'l. ╚═╝└─┘┴└─ └┘ └─┘┴└─  '.
 *                    .o.                   ...
 *                     .''''','.;:''.........
 *                          .'  .l
 *                         .:.   l'
 *                        .:.    .l.
 *                       .x:      :k;,.
 *                       cxlc;    cdc,,;;.
 *                      'l :..   .c  ,
 *                      o.
 *                     .,
 *
 *             ╦ ╦┬ ┬┌┐ ┬─┐┬┌┬┐  ╔═╗┌┐  ┬┌─┐┌─┐┌┬┐┌─┐
 *             ╠═╣└┬┘├┴┐├┬┘│ ││  ║ ║├┴┐ │├┤ │   │ └─┐
 *             ╩ ╩ ┴ └─┘┴└─┴─┴┘  ╚═╝└─┘└┘└─┘└─┘ ┴ └─┘
 *
 * Created by Valentin on 10/22/14.
 *
 * Copyright (c) 2015 Valentin Heun
 *
 * All ascii characters above must be included in any redistribution.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/**
 * @desc prototype for a plugin. This prototype is called when a value should be changed.
 * It defines how this value should be transformed before sending it to the destination.
 * @param {object} objectID Origin object in which the related link is saved.
 * @param {string} linkID the id of the link that is related to the call
 * @param {object} inputData the data that needs to be processed
 * @param {function} callback the function that is called for when the process is rendered.
 * @note the callback has the same structure then the initial prototype, however inputData has changed to outputData
 **/

var generalProperties = {
    name : "add4",
    blockSize : 4,
    privateData : {},
    publicData : {},
    activeInputs : [true, true, true, true],
    activeOutputs : [true, false, false, false],
    iconImage : "icon.png",
    nameInput : ["A", "B", "C", "D"],
    nameOutput : ["A + B + C + D", "", "", ""],
    type : "add4"
};

exports.properties = generalProperties;

exports.setup = function (object,frame, node, block, thisBlock, callback){
// add code here that should be executed once.
    // var publicData thisBlock.publicData;
    // callback(object, frame, node, block, index, thisBlock);
};
//var logicAPI = require(__dirname + '/../../libraries/logicInterfaces');

exports.render = function (object, frame, node, block, index, thisBlock, callback) {

    var sum = 0;
    // add value from A
    if (thisBlock.data[0].value) {
        sum += thisBlock.data[0].value;
    }
    // add value from B
    if (thisBlock.data[1].value) {
        sum += thisBlock.data[1].value;
    }
    // add value from C
    if (thisBlock.data[2].value) {
        sum += thisBlock.data[2].value;
    }
    // add value from D
    if (thisBlock.data[3].value) {
        sum += thisBlock.data[3].value;
    }
    // constrain sum to 0-1 range
    sum = Math.max(0, Math.min(1, sum));

    for (var key in thisBlock.data[0]) {
        thisBlock.processedData[0][key] = thisBlock.data[0][key];
    }

    thisBlock.processedData[0].value = sum;

    callback(object, frame, node, block, index, thisBlock);
};
