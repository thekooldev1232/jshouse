function flatten(arr) {

    if (Array.isArray(arr)) {
        let flatArry = [];
        function iteratetheArr(items) {
            items.map((item) => {
                if (Array.isArray(item)) {
                    iteratetheArr(item);
                } else {
                    flatArry.push(item);
                }
            })
        }
        iteratetheArr(arr);

        return flatArry;
    } else {
        return 'Improper input';
    }
}


console.log(flatten('afsfhsk'));
