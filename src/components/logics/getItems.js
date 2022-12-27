export const getItems = (category, menus) => {
    // console.log(menus);
    // console.log(category);
    const newArr = menus.filter(o => o.category === category);
    // console.log(newArr.length);
    return newArr.length;
}

export const getBgColor = () => {
    const bgarr = ["#82AAE3", "#91D8E4", "#CEEDC7", "#FFDB89", "#F3CCFF", "#DAE2B6", "#6D67E4", "#434242"]
    const randomBg = Math.floor(Math.random() * bgarr.length);
    const color = bgarr[randomBg];

    return color;
}