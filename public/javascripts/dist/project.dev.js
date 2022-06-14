"use strict";

$(document).ready(function () {
  $('#pass').keyup(function () {
    var p = $('#pass').val();

    function duplicateChars(value) {
      str = value;
      count = 0;

      for (i = 0; i < str.length; i++) {
        for (j = 0; j < str.length; j++) {
          if (str[i] == str[j] && i != j) {
            count++;
            break;
          }
        }
      }

      return count;
    }

    function specChar(value) {
      var str = value;
      count = 0;

      for (i = 32; i <= 47; i++) {
        if (str.includes(String.fromCharCode(i))) count++;
      }

      for (i = 58; i <= 64; i++) {
        if (str.includes(String.fromCharCode(i))) count++;
      }

      for (i = 91; i <= 96; i++) {
        if (str.includes(String.fromCharCode(i))) count++;
      }

      for (i = 123; i <= 126; i++) {
        if (str.includes(String.fromCharCode(i))) count++;
      }

      return count;
    }

    function delay(callback, ms) {
      var timer = 0;
      return function () {
        var context = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
          callback.apply(context, args);
        }, ms || 0);
      };
    }

    var htm = '';
    var sp = htm + specChar(p);
    var specialchars = parseInt(sp);
    $('#spc').html(sp);
    var n = p.replace(/[^0-9]/g, "").length;
    var numbers = parseInt(n);
    $('#numbers').html(n.toString());
    var s = p;
    var numUpper = s.length - s.replace(/[A-Z]/g, '').length;
    var upperchars = parseInt(numUpper);
    $('#uppercase').html(numUpper.toString());
    min = p.length;
    var totalchars = parseInt(min);
    $('#totalchar').html(min.toString());
    var voice = specialchars + numbers + upperchars + totalchars;
    var strong = numbers + specialchars + upperchars;

    if ((numbers == 0 || specialchars == 0 || upperchars == 0) && strong >= 1 && totalchars >= 8) {
      $('#security').html('MEDIUM');
      $('#security').css('color', 'yellow');
      $('#awaz').attr('src', '/audios/mediumpassword.mp3');
    } else if (numbers != 0 && specialchars != 0 && upperchars != 0 && strong >= 3 && totalchars >= 8) {
      $('#security').html('I AM STRONG');
      $('#security').css('color', 'green');
      $('#awaz').attr('src', '/audios/strongpass.mp3');
    } else {
      $('#security').html('WEAK');
      $('#security').css('color', 'red');
      $('#awaz').attr('src', '/audios/weakpassword.mp3');
    }
    /*
    $('#pass').keyup(delay(function(e){
          
        if(totalchars>=8)
        {
           
            if((numbers==0 || specialchars==0 || upperchars==0) && (strong>=1 && strong<=2))
            {
                const audio1=new Audio("/audios/mediumpassword.mp3")
                audio1.play()
            }
            
            if((numbers!=0 && specialchars!=0 && upperchars!=0))
            {
                const audio2=new Audio("/audios/strongpassword.mp3")
                audio2.play()
            }
        }
        },1000));
      */

  });
});