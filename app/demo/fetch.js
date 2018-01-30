export const root = 'http://10.94.20.24:8080';
export const url = root + '/policy/services';

export const $get = function(url,  success) {
  let xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.open('GET', url, true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        success && success(JSON.parse(xhr.responseText));
      } else {
        console.error(xhr.status, xhr.statusText);
      }
    }
  };
  return xhr;
};

export const $post = function(url,data, success,error) {
  let xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-type','application/json');
  xhr.withCredentials = true;

  xhr.send(data);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        success && success(JSON.parse(xhr.responseText));
      } else {
        error&& error(xhr.status, xhr.statusText);
        console.error(xhr.status, xhr.statusText);
      }
    }
  };
  return xhr;
};

export const $put = function(url,data, success,error) {
  let xhr = new XMLHttpRequest();
  xhr.open('PUT', url, true);
  xhr.setRequestHeader('Content-type','application/json');
  xhr.withCredentials = true;
  xhr.send(data);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        success && success(JSON.parse(xhr.responseText));
      } else {
        error&& error(xhr.status, xhr.statusText);
        console.error(xhr.status, xhr.statusText);
      }
    }
  };
  return xhr;
};



export const $delete = function(url,data, success,error) {
  let xhr = new XMLHttpRequest();
  xhr.open('DELETE', url, true);
  xhr.setRequestHeader('Content-type','application/json');
  xhr.withCredentials = true;
  xhr.send(data);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        success && success(JSON.parse(xhr.responseText));
      } else {
        error&& error(xhr.status, xhr.statusText);
        console.error(xhr.status, xhr.statusText);
      }
    }
  };
  return xhr;
};



export const setCookie = function(c_name,value,expiredays){
  let exdate=new Date();
  exdate.setDate(exdate.getDate()+expiredays);
  document.cookie=c_name+ '=' +escape(value)+
    ((expiredays==null) ? '' : ';expires='+exdate.toGMTString());
};

export const getCookie = function(c_name){
  if (document.cookie.length>0){
    let c_start=document.cookie.indexOf(c_name + '=');
    if (c_start!=-1){
      c_start=c_start + c_name.length+1;
      let c_end=document.cookie.indexOf(';',c_start);
      if (c_end==-1) {c_end=document.cookie.length;}
      return unescape(document.cookie.substring(c_start,c_end));
    }
  }
  return '';
};
