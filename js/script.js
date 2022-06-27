// typing animation

var typed = new Typed('.typing', {
    strings: ["Web Developer", "Web Designer", "Mobile Developer", "Research Assistant", "Programmer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
})

// aside

   const nav = document.querySelector('.nav');
   navlist = nav.querySelectorAll('li'),
   totalNavList = navlist.length,
   allSection = document.querySelectorAll('.section'),
   totalSection = allSection.length;
   for (let i = 0; i < totalNavList; i++) {
       const a = navlist[i].querySelector('a');
         a.addEventListener('click', function () 
         {
            for (let i = 0; i < totalSection; i++) {
                allSection[i].classList.remove('back-section');
            }
            for(let j = 0; j < totalNavList; j++)
            {
                if(navlist[j].querySelector('a').classList.contains('active'))
                {
                    allSection[j].classList.add('back-section');
                }
                navlist[j].querySelector('a').classList.remove('active');
            }
            this.classList.add('active');
            showSection(this);
            if(window.innerWidth < 1200)
            {
                asideSectionTogglerBtn();
            }
         })
   }

   function showSection(element) {
    //    const section = document.querySelector(element.getAttribute('href'));
    //    const sections = document.querySelectorAll('.section');
    //    sections.forEach(section => {
    //        section.classList.remove('active');
    //    })
    //    section.classList.add('active');
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('active');
    }
    const target = element.getAttribute('href').split("#")[1];
    document.querySelector(`#${target}`).classList.add('active');

   }

   function updateNav(element)
   {
        for(let i = 0; i < totalNavList; i++)
        {
            navlist[i].querySelector('a').classList.remove('active');
            const target = element.getAttribute('href').split("#")[1];
            if (target === navlist[i].querySelector('a').getAttribute('href').split("#")[1]) {
                navlist[i].querySelector('a').classList.add('active');
            }
        }
   }

   document.querySelector('.hire-me').addEventListener('click', () => {
        //showSection(this)
        //updateNav(this);
        console.log(this);
   })

    const navTogglerBtn = document.querySelector('.nav-toggler'),
    aside = document.querySelector('.aside');
    navTogglerBtn.addEventListener('click', () => {
        asideSectionTogglerBtn();
    })

    function asideSectionTogglerBtn() {
        aside.classList.toggle('open');
        navTogglerBtn.classList.toggle('open');
        for(let i = 0; i < totalSection; i++)
        {
            allSection[i].classList.toggle('open');
        }
    }
