const image1 = require('../../../../assets/statistics.png') ;
const image2 = require('../../../../assets/games.png') ;
const image3 = require('../../../../assets/pics.png') ;
const image4 = require('../../../../assets/messages.png') ;

export const personalButtonInfoSelectors = () => {
    const  personalButtonInfoArray = [
        {
            name: 'image1',
            sourse: image1, 
            alt: 'image1 alt'
        },
        {
            name: 'image2',
            sourse: image2,  
            alt: 'image2 alt'
        },
        {
            name: 'image3',
            sourse: image3, 
            alt: 'image3 alt'
        },
        {
            name: 'image4',
            sourse: image4, 
            alt: 'image4 alt'
        }
    ]
    return  personalButtonInfoArray;
}