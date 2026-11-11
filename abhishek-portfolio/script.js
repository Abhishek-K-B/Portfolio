'use strict';
const menuButton=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('.nav-links');
menuButton.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
navLinks.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{navLinks.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open navigation');}));
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems=document.querySelectorAll('.reveal');
if(reduceMotion||!('IntersectionObserver' in window)){revealItems.forEach(item=>item.classList.add('visible'));}else{const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});},{threshold:.1});revealItems.forEach(item=>observer.observe(item));}
const typingTarget=document.getElementById('typed-role');
const titles=['Aspiring Full Stack Developer','Python & Flask Developer','Cloud Technology Enthusiast'];
if(!reduceMotion&&typingTarget){let titleIndex=0,charIndex=titles[0].length,deleting=false;const tick=()=>{const current=titles[titleIndex];if(deleting){charIndex--;typingTarget.textContent=current.slice(0,charIndex);if(charIndex===0){deleting=false;titleIndex=(titleIndex+1)%titles.length;setTimeout(tick,350);return;}}else{const next=titles[titleIndex];charIndex++;typingTarget.textContent=next.slice(0,charIndex);if(charIndex>=next.length){deleting=true;setTimeout(tick,2200);return;}}setTimeout(tick,deleting?42:78);};setTimeout(()=>{deleting=true;tick();},2400);}
