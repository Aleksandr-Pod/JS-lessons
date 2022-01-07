export default class NewApiFetchImg {
    constructor() {}
    
    doFetch(page) {
        
        const url = 'https://pixabay.com/api/?key=25089539-92235f01f3468a6ac8c56a646';
        return fetch(`${url}&category=nature&page=${page}`)
            .then(response => response.json())
    }
}
 