import {mkdir,rm,readdir,readFile,writeFile} from 'node:fs/promises';
import {join} from 'node:path';
const configured=process.env.SITE_URL||'https://kb-softwares.vercel.app';
const url=new URL(configured);
if(url.protocol!=='https:'||url.pathname!=='/'||url.search||url.hash||url.username||url.password)throw new Error('SITE_URL must be an HTTPS origin without a path, query or credentials');
const origin=url.origin;
const preview=process.env.VERCEL_ENV==='preview'||process.env.SITE_PREVIEW==='1'||(process.env.CF_PAGES_BRANCH&&process.env.CF_PAGES_BRANCH!=='main');
await rm('dist',{recursive:true,force:true});
async function copy(src,dst){await mkdir(dst,{recursive:true});for(const entry of await readdir(src,{withFileTypes:true})){const a=join(src,entry.name),b=join(dst,entry.name);if(entry.isDirectory())await copy(a,b);else{const data=await readFile(a,'utf8');let output=data.replaceAll('__SITE_URL__',origin);if(preview&&b.endsWith('.html'))output=output.replace('content="index, follow"','content="noindex, nofollow"');if(preview&&entry.name==='robots.txt')output='User-agent: *\nDisallow: /\n';await writeFile(b,output);}}}
await copy('site','dist');
if(preview)await writeFile('dist/_headers','/*\n  X-Robots-Tag: noindex, nofollow\n');
console.log('Static KB Softwares site generated for '+origin+(preview?' (preview: noindex)':''));