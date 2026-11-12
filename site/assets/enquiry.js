export function enquiryUrl(details,channel='whatsapp'){
  const message=['Hello KB Softwares! I would like to discuss a project.','Name: '+details.name,'Email: '+details.email,'Project type: '+details.type,details.budget?'Budget: '+details.budget:'','Project details: '+details.message].filter(Boolean).join('\n');
  return channel==='email'?'mailto:dustankibaja22@gmail.com?subject='+encodeURIComponent('KB Softwares project enquiry')+'&body='+encodeURIComponent(message):'https://wa.me/255759340243?text='+encodeURIComponent(message);
}
