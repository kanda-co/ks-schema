import { HELPCRUNCH_ENVIRONMENT_KEY } from '~/config';

export const SCRIPT = `
(function(w,d){
  w.HelpCrunch=function(){
    w.HelpCrunch.q.push(arguments)
  };
  w.HelpCrunch.q=[];
  function r(){
    var s=document.createElement('script');
    s.async=1;
    s.type='text/javascript';
    s.src='https://widget.helpcrunch.com/';
    (d.body||d.head).appendChild(s);
  }
  if(w.attachEvent){
    w.attachEvent('onload',r)
  }else{
    w.addEventListener('load',r,false)
  }
})(window, document)
`;

export const SCRIPT_INIT = `
  HelpCrunch('init', 'kanda', {
    applicationId: 1,
    applicationSecret: '${HELPCRUNCH_ENVIRONMENT_KEY}',
  })
  HelpCrunch('hideChatWidget');
`;
