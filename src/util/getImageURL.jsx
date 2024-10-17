const getImageURL = (directory, fileName) => {
    return new URL(`../assets/icons/${directory}/${fileName}.svg`, import.meta.url).href
}

export {getImageURL}