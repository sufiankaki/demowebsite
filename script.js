// Small helper for smooth scrolling and simple contact form mock
document.addEventListener('DOMContentLoaded',()=>{
  // dynamic year
  const y = new Date().getFullYear();
  const el = document.getElementById('year'); if(el) el.textContent = String(y);

  // enable nav smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const href = a.getAttribute('href');
      if(href && href.startsWith('#')){
        const target = document.querySelector(href);
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth',block:'start'});
        }
      }
    });
  });

  // contact form (no backend) — show a success message
  const form = document.getElementById('contactForm');
  const status = document.getElementById('status');
  if(form){
    form.addEventListener('submit',async (e)=>{
      e.preventDefault();
      const name = document.getElementById('name').value;
      status.textContent = 'Sending...';
      // simulate network
      await new Promise(r=>setTimeout(r,800));
      status.textContent = `Thanks, ${name}. I will get back to you soon.`;
      form.reset();
    });
  }
});
