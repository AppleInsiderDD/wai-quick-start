(function () {
	'use strict';

  // Note that this is not generalized code for dealing with custom interactive elements
  // and is not recommended for production use
  function toggleMenu(el) {
    if( el.getAttribute('aria-hidden') == 'true' ) {
      el.setAttribute('aria-hidden', 'false');
      el.focus();
    } else {
      el.setAttribute('aria-hidden', 'true');
    }
  }

  var buttonExample = document.getElementById('example-button');
  
  if(buttonExample) {
    buttonExample.addEventListener('keydown', function(e) {
      // Toggle the menu when RETURN is pressed
      if(e.keyCode && e.keyCode == 13) {
        toggleMenu(document.getElementById('example-button-menu'));
        if(e.target.getAttribute('aria-expanded') == 'true') {
          e.target.setAttribute('aria-expanded', 'false');
        } else {
          e.target.setAttribute('aria-expanded', 'true');
        }
      }
    });
  
    buttonExample.addEventListener('click', function(e) {
      toggleMenu(document.getElementById('example-button-menu'));
      if(e.target.getAttribute('aria-expanded') == 'true') {
        e.target.setAttribute('aria-expanded', 'false');
      } else {
        e.target.setAttribute('aria-expanded', 'true');
      }
    });
  }
  
  function flickSwitch(el) {
    if(el.getAttribute('aria-checked') == 'true' ) {
      el.setAttribute('aria-checked', 'false');
      el.getElementsByTagName('span')[0].innerHTML = 'Off';
    } else {
      el.setAttribute('aria-checked', 'true')
      el.getElementsByTagName('span')[0].innerHTML = 'On';
    }
  }

  var switchExample = document.getElementById('switch');
  if(switchExample) {
    switchExample.addEventListener('keydown', function(e) {
      if(e.keyCode && (e.keyCode == 32 || e.keyCode == 13)) {
        flickSwitch(this);
      }
    });
    switchExample.addEventListener('click', function () {
      flickSwitch(this);
    });
  }
}());