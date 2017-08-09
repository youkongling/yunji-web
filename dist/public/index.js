window.onload = function() {
    var mainSwiper = new Swiper('#mainSwiperContainer', {
        // autoplay: 3000,
        initialSlide: 0,
        direction: 'vertical',
        speed: 1000,
        hashnav: true,
        width: window.innerWidth,
        height: window.innerHeight,
        onlyExternal: true,
        pagination: '#mainSwiperPagination',
        paginationClickable: true,
        mousewheelControl: true,
        onInit: function(swiper) {
            swiperAnimateCache(swiper);
            swiperAnimate(swiper);
        },
        onSlideChangeEnd: function(swiper) {
            swiperAnimateCache(swiper);
            swiperAnimate(swiper);
        }
    })
    var childSwiper = new Swiper('#childSwiperContainer', {
        initialSlide: 0,
        direction: 'horizontal',
        speed: 1000,
        width: window.innerWidth,
        height: window.innerHeight,
        // onlyExternal: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        onSlideNextEnd: function(swiper) {
            swiperAnimateCache(swiper);
            swiperAnimate(swiper);
        },
        onSlidePrevEnd: function(swiper) {
            swiperAnimateCache(swiper);
            swiperAnimate(swiper);
        }
    })
    var prevBtn = document.querySelector('#childPrev');
    var nextBtn = document.querySelector('#childNext');
    var btnYes = document.querySelector('#btnYes');
    var btnNext = document.querySelector('#btnNext');
    var btnOk = document.querySelector('#btnOk');
    btnYes.addEventListener("click", function(e) {
        nextBtn.click();
        e.preventDefault();
    })
    btnNext.addEventListener('click', function(e) {
        var storage = window.localStorage;
        var form = document.querySelector("#demandForm");
        var demand = {
            project: form.querySelector("#demandProject").value,
            style: form.querySelector("#demandStyle").value,
            ability: form.querySelector("#demandAbility").value
        };
        console.log(JSON.stringify(demand));
        storage.setItem("demand", JSON.stringify(demand));
        nextBtn.click();
        e.preventDefault();
    })
    btnOk.addEventListener('click', function(e) {
        var storage = window.localStorage;
        var form = document.querySelector("#userForm");
        var user = {
            username: form.querySelector("#username").value,
            qq: form.querySelector("#qq").value,
            tel: form.querySelector("#tel").value
        };
        console.log(JSON.stringify(user));
        storage.setItem("user", JSON.stringify(user));
        nextBtn.click();
        e.preventDefault();
    })

    var members = document.querySelectorAll('#member ul li');
    var memberBtns = document.querySelectorAll('#member ul li a');
    var detailSection = document.querySelector("#detail_section");

    detailSection.addEventListener("click", function() {
        detailSection.classList.remove('xb-detail-scale');
    })

    for (var i = 0; i < members.length; i++) {
        if (i % 2 == 0) {
            (function(i) {
                var isClicked = false;
                memberBtns[i].addEventListener('mouseover', function(e) {
                    e.preventDefault();
                    if (i == 0) {
                        var info = members[i].querySelector('.xb-member-info');
                        info.classList.add('xb-member-info-hover');
                        members[1].classList.add('xb-member-hide');
                    }
                })

                memberBtns[i].addEventListener('mouseout', function(e) {
                    e.preventDefault();
                    if (i == 0) {
                        var info = members[i].querySelector('.xb-member-info');
                        info.classList.remove('xb-member-info-hover');
                        members[1].classList.remove('xb-member-hide');
                    }
                })

                memberBtns[i].addEventListener('click', function(e) {
                    e.preventDefault();
                    if (i == 0) {
                        detailSection.classList.add('xb-detail-scale');
                        setTimeout(function() {
                            var detailPower = document.querySelectorAll("#detail_power .progress-bar");
                            for (var i = 0; i < detailPower.length; i++) {
                                detailPower[i].classList.add('power-length' + i);
                            }
                        }, 2000);
                    }
                })

                // var more = members[i].querySelector('.info-more');
                // if (i == 0) {
                //  console.log(more);
                //     more.addEventListener('click', function(e) {
                //      e.stopPropagation();
                //      console.log('more')
                //         detailSection.classList.add('xb-detail-scale');
                //         setTimeout(function() {
                //             var detailPower = document.querySelectorAll("#detail_power .progress-bar");
                //             for (var i = 0; i < detailPower.length; i++) {
                //                 detailPower[i].classList.add('power-length' + i);
                //             }
                //         }, 2000);
                //     })
                //     // more.click()
                // }
            })(i)
        } else {
            (function(i) {
                memberBtns[i].addEventListener('click', function(e) {
                    e.preventDefault();
                    // var info = members[i].querySelector('.xb-member-info');
                    // info.classList.add('xb-member-info-hover');
                })
            })(i)
        }
    }

    var childSwiper1 = new Swiper('#childSwiperContainer1', {
        initialSlide: 0,
        direction: 'horizontal',
        speed: 1000,
        width: window.innerWidth,
        height: window.innerHeight,
        // onlyExternal: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        onSlideNextEnd: function(swiper) {
            swiperAnimateCache(swiper);
            swiperAnimate(swiper);
        },
        onSlidePrevEnd: function(swiper) {
            swiperAnimateCache(swiper);
            swiperAnimate(swiper);
        }
    })
    var prevBtn1 = document.querySelector('#childPrev1');
    var nextBtn1 = document.querySelector('#childNext1');
    var btnYes1 = document.querySelector('#btnYes1');
    var btnNext1 = document.querySelector('#btnNext1');
    var btnOk1 = document.querySelector('#btnOk1');
    btnYes1.addEventListener("click", function(e) {
        nextBtn1.click();
        e.preventDefault();
    })
    btnNext1.addEventListener('click', function(e) {
        e.preventDefault();
        nextBtn1.click();
    })
    btnOk1.addEventListener('click', function(e) {
        var storage = window.localStorage;
        var form = document.querySelector("#userForm1");
        var sex = JSON.parse(storage.getItem("joinUs")).sex;
        var joinUs = {
            sex: sex,
            username: form.querySelector("#username1").value,
            qq: form.querySelector("#qq1").value,
            tel: form.querySelector("#tel1").value,
            description: form.querySelector("#description").value
        };
        console.log(JSON.stringify(joinUs));
        storage.setItem("joinUs", JSON.stringify(joinUs));
        e.preventDefault();
    })

    var chooseSex = document.querySelectorAll("#chooseSex a");
    var checkSex = document.querySelectorAll("#chooseSex img");
    for (var i = 0; i < chooseSex.length; i++) {
        chooseSex[i].addEventListener("click", function(e) {
            e.preventDefault();
            for (var j = 0; j < checkSex.length; j++) {
                checkSex[j].classList.remove("checkSex");
            }
            var image = this.querySelector("img");
            image.classList.add("checkSex");
            var joinUs = {
                sex: this.dataset.sex
            }
            window.localStorage.setItem("joinUs", JSON.stringify(joinUs));
        })
    }
}