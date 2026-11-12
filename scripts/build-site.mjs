import {mkdir,rm,readdir,readFile,writeFile} from 'node:fs/promises';
import {join} from 'node:path';
const configured=process.env.SITE_URL||'https://kb-softwares.vercel.app';
const url=new URL(configured);
if(url.protocol!=='https:'||url.pathname!=='/'||url.search||url.hash||url.username||url.password)throw new Error('SITE_URL must be an HTTPS origin without a path, query or credentials');
const origin=url.origin;
await rm('dist',{recursive:true,force:true});
async function copy(src,dst){await mkdir(dst,{recursive:true});for(const entry of await readdir(src,{withFileTypes:true})){const a=join(src,entry.name),b=join(dst,entry.name);if(entry.isDirectory())await copy(a,b);else{const data=await readFile(a,'utf8');await writeFile(b,data.replaceAll('__SITE_URL__',origin));}}}
await copy('site','dist');
console.log('Static KB Softwares site generated for '+origin);