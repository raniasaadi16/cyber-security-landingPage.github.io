$(document).ready(function () {
    // intro
    function introEffects() {
        const skipIntro = sessionStorage.getItem('skip-intro');
    
        if (skipIntro) {
            $(".first-section").hide();
            $("#intro").hide();
            $("header").show();
        } else {
            sessionStorage.setItem('skip-intro', 1);
            $(".first-section").fadeIn();
            $('nav').hide()
            setTimeout(function() {
                $(".bgvideodiv").slideUp("slow");
                $("#logo").slideUp("slow");
                $("#intro").css("display", "none");
                $("header").fadeIn("slow");
                $('nav').show()
            }, 6000)
        }
    }
    // dark/light modes
    function toogleThems(){
        $('#toggle-themes').click(function(){
            if($('html').attr('data-mode')){
                $('html').removeAttr('data-mode')
            }else{
                $('html').attr('data-mode', 'light')
            }
        })
    }
    // scroll
    function bindMenuScrollingLinks() {
        $("nav").find("a[data-scroll").click(function(e) {
            e.preventDefault();
    
            if ($(this).data("scroll") == "top") {
                $('html,body').animate({scrollTop: 0});
                return;
            }
    
            $('html,body').animate({
                scrollTop: $("#" + $(this).data("scroll")).offset().top - 40
            });
        })
    }
    // circle animation
    function bindPostSonar(){
        document.querySelector('.circle-main').addEventListener('mouseenter', function(){
            document.querySelectorAll('.dub').forEach(cr=> cr.classList.remove('dub-animation'))
            setTimeout(() => {
                document.querySelectorAll('.dub').forEach(cr=> cr.classList.add('dub-animation'))
            }, 100);
        })
    }
    // responsive navbar
    function menu(){  
            const $navbarBurgers = document.querySelector('.navbar-burger');
                $navbarBurgers.addEventListener('click', () => {
                    const target = $navbarBurgers.dataset.target;
                    const $target = document.getElementById(target);
                    $navbarBurgers.classList.toggle('is-active');
                    $target.classList.toggle('is-active');
        
                });
            document.querySelectorAll('.navbar-item').forEach(el => el.addEventListener('click', function(){
                document.querySelector('.navbar-menu').classList.remove('is-active')
                document.querySelector('.navbar-burger').classList.remove('is-active')

            }))

    }
    toogleThems()
    introEffects()
    bindMenuScrollingLinks()
    bindPostSonar();
    menu()
});