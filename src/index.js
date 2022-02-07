module.exports = function toReadable (number) {
 
  a = Math.trunc(number/100); // сотни
  c = Math.trunc((number-a*100)/10); // десятки
  b = (number-(a*100)-(c*10)); // единицы
  d = 'zero';
  
  A1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  A2 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  A3 = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number==0) {
        return d;
    }
    if (number>0) {
        if (number<10) {
            return (A1[b-1]); // например, 1
    }};
    if (a==0) {
        if (c>=1) {
            if(b==0) {
                return (A3[c-1]); // например, 10, 90
    }}};
    if (number>10) {
        if (number<20) {
            if(b>0) {
                return (A2[b-1]); // например, 11, 12
    }}};
    if (a==0) {
        if (c>1) {
            if(b>=1) {
                return (A3[c-1] + ' ' + A1[b-1]); // например, 54, 91
    }}};
    if (c==0) {
        if (b>0) {
            return (A1[a-1] + ' ' + "hundred" + ' ' + A1[b-1]); // например, 909
    }};

    if (c==1) {
        if (b>=1) {
            if (a>0) {
                return (A1[a-1] + ' ' + "hundred" + ' ' + A2[b-1]); // например, 919, 511
    }}};

    if (c>=1) {
        if (b==0) {
            return (A1[a-1] + ' ' + "hundred" + ' ' + A3[c-1]); // например, 920, 520
    }};

    if (c>1) {
        if (b>=1) {
            return (A1[a-1] + ' ' + "hundred" + ' ' + A3[c-1] + ' ' + A1[b-1]); // например, 929, 831
    }};
   
    if (c==0) {
        if (b==0) {
            return (A1[a-1] + ' ' + "hundred"); // например, 500
    }};

};
