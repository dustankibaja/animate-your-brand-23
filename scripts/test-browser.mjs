import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {mkdir} from 'node:fs/promises';
const port=4173,base='http://127.0.0.1:'+port;
const server=spawn('python3',['-m','http.server',String(port),'--bind','127.0.0.1','--directory','dist'],{stdio:'ignore'});
let browser;
try{
 for(let i=0;i<50;i++){try{if((await fetch(base)).ok)break;}catch{}await new Promise(r=>setTimeout(r,100));}
 browser=await chromium.launch({headless:true});
 await mkdir('qa-screenshots',{recursive:true});
 const urls=['/','/services/','/services/web-development/','/services/mobile-app-development/','/services/custom-software/','/services/ai-automation/','/services/startup-mvp/','/services/website-as-a-service/','/work/','/work/albastini/','/work/garilink/','/work/football-intelligence/','/about/','/insights/','/insights/planning-your-mvp/','/insights/website-project-checklist/','/contact/','/privacy/','/404.html'];
 for(const [label,viewport] of [['desktop',{width:1440,height:900}],['mobile',{width:390,height:844}],['small-mobile',{width:320,height:720}]]){
  const page=await browser.newPage({viewport});const errors=[];page.on('pageerror',e=>errors.push(e.message));
  for(const url of urls){const response=await page.goto(base+url);assert.equal(response.status(),200,url);await page.locator('h1').waitFor();assert.equal(await page.locator('h1').count(),1,url);const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+2);assert(!overflow,label+' overflow '+url);if(label==='desktop'){const a=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa']).analyze();const severe=a.violations.filter(v=>['critical','serious'].includes(v.impact));assert.deepEqual(severe.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)})),[],url+' accessibility violations');}}
  await page.goto(base+'/');if(label!=='desktop'){const menu=page.getByRole('button',{name:'Toggle navigation'});await menu.click();assert.equal(await menu.getAttribute('aria-expanded'),'true');await page.keyboard.press('Escape');assert.equal(await menu.getAttribute('aria-expanded'),'false');await menu.click();await page.getByRole('navigation').getByRole('link',{name:'Services',exact:true}).click();assert(page.url().endsWith('/services/'));}else{await page.getByRole('navigation').getByRole('link',{name:'Services',exact:true}).click();assert(page.url().endsWith('/services/'));}
  await page.goto(base+'/');await page.screenshot({path:'qa-screenshots/home-'+label+'.png',fullPage:true});
  await page.goto(base+'/work/');await page.screenshot({path:'qa-screenshots/work-'+label+'.png',fullPage:true});
  await page.goto(base+'/contact/');await page.screenshot({path:'qa-screenshots/contact-'+label+'.png',fullPage:true});
  await page.locator('#name').fill('QA Example');await page.locator('#email').fill('qa@example.com');await page.locator('#type').selectOption({label:'Website-as-a-Service'});await page.locator('#budget').fill('USD 1000');await page.locator('#message').fill('Example project & test?');
  let destination;await page.route('https://wa.me/**',async route=>{destination=route.request().url();await route.fulfill({status:200,body:'QA intercepted; nothing sent'});});
  await page.getByRole('button',{name:'Continue on WhatsApp'}).click();await page.waitForURL('https://wa.me/**');const target=new URL(destination);assert.equal(target.pathname,'/255759340243');assert(target.searchParams.get('text').includes('Example project & test?'));assert(target.searchParams.get('text').includes('Website-as-a-Service'));
  assert.deepEqual(errors,[]);await page.close();
 }
 const nojs=await browser.newPage({javaScriptEnabled:false,viewport:{width:390,height:844}});await nojs.goto(base+'/contact/');assert(await nojs.getByRole('button',{name:'Continue on WhatsApp'}).isDisabled());assert(await nojs.getByRole('link',{name:'Email us'}).isVisible());assert(await nojs.getByRole('navigation').isVisible());await nojs.close();
 console.log('PASS: 19 pages at desktop, mobile and small-mobile sizes; no horizontal overflow; WCAG A/AA automated serious/critical checks; navigation; intercepted WhatsApp handoff; no-JS fallback; screenshots.');
}finally{await browser?.close();server.kill();}
