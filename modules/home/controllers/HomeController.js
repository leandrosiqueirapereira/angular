class HomeController {

    constructor(HomeService) {
        'ngInject';
        console.log('HomeController constructor')
    }

    $onInit() {
        console.log('HomeController onInit')
    }

    myFunction(){
        console.log('Cliked button.')
    }

}

HomeController.$inject = ['HomeService'];

export { HomeController }
