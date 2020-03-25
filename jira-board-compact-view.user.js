// ==UserScript==
// @name         Jira board compact view
// @namespace    http://www.saferpay.com/
// @version      0.1
// @description  try to take over the world!
// @author       tk2eu
// @match        https://jira-wdtool01.v12.p01.ocp.six-group.net/secure/RapidBoard.jspa*
// @grant        none
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

$(document).ready(function() {
    'use strict';

    addGlobalStyle('.six-compact-view .ghx-issue-content { min-height: 20px !important; }');
    addGlobalStyle('.six-compact-view .ghx-issue-content .ghx-key { font-size:x-small !important; font-style:bold !important }');
    addGlobalStyle('.six-compact-view .ghx-type-5 .ghx-issue-content .ghx-key { display:none !important; }'); // Type=Task > don't show JIRA Key
    addGlobalStyle('.six-compact-view .ghx-flags { display:none !important; }');
    addGlobalStyle('.six-compact-view .ghx-corner { display:none !important; }');
    addGlobalStyle('.six-compact-view .ghx-avatar .ghx-avatar-img { width:16px; !important; height: 16px !important; }');
    addGlobalStyle('.six-compact-view .ghx-issue-content .ghx-highlighted-fields { display:none !important; }');
    addGlobalStyle('.six-compact-view .ghx-issue-content .ghx-summary { font-size:x-small !important; }');
    addGlobalStyle('.six-compact-view .ghx-swimlane-header { font-size:x-small !important; height: 27px !important; }');
    addGlobalStyle('#six-compact-view-button { margin-left: 23px; !important }');

    $('#ghx-modes-tools').append('<input type="button" class="aui-button" value="Compact View" id="six-compact-view-button">');
    $('#six-compact-view-button').click(function(){
        $('#ghx-work').toggleClass('six-compact-view');
    });
  });
