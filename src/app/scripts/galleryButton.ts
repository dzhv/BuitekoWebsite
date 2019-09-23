export class GalleryButton {
    button: HTMLElement;
    homeImage: HTMLElement;
    homeContainer: HTMLElement;
    left: number;
    top: number;

    constructor(buttonId: string, homeContainerId: string, homeImageId: string){        
        this.top = 0;
        this.left = 0;
        this.homeImage = document.getElementById('home-image');
        this.homeContainer = document.getElementById(homeContainerId);
        this.button = document.getElementById(buttonId);
        this.homeImage.addEventListener('load', () => {
            this.calculatePosition();
        });
    }

    calculatePosition = () => {        
        var imgWidth = this.homeImage.offsetWidth;
        var imgHeight = this.homeImage.offsetHeight;
        var containerWidth = this.homeContainer.offsetWidth;
        var margin = (containerWidth - imgWidth) / 2;

        this.button.style.left = (imgWidth * 0.45 - 10 + margin).toString() + "px";
        this.button.style.top = "0px";
        this.button.style.width = (imgWidth * 0.45).toString() + "px";
        this.button.style.height = (imgHeight * 0.22).toString() + "px";
    }
}