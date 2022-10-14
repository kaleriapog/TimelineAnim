document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();
    let timelineSection = new TimelineMax();
    let allInput = document.querySelectorAll('.input')

    timelineSection
        .fromTo(['.item-0'], {x: '0'}, {x: '50vw', duration: 1, delay: 0, ease: Linear.easeNone})
        .fromTo(['.item-1'], {x: '0'}, {x: '50vw', duration: 1, delay: 0, ease: Linear.easeNone})
        .fromTo(['.item-2'], {x: '0'}, {x: '50vw', duration: 1, delay: 0, ease: Linear.easeNone})
        .fromTo(['.item-3'], {x: '0'}, {x: '50vw', duration: 1, delay: 0, ease: Linear.easeNone});

    let sceneAnim1 = new ScrollMagic.Scene({ triggerElement: '.name-class',  triggerHook: 'onLeave', duration: '1000', tweenChanges: true }) //в duration (продолжительность) может быть любое число в пикселях, но само слово "рх" не нужно, просто укажити число. ну или укажите "100%" - будет равно высоте экрана
        .setPin('.name-class')
        .setTween(timelineSection)
        .on("progress", function (e) {
            let progress = (e.progress * 100);
                document.querySelector('.progress1').innerHTML =`<p> Прогресс ${progress.toFixed(0)} из 100</p>`
        })
        .addIndicators({name: "мой большой блок"})
        .addTo(controller);


    allInput.forEach((input) => {
        input.addEventListener('input', () => {

            let valueDurationScene = document.querySelector('.value-duration-scene').value;

            let item0Default = document.querySelector('.interactive-item-0 .value-default').value;
            let item0End = document.querySelector('.interactive-item-0 .value-end').value;
            let item0Duration = document.querySelector('.interactive-item-0 .value-duration').value;
            let item0Delay = document.querySelector('.interactive-item-0 .value-delay').value;

            let item1Default = document.querySelector('.interactive-item-1 .value-default').value;
            let item1End = document.querySelector('.interactive-item-1 .value-end').value;
            let item1Duration = document.querySelector('.interactive-item-1 .value-duration').value;
            let item1Delay = document.querySelector('.interactive-item-1 .value-delay').value;

            let item2Default = document.querySelector('.interactive-item-2 .value-default').value;
            let item2End = document.querySelector('.interactive-item-2 .value-end').value;
            let item2Duration = document.querySelector('.interactive-item-2 .value-duration').value;
            let item2Delay = document.querySelector('.interactive-item-2 .value-delay').value;

            let item3Default = document.querySelector('.interactive-item-3 .value-default').value;
            let item3End = document.querySelector('.interactive-item-3 .value-end').value;
            let item3Duration = document.querySelector('.interactive-item-3 .value-duration').value;
            let item3Delay = document.querySelector('.interactive-item-3 .value-delay').value;


            let timeline = new TimelineMax();
            let tween0 = TweenMax.fromTo(['.item-0'], {x: `${item0Default}`}, {x: `${item0End}`, duration: item0Duration, delay: item0Delay, ease: Linear.easeNone})
            let tween1 = TweenMax.fromTo(['.item-1'], {x: `${item1Default}`}, {x: `${item1End}`, duration: item1Duration, delay: item1Delay, ease: Linear.easeNone})
            let tween2 = TweenMax.fromTo(['.item-2'], {x: `${item2Default}`}, {x: `${item2End}`, duration: item2Duration, delay: item2Delay, ease: Linear.easeNone})
            let tween3 = TweenMax.fromTo(['.item-3'], {x: `${item3Default}`}, {x: `${item3End}`, duration: item3Duration, delay: item3Delay, ease: Linear.easeNone})

            timeline
                .add(tween0)
                .add(tween1)
                .add(tween2)
                .add(tween3);
            sceneAnim1.setTween(timeline);

            sceneAnim1.duration(valueDurationScene)
        })
    })

})