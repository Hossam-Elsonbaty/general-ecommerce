import useCookies from './useCookies'
const SetCookies = (cname, cvalue, exdays)=>{
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  // document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  setCookie(cname + "=" + cvalue + ";" + expires + ";path=/");
}
export default SetCookies;
