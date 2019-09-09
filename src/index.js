import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function setCookie(cname, cvalue, exdays) {
    // https://www.w3schools.com/js/js_cookies.asp
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }


function getCookie(cname) {
    // from https://www.w3schools.com/js/js_cookies.asp
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    console.log("Cookies: ", document.cookie)
    var ca = decodedCookie.split(';');
    console.log(ca);
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function reset() {
    console.log("Resetting");
    var now = new Date().toUTCString();
    setCookie('reset', now);
    window.location.reload(); 
}

class ResetButton extends React.Component {
    render () {
        return (
        <button class="padLeft" onClick={() => reset()}>Reset</button>
        )
    }
}

class Counter extends React.Component {
    render () {
        var value = new Date(getCookie('reset'));
        var now = new Date();
        var elapsed = Math.abs(now.getTime() - value.getTime());
        var diffDays = Math.floor(elapsed / (1000 * 60 * 60 * 24));
        if (isNaN(diffDays))
        {
            reset();
        }
        return (
            <span class="padLeft">
                {diffDays} Days
            </span>
        )
    }
}

// ========================================

ReactDOM.render(
    <div class="sign">
        <Counter value={0}/>
        <p>Since someone reset this sign.</p>
        < ResetButton />
    </div>,
    document.getElementById('root')
);