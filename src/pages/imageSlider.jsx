import React, { Component } from 'react';

class ImageSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImage: 1, //1층 이미지
        };
    }

    // 다음 이미지로 이동하는 함수
    nextImage = () => {
        this.setState((prevState) => ({
            currentImage: prevState.currentImage === 5 ? 1 : prevState.currentImage + 1,
        }));
    };

    // 이전 이미지로 이동하는 함수
    prevImage = () => {
        this.setState((prevState) => ({
            currentImage: prevState.currentImage === 1 ? 5 : prevState.currentImage - 1,
        }));
    };

    // 이미지에 대응하는 텍스트를 반환하는 함수
    getImageText = () => {
        const { currentImage } = this.state;
        switch (currentImage) {
            case 1:
                return '1층';
            case 2:
                return '2층';
            case 3:
                return '3층';
            case 4:
                return '4층';
            case 5:
                return '5층';

            default:
                return '';
        }
    };

    render() {
        const { currentImage } = this.state;
        const imagePath = `/images/lotte_f${currentImage}.png`;
        const imageText = this.getImageText();

        return (
            <div className="image-slider">
                <div className="map">
                    <img src={imagePath} alt={`lottemap${currentImage}`} />
                    <div className="image-text">{imageText}</div>
                </div>
                <button onClick={this.prevImage}>이전</button>
                <button onClick={this.nextImage}>다음</button>
            </div>
        );
    }
}

export default ImageSlider;
