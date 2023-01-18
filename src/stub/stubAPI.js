const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function (date) {
    return new Promise((resolve) => {
        let result = [];
        let random = seededRandom(date.getDate());

        for (let i = 17; i <= 23; i++) {
            if (random() < 0.5) {
                result.push(i + ':00');
            }
            if (random() < 0.5) {
                result.push(i + ':30');
            }
        };
        setTimeout(() => {
            resolve(result)
        }, 2000)
    })
};

const submitAPI = function (formData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 3000);
    });
};

export { fetchAPI, submitAPI };